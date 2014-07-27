---
title: James Maniscalco
layout: default
---

#James Maniscalco

##Blog

{% for post in site.posts %}
[{{ post.title }}]({{ post.url }})

  {% for cat in post.categories %}
   [{{ cat }}]({{ cat.url }})
  {% endfor %}
{% endfor %}