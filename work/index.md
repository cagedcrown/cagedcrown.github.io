---
layout: archive
title: "Work"
date: 2015-01-03
modified:
excerpt: 
tags: []
image:
  feature: 
  teaser: 
---
A collection of web developement projects & experiments.

<div class="tiles">
{% for post in site.categories.work %}
  {% include post-grid.html %}
{% endfor %}
</div><!-- /.tiles -->
