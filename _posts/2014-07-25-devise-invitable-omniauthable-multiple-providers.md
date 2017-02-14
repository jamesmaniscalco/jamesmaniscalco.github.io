---
categories: [ruby-on-rails, webdev, programming]
title: Setting up a rails application with devise invitable and omniauthable with multiple omniauth providers
layout: post
---


In a recent Ruby on Rails development project, I needed to create an authentication system that provided several options for users:

- logging in with email/password - the standard authentication method.
- logging in with an omniauth provider, such as Facebook or Google
    - and to link multiple different accounts (one Facebook account and one Google account)
- inviting other users (automatically creating accounts for other users and sending account access tokens via email)

I chose to base my authentication system on [Devise](https://github.com/plataformatec/devise), a wonderful gem with great support and lots of options. I use it for all my Rails applications that need user authentication.

Out of the box, Devise provides support for authenticating users by email and password. There is also a standard module, `devise_omniauthable`, which allows users to authenticate with an external omniauth provider. However, this doesn't natively support multiple providers; in fact, going by the standard documentation for `devise_omniauthable`, _users cannot use both methods of authentication_. That is, if a user creates an account with a username and password, he cannot later log in with the omniauth provider instead; vice versa, if he creates an account with the omniauth provider, he cannot later log in with a username and password.

In my research before I tackled this problem, I came across [this stackoverflow answer](http://stackoverflow.com/questions/21249749/rails-4-devise-omniauth-with-multiple-providers) which proved to be very helpful. My method below is largely devised from [Alex Tonkonozhenko's](http://stackoverflow.com/users/2539916/alex-tonkonozhenko) answer.

## Omniauthable

Before we get started with `devise_invitable`, let's handle setting up `devise_omniauthable` with multiple providers.

The [Devise docs](https://github.com/plataformatec/devise/wiki/OmniAuth%3a-Overview) give a good overview of the process for setting up `devise_omniauthable` as it's a core module of Devise. I won't go into too much detail for the initial setup here, as it's well documented and not very tricky, but here we will not be performing the migration on the `users` table (as suggested in the docs). Instead, to accommodate multiple login methods, we will create a new Authorization model, with instances created for each login strategy a user wishes to use (email/password authentication will still take place directly with the user model).

Before we do that, as per the Devise docs, we need to add the appropriate gems to our `Gemfile`:


{% highlight ruby linenos %}

gem 'omniauth-facebook'
gem 'omniauth-google-oauth2'

{% endhighlight %}


Install the gems:


{% highlight bash %}

$ bundle install

{% endhighlight %}


Then we add the configuration details to `config/initializers/devise.rb`. I'm storing my keys in environment variables so they don't get checked into my repository and thereby compromise the security of the keys, so I set my initializer like this:


{% highlight ruby linenos %}

config.omniauth :facebook, ENV["FACEBOOK_APP_ID"], ENV["FACEBOOK_APP_ SECRET"]
config.omniauth :google_oauth2, ENV["GOOGLE_CLIENT_ID"], ENV["GOOGLE_CLIENT_ SECRET"]

{% endhighlight %}


We need to create a new controller to handle the omniauth callbacks, and tell Devise to use ours rather than the default. In `config/routes.rb`:


{% highlight ruby linenos %}

devise_for :users, :controllers => { :omniauth_callbacks => "omniauth_callbacks" }

{% endhighlight %}


Then, in the new controller:


{% highlight ruby linenos %}

# app/controllers/omniauth_callbacks.rb

class OmniauthCallbacksController < Devise::OmniauthCallbacksController
  def all
    @user = User.from_omniauth(request.env["omniauth.auth"], current_user)

    if @user.persisted?
      flash[:notice] = t('devise.omniauth_callbacks.success', :kind => User::AUTH_PROVIDERS[params[:action].to_sym])
      sign_in_and_redirect @user, :event => :authentication
    else
      session["devise.user_attributes"] = @user.attributes
      redirect_to new_user_registration_url
    end
  end

  User::AUTH_PROVIDERS.each do |k, _|
    alias_method k, :all
  end
end

{% endhighlight %}


Now that our controllers are set up, let's move on to creating our new models.


### Creating Authorization model


Create the migration file for our new model:


{% highlight bash %}

$ rails g migration CreateAuthorization

{% endhighlight %}


then open the migration file and edit it like so:


{% highlight ruby linenos %}

#db/migrate/nnnnnnnnnnnnnnn_create_authorization.rb

class CreateAuthorization < ActiveRecord::Migration
  def change
    create_table :authorizations do |t|
      t.integer :user_id
      t.string :provider
      t.string :uid
      t.string :token
      t.string :secret

      t.timestamps
    end
  end
end

{% endhighlight %}


finally, run the migration:


{% highlight bash %}

$ rake db:migrate

{% endhighlight %}


And create the model file:


{% highlight ruby linenos %}

# app/models/authorization.rb

class Authorization < ActiveRecord::Base
  belongs_to :user
end

{% endhighlight %}


### Making changes to the user model


Next, we need to make a few changes to the user model to provide the methods required by the new controller.


{% highlight ruby linenos %}

#user.rb

AUTH_PROVIDERS = {
  facebook: 'Facebook',
  google_oauth2: 'Google'
}

has_many :authorizations

def self.from_omniauth(auth, current_user)
  # first we find or create an Authorization instance.
  authorization = Authorization.where(:provider => auth.provider, 
                                      :uid => auth.uid.to_s, 
                                      :token => auth.credentials.token, 
                                      :secret => auth.credentials.secret).first_or_initialize
  if authorization.user.blank?    # if the Authorization's user is blank,
    # get a new user, either from the email in the Authorization or from the current user.
    user = current_user.nil? ? User.where('email = ?', auth['info']['email']).first : current_user
    if user.blank?   # if we still don't have a user, create a new one.
      user = User.new
      user.password = Devise.friendly_token[0, 20]
      user.fetch_details(auth)
      user.save     # save the user
    end
    authorization.user = user
    authorization.save      # associate and save the Authorization.
  end
  authorization.user        # finally, return the user that we want.
end

def fetch_details(auth)
  self.email = auth.info.email
end

{% endhighlight %}


### Setting up your omniauth providers

Finally, in order for you to be actually use the sites you chose as omniauth providers, you need to register your application with the providers. Below I give instructions for setting up Google and Facebook for authentication.

In general, you need to give your application's domain name and the callback path for the Devise omniauth authentication callback (the path that the omniauth provider will redirect your user's browser when he successfully authenticates). By default, this path is `/auth/:provider/callback`. Check `user_omniauth_callback` in the output of `rake routes` to be sure. If you have `:path` set up in your Devise route configuration, you will need to prepend your callback path with the Devise path, i.e. `/accounts/auth/:provider/callback`.

#### Storing your omniauth keys

For storing my omniauth authentication keys, I use a file called `.env` stored in my Rails application root directory. I generally use [foreman](https://github.com/ddollar/foreman) to spin up my applications, which loads any keys stored in `.env` as environment variables. The file uses the following syntax:


{% highlight bash linenos %}

# .env

FACEBOOK_APP_ID=12345678
FACEBOOK_APP_SECRET=a1b2c3d4
GOOGLE_CLIENT_ID=23456789
GOOGLE_CLIENT_SECRET=24587254abcdef

{% endhighlight %}


If you're using version control like Git (which you definitely should be doing), make sure to put this file in your `.gitignore` so you don't inadvertently store your secret keys in your repository. This is a huge security risk; if your repository is public, anyone can see your keys. It's akin to writing your passwords on a sticky note posted on your computer screen. **It is to be avoided**.

Anyways, on with the show:

#### Setting up Google

The `omniauth-google-oauth2` gem has detailed instructions [in the readme](https://github.com/zquestz/omniauth-google-oauth2#google-api-setup), so I won't go into too much detail here. Also see the [google developer docs](https://developers.google.com/accounts/docs/OAuth2) for more information.

For the callback URL, use your domain followed by `/auth/google_oauth2/callback`. If you're on localhost, the path is `http://localhost:8080/auth/google_oauth2/callback`, assuming you are using `8080` as your server port on `localhost`.

#### Setting up Facebook

Facebook changes their policies frequently and without much notice; as such these instructions might be out of date.

Anyways, log into the [Facebook developer site](https://developers.facebook.com) and register a new application from the Apps menu. You'll get an App ID and an App Secret; put those into your `.env` file.

In the Settings panel, put in your app's domain in the App Domains field. Click 'Add Platform', select 'Website', and put in the full path of your site.

In the Advanced tab of the Settings panel, in the Security section, under Valid OAuth redirect URIs, enter `http://{your domain here}/accounts/auth/facebook/callback`.

##### Working with localhost
You can create another app and set it to be the test version of your primary app; this will allow you to use localhost as the server.

Follow the same instructions for the main site, but with the following changes:

- App Domains: `localhost`
- Site URL: `http://localhost:8080/`
- Valid OAuth redirect URIs: `http://localhost:8080/auth/facebook/callback`

### Making views friendly

Since the `:provider` name isn't necessarily user-friendly, modify `views/devise/shared/_links.html.erb` to use the nice names we defined in the User model (we're changing the `link_to` text):


{% highlight erb linenos %}

<%- if devise_mapping.omniauthable? %>
  <%- resource_class.omniauth_providers.each do |provider| %>
    <%= link_to "Sign in with #{User::AUTH_PROVIDERS[provider]}", omniauth_authorize_path(resource_name, provider) %><br />
  <% end -%>
<% end -%>

{% endhighlight %}

## Invitable

Now that we have `devise_omniauthable` set up with the `Authorization` model, we can move on to allowing users to invite other users with the `devise_invitable` gem. This module is not included in the main Devise gem, but it's a well-supported add-on.

The gem's [github page](https://github.com/scambra/devise_invitable) has good instructions to get you running. Once you follow that setup, there's only one main thing to get it working with `omniauth`. Bear with me as I give a little preamble:

In my application, there are several authorization roles (we use CanCan) for the users; if the users create their accounts by themselves, they are automatically set to the first (base) role. However, an administrator may send an invitation to a new user and specify one of a number of roles in addition to the base role.

In short, the utility of the email invitations is to pre-create accounts with advanced privileges for certain users.

Let's look briefly at the `devise_invitable` workflow under normal operation:

1. Alice sends invitation to Bobby
2. Account is created for Bobby with `invitation_token` attribute
3. Email is sent to Bobby with invitation link
4. Bobby clicks on the link and is brought to an invitation login form
5. Bobby is allowed to log in and set a password (since he doesn't have one yet)
6. Bobby's `invitation_token` is set to `nil`, telling the rest of the application that his account has been activated

Now consider the workflow with omniauth integrated:

1. Alice sends invitation to Bobby
2. Account is created for Bobby with `invitation_token` attribute
3. Email is sent to Bobby with invitation link
4. Bobby clicks on the link and is brought to an invitation login form
5. Instead of setting his password, Bobby clicks "log in with Google" and is authenticated

The first four steps for both workflows are identical. To round out the divergence in the fifth step, we merely have to set Bobby's `invitation_token` to `nil` after he has logged in to signify to the rest of the application that his invitation was successful.

To do this, let's edit the `self.from_omniauth` method in `user.rb`:


{% highlight ruby linenos %}

# user.rb

def self.from_omniauth(auth, current_user)
  ...
    if user.blank?   # if we still don't have a user, create a new one.
      user = User.new
      user.password = Devise.friendly_token[0, 20]
      user.fetch_details(auth)
      user.save     # save the user
    end

    # this part is new:
    if user.invitation_token?   # if the user was invited, set the invitation token to nil so they're activated
      user.update(invitation_token: nil)
    end

    authorization.user = user
    authorization.save      # associate and save the Authorization.
  ...
end

{% endhighlight %}


Now all that's left is to provide the links for the user to log in with the omniauth providers on the account invitation form, `/app/views/devise/invitations/edit.html.erb`:


{% highlight erb linenos %}
    
...

<%- if devise_mapping.omniauthable? %>
  <p>You may also log in with an account on one of these sites:</p>

  <%- resource_class.omniauth_providers.each do |provider| %>
    <%= link_to "Sign in with #{User::AUTH_PROVIDERS[provider]}", omniauth_authorize_path(resource_name, provider) %><br />
  <% end -%>
<% end -%>

{% endhighlight %}

And we're done! Everything seems to work for me. What about you?
