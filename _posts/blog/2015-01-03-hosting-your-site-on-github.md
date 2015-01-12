---
layout: article
title: "Hosting your site on Github."
categories: blog
date: 2015-01-11
modified:
excerpt: How to host your site on Github using a NameCheap domain name.
tags: []
image:
  feature: 
  teaser: 
  thumb:
share: true
comments: true
---


##Github
### Create your github repo

Github allows every user to host their site for free. The only catch is that you have to create a repo that is <YourUsername>.github.io

<figure>
    <img src="../../images/github_io.png"></a>
</figure>
### Clone your repository

Your repo has to be an exact match of your username.
<pre>
    <code>
    git clone git@github.com:username/username.github.io.git
    </code>
</pre>

### Create an index.html
<pre>
    <code>
   <h1>Hello World!</h1>
    </code>
</pre>
### Create a CNAME file
<pre>
    <code>
touch CNAME
    </code>
</pre>
<pre>
    <code>
yourdomainname.com (you do not need to add the "http://" part)
    </code>
</pre>
<figure>
    <img src="../../images/cname.png"></a>
</figure>

### Git add, git commit, and git push your changes.
<pre>
    <code>
git add .
git commit -m "initial commit"
git push origin master
    </code>
</pre>
### Check out <yourUsername>github.io site

## NameCheap
### Manage Domains > All Host Records

<figure>
    <img src="../../images/all_host_records.png"></a>
</figure>

### Modify your domain name settings

<figure>
    <img src="../../images/manage_domain.png"></a>
</figure>
Change your @hostname to an A Record. Change your IP/ADDRESS to:
<pre>
    <code>
192.30.252.153
    </code>
</pre>
Change your www to CNAME. Change your IP/ADDRESS to username.github.io.
<pre>
    <code>
username.github.io.
    </code>
</pre>
## After you finish, wait 10 minutes for your changes to take effect.



<br>
Thanks for reading! 
Feel free to leave a comment.
