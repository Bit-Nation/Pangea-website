---
layout: legal
title: Frequently Asked Questions
updated: January 10, 2019
---

{% for item in site.data.faq %}### {{ item.q }}
{{ item.a }}
{% endfor %}
