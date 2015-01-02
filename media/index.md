---
layout: archive
title: "Work"
date: 2014-05-30T11:40:45-04:00
modified:
excerpt: "A collection of projects & experiments"
tags: []
image:
  feature:
  teaser:
---

<div class="tiles">
{% for post in site.categories.media %}
  {% include post-grid.html %}
{% endfor %}
</div><!-- /.tiles -->
