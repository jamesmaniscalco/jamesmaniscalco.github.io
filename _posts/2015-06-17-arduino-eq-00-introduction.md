---
categories: [arduino, programming, electronics]
title: "Arduino Graphic EQ Part 0: Introduction"
layout: post
---

So last week I came across the [Arduino Uno](https://www.arduino.cc/en/Main/arduinoBoardUno) that I bought a few years back. In the intervening time I never actually used the thing -- I think that, without a specific project to work on, I was a bit overwhelmed by the possibilities for the microcontroller. As someone who already had programming experience, I wasn't really interested in the usual starter projects like making LEDs blink or playing with basic digital logic. Instead I wanted to make something cool, something functional, but I had trouble thinking of something cool and challenging enough to be worth my time.

Had trouble, that is, until last week. I came up with a nice idea for a project to get me into the arduino, namely a digital graphic equalizer to integrate into a stereo system. It will take an audio signal in, filter the signal by frequency, selectively amplify or attenuate the separated frequency segments, then recombine them into an output signal.

I should note that I don't want to convert the analog signal to a digital one, process it using the arduino, then give an analog output -- I think that's beyond the arduino's processing capabilities, and it might be a project better suited to something like the [Raspberry Pi](https://www.raspberrypi.org/). My project will instead have a bunch of analog filters -- high-pass, low-pass, and band-pass -- that will be controlled electronically by the arduino.

In fact there are a bunch of arduino project tutorials out there that purport to be graphic equalizers; however, all the ones I could find were really just spectrum analyzers - that is, they read an incoming audio signal and display how loud each frequency band is, or maybe use that information to drive some lights or something like that. So I hope this project journal helps people who are actually looking to make an equalizer!

It's going to take a bunch of steps, especially since I'm new to the world of microcontrollers. Here's the general idea of what I want to do to get this off the ground:

- Start with a [rotary encoder](https://en.wikipedia.org/wiki/Rotary_encoder) and figure out how to get the arduino to read its signals
- Prototype the filter and amplification circuits
- Figure out a user interface with an LCD screen
- Get the arduino to tune [digital potentiometers](https://en.wikipedia.org/wiki/Digital_potentiometer) to amplify/attenuate the signals
- Replace the arduino with a different microcontroller to make a permanent device
- Build a nice enclosure

As the astute reader will no doubt observe, this is gonna be a lot of work! I'll have to learn and practice lots of stuff: digital logic, analog signal processing, soldering, design, and more.

So follow along if you dare! Once I get everything in order, my first step is to figure out the rotary encoder.

Jump to the first part here:

[Arduino Graphic EQ Part 1: Rotary Encoder]({% post_url 2015-06-20-arduino-eq-01-rotary-encoder %})