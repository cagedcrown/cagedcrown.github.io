---
layout: article
title: "Hosting your site on Github in 5 Minutes"
categories: blog
date: 2015-01-11
modified:
excerpt: How to host your site on Github using a NameCheap domain name in 5 Minutes or less.
tags: []
toc: true
image:
  feature: 
  teaser: 
  thumb:
share: true
comments: true
---



## Create your github repo

Github allows every user to host their site for free. The only catch is that you have to create a repo that is YourUsername.github.io

<figure>
    <img src="../../images/github_io.png"></a>
</figure>

##Clone your repository

Your repo has to be an exact match of your username.
<pre>
    <code>
    git clone git@github.com:username/username.github.io.git
    </code>
</pre>

##Create an index.html

In your index.html file type "Hello World!"

##Create a CNAME file
    {% raw %}
    touch CNAME
    {% endraw %}
yourdomainname.com (you do not need to add the "http://" part)
    </code>
</pre>
<figure>
    <img src="../../images/cname.png"></a>
</figure>

##Git add, git commit, and git push your changes
<pre>
    <code>
git add .
git commit -m "initial commit"
git push origin master
    </code>
</pre>
Check out yourusername.github.io site

## Namecheap
In NameCheap.com go to "Manage Domains > All Host Records"

<figure>
    <img src="../../images/all_host_records.png"></a>
</figure>

<h4>Modify your domain name settings</h4>

<figure>
    <img src="../../images/manage_domain.png"></a>
</figure>

##Change your @hostname to an A Record. 

Change your IP/ADDRESS to: 192.30.252.153

##Change your "www" to CNAME. 

Change your IP/ADDRESS to username.github.io.

After you finish, wait 5-10 minutes for your changes to take effect.

<br>
Thanks for reading! 
Feel free to leave a comment.
