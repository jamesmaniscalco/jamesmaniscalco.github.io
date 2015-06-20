---
categories: [arduino, programming, electronics]
title: "Arduino Graphic EQ Part 1: Rotary Encoder"
layout: post
---

*Note: this is part of a series of posts about my arduino graphic equalizer project. You can [start back at the beginning]({% post_url 2015-06-17-arduino-eq-00-introduction %}).*

In the world of electronics, there are essentially three kinds of knobs that you can use to control things. First are your standard [potentiometers](https://en.wikipedia.org/wiki/Potentiometer), which are essentially a variable resistor that's controlled by how far you spin it. A potentiometer (a "pot") has limited travel: you can only spin it so far in one direction, where the resistance is highest, and you can only spin it so far back the other way to the low resistance end. Think of a dimmer switch that you would use for the lights in your house: that's a potentiometer. Second is a multi-position switch, like the kind you would see as the mode selector on an SLR camera, or the speaker selector on your home stereo (A, B, A+B, HEADPHONES, etc.).

The third kind of knob, a [rotary encoder](https://en.wikipedia.org/wiki/Rotary_encoder) is a bit different from the other two: it's an inherently digital object. Whereas the potentiometer and rotary switch can work in totally analog circuits (like your lights or your record player), the rotary encoder needs some kind of digital logic to interpret its signals and act on them. It doesn't actually select anything or change any resistance, it just makes a signal telling whether it's been turned a step clockwise or a step counterclockwise. Some of them also have a button (usually clicking the knob in) that sends a signal saying it's been pressed.

How the signal works is actually pretty cool. Here's a nice image of the waveform (via [Hobbytronics](http://www.hobbytronics.co.uk/rotary-encoder-tutorial)):

![Rotary encoder signal diagram]({{ site.url }}/images/rotary_encoder_phase.jpg)

So the encoder has three terminals called A, B, and C. In the typical setup, C is connected to ground and A and B are connected to the microcontroller and through resistors to a powered line. This means that the pins are normally high.

When you turn the knob clockwise, the A pin goes low (inside the switch, the A pin is shorted to C). As the turn click continues, B goes low too, then A goes high again, and B goes high at the end. When you turn counterclockwise, the signal pattern is similar, but B goes low (and later high) first.

It turns out that interpreting this signal on the arduino is actually kind of tricky. There are a few articles out there that offer solutions, but of the two major methods I found, neither really suited my needs. First, the [Hobbytronics article](http://www.hobbytronics.co.uk/rotary-encoder-tutorial) suggests using a loop to check if the pins change: if you know that one of the pins changed from, say, high to low, you can check the other pin to know if you made a clockwise tick or a counterclockwise one (check out the dashed lines in the image above). I tried this out, but it didn't really work for me; the events weren't being registered correctly, and each click would usually record two or three extra clicks (in mixed directions).

The second method was actually pretty cool, from the [article on the Arduino Playground](http://playground.arduino.cc/Main/RotaryEncoders). It suggests using interrupts - they're special functions that get triggered when a signal on a pin changes (for my arduino, only two pins can do this). The processor stops whatever it's doing, then executes the interrupt function, and goes back to what it was doing before. Nick Gammon has [a really cool post](http://gammon.com.au/interrupts) about how interrupts work on the arduino.

Unfortunately, the method worked a bit too well. The trouble is that interrupts pile up: an interrupt can't be interrupted, so if a new one arrives while an interrupt is being processed, the processor queues it and then executes it after the first interrupt finishes. Since each change of either pin triggers the function, all four changes were piling up, and each tick of the knob would result in a signal chain of clockwise-counterclockwise-clockwise-counterclockwise. Clearly this is not what we want!

So I figured out a third method as an alternative to the first two. The gist is that the program waits for the full cycle of four events, then records the cycle as either a clockwise tick or a counterclockwise one. Here's an outline of the loop:

- checks if either pin goes low
- wait until the other pin goes low
- wait for the first pin to go high again
- wait for the second pin to go high

Further, during each of the "wait" steps, the loop checks a timer to make sure it's not waiting too long. I set this to 300 milliseconds, since I think that should be more than enough time for a slow knob-turner to finish a full cycle (it usually takes about 30 milliseconds).

One issue is that some events might still get missed, especially if they happen quickly; fortunately, I think this will only really happen if the knob is spun very quickly, and in that case a few interstitial missed events shouldn't be a big deal.

To test the rotary encoder, I set up a circuit with some LEDs as a sort of hybrid of the tutorials linked above. The encoder actually does three things. First, it controls the brightness of one LED (as in the Hobbytronics article). Next, it cycles through three LEDs individually (one lit at a time): clockwise cycles right, counterclockwise cycles left. Finally, it increments or decrements an integer counter that tracks the net rotation of the encoder.

Here's what the setup looked like on the breadboard (I made the image using [Fritzing](http://fritzing.org/home/)):

![Rotary encoder test circuit on a breadboard]({{ site.url }}/images/rotary_led_bb.svg)
And here's the code:

{% highlight cpp linenos %}

// these are the three rotating LEDs
int led1 = 13;
int led2 = 12;
int led3 = 11;

// this one is the one we adjust the brightness of
int brightnessLED = 9;
volatile int brightness = 120;
int fadeAmount = 10;

// here are the two inputs from the rotary encoder
int encoderPinA = 2;
int encoderPinB = 3;
volatile int encoderA;
volatile int encoderB;
volatile int encoderPosition = 0;

// this is the initialization for which LED starts first
volatile int whichLED = 1;

// we'll use this to check if input has happened.
// 0 = no input
// 1 = clockwise step
// 2 = ccw step
volatile int inputRegistered = 0;

// keep track of the time
unsigned long currentTime;
unsigned long loopTime;
unsigned long loopLength = 300;






void incrementLED() {
  if (whichLED == 3) {
    whichLED = 1;
  } else {
    whichLED += 1;
  }
}

void decrementLED() {
  if (whichLED == 1) {
    whichLED = 3;
  } else {
    whichLED -= 1;
  }
}

void updateLEDs() {
  digitalWrite(led1, LOW);
  digitalWrite(led2, LOW);
  digitalWrite(led3, LOW);
  digitalWrite(14 - whichLED, HIGH);  // 14-whichLED = LED pin number

  analogWrite(brightnessLED, brightness);
}

void increaseBrightness() {
  // don't exceed 255
  if (brightness + fadeAmount <= 255) {
    brightness += fadeAmount;
  }
}

void decreaseBrightness() {
  // don't go less than zero, Elvis
  if (brightness - fadeAmount >= 0) {
    brightness -= fadeAmount;
  }
}

void incrementAction() {
  increaseBrightness();
  incrementLED();
  encoderPosition += 1;
  Serial.println("increment");
}

void decrementAction() {
  decreaseBrightness();
  decrementLED();
  encoderPosition -= 1;
  Serial.println("decrement");
}

void readEncoder() {
  encoderA = digitalRead(encoderPinA);
  encoderB = digitalRead(encoderPinB);
}



void setup() {
  // put your setup code here, to run once:
  pinMode(led1, OUTPUT);
  pinMode(led2, OUTPUT);
  pinMode(led3, OUTPUT);

  pinMode(brightnessLED, OUTPUT);
  pinMode(encoderA, INPUT);
  pinMode(encoderB, INPUT);

  Serial.begin(9600);

  updateLEDs();

  readEncoder();

  currentTime = millis();
  loopTime = currentTime;
}

void loop() {
  inputRegistered = 0;      // reset the input checker
  loopTime = millis();   // get the time at the start of the loop

  // the input checker loop should record all four events and also have a timer
  // so it resets after, say, a second.
  while (inputRegistered == 0) {   // loop until an input event is registered
    
    readEncoder();
  
    if (!(encoderA)) {  // first check if encoder A goes to LOW
      // now we expect the CW sequence: B low, A high, B high
      while (encoderB) {  // wait until B goes low...
        currentTime = millis();  // but don't wait too long:
        readEncoder();
        if ( currentTime >= loopTime + loopLength ) return;
      }
      while (!(encoderA)) {  // now wait until A goes high
        currentTime = millis();
        readEncoder();
        if ( currentTime >= loopTime + loopLength ) return;
      }
      while (!(encoderB)) {  // finally wait until B goes high
        currentTime = millis();
        readEncoder();
        if ( currentTime >= loopTime + loopLength ) return;
      }
      inputRegistered = 1;  // register this as a clockwise step
    } else if (!(encoderB)) {  // if encoder A didn't go low, check if B did
      // now we expect the CCW sequence: A low, B high, A high
      while (encoderA) {  // wait until A goes low...
        currentTime = millis();  // but don't wait too long:
        readEncoder();
        if ( currentTime >= loopTime + loopLength ) return;
      }
      while (!(encoderB)) {  // now wait until B goes high
        currentTime = millis();
        readEncoder();
        if ( currentTime >= loopTime + loopLength ) return;
      }
      while (!(encoderA)) {  // finally wait until A goes high
        currentTime = millis();
        readEncoder();
        if ( currentTime >= loopTime + loopLength ) return;
      }
      inputRegistered = 2;  // register this as a CCW step
    }
  }  // the input loop exits when an input is registered.

  // if input is registered, we'll break out of the loop.
  // now we can act on the input:
  if (inputRegistered == 1) incrementAction();
  if (inputRegistered == 2) decrementAction();
  
  updateLEDs();
}

{% endhighlight %}

Alrighty! Everything seems to work with the rotary encoder. There's also a pushbutton switch, as I mentioned earlier, but adding that into the input loop should be no problem. I'll come back to it later, when I start working on the user interface.

Check back soon for updates on the project!