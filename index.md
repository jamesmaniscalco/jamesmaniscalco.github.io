---
title: James Maniscalco
layout: default
---

#James Maniscalco

##Blog

{% for post in site.posts %}
[{{ post.title }}]({{ post.url }})

{{ post.categories | category_links }}
{% endfor %}