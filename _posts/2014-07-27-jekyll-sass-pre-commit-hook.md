---
title: Pre-compiling Sass for Jekyll on Github Pages
categories: [webdev, jekyll, git]
layout: post
---


[Jekyll](http://jekyllrb.com/) is a great tool for building blog-aware static sites (in fact, it's what this site runs on). [Github Pages](https://pages.github.com/) is a great companion - Github provides free static site hosting for developers, and they support Jekyll sites (the sites compile and deploy when the developer pushes changes to the `master` or `gh-pages` branch, depending on whether the site is for an organization or a project).

Jekyll also provides good plugin support, and [many are available](http://jekyllrb.com/docs/plugins/#available-plugins). However, the version of Jekyll supported on Pages is currently outdated - [the dependency page reports](https://pages.github.com/versions/) Jekyll version 1.5.1 as the supported release, at least several months out of date (the most recent version of Jekyll at the time of writing is 2.1.1).


##The problem

The emerging problem is that stylesheets written in Sass, which in version 2.1 are automatically compiled to CSS (Jekyll 2 includes [Jekyll Compass](https://github.com/mscharley/jekyll-compass) as part of the core application), are not compiled in the earlier version on Github's servers.

For the earlier release, we might think to use the `jekyll-compass` plugin to compile the Sass files. Problematically, though, Pages only supports [a very limited subset of Jekyll plugins](https://help.github.com/articles/using-jekyll-plugins-with-github-pages), for understandable security reasons. This means we have to figure out some other way to compile our Sass in a nice fashion and make it available for Pages.

So, what's the solution?


##The solution

The simplest solution at this point would be to build the site, manually copy the compiled stylesheets into the site's root directory, commit, and push the changes to Github, thus deploying the site:


{% highlight bash %}

$ jekyll build
$ cp _site/css/styles.css css/styles.css
$ git add -u
$ git commit -m "my commit message"
$ git push

{% endhighlight %}


(My site's stylesheet hierarchy is compressed to one single stylesheet when the Sass is compiled.)

This works, but it's a lot of work to do every time you want to commit and push your changes. We can easily make a script to put all of this together. Moreover, to make things more interesting and easier for ourselves, we can take advantage of Git [commit hooks](http://git-scm.com/book/en/Customizing-Git-Git-Hooks) to automatically execute our script each time we commit.

We can create/edit `.git/hooks/pre-commit` to include the following:


{% highlight bash linenos %}

#!/bin/sh

jekyll build
if [ $? -ne 0 ]; then
  echo -e "Jekyll build failed, aborting commit."
  exit 1;
fi

DIR=$(git rev-parse --show-toplevel)
cp $DIR/_site/css/styles.css $DIR/css/styles.css
git add $DIR/css/styles.css

exit 0

{% endhighlight %}


Make sure to set the file as executable with:


{% highlight bash %}

$ chmod +x .git/hooks/pre-commit

{% endhighlight %}


Note: if you are using a Github client application to handle your commits, you will likely need to specify where the `jekyll` executable is. Since I use `rbenv`, I needed to add the following to the script (above the call to `jekyll`):


{% highlight bash linenos %}

PATH=/usr/local/var/rbenv/shims:$PATH

{% endhighlight %}


Now, when we try to commit, git will build the site, copy the CSS to the Github-appropriate directory, and add the file to the repository before executing the commit. In addition, if the build fails with any errors, the commit won't go through.