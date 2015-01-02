---
layout: home
permalink: /
image:
  feature: doodle.jpg
---

<div class="tiles">
{% for post in site.categories.articles %}
  {% include post-grid.html %}
{% endfor %}
</div><!-- /.tiles -->