---
layout: archive
title: "Work"
date: 2015-01-03
modified:
excerpt: "A collection of projects & experiments"
tags: []
image:
  feature: 
  teaser: 
---

<div class="tiles">
{% for post in site.categories.work %}
  {% include post-grid.html %}
{% endfor %}
</div><!-- /.tiles -->
