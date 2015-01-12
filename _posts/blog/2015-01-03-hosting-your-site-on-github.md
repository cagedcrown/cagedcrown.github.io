---
layout: article
title: "Hosting your site on Github in 10 Minutes or less"
categories: blog
date: 2015-01-11
modified:
excerpt: The quick and easy way to host your site on github Using a NameCheap domain name in 10 Minutes or less.
tags: []
image:
  feature: 
  teaser: 
  thumb:
share: true
comments: true
---

## Github
<h4>Create your repo on Github</h4>

Github allows every user to host their site for free. The only catch is that you have to create a repo that is YourUsername.github.io

<figure>
    <img src="../../images/github_io.png"></a>
</figure>

<h4>Clone your repository</h4>

Your repo has to be an exact match of your username.
```
    git clone git@github.com:username/username.github.io.git
```

<h4>Create an index.html</h4>

In your index.html file type "Hello World!"

<h4>Create a CNAME file</h4>
Inside your CNAME file type yourdomainname.com (you do not need to add the "http://" part)

<figure>
    <img src="../../images/cname.png"></a>
</figure>

<h4>Git add, git commit, and git push your changes.</h4>

<pre>
    <code>
    git add .
    git commit -m "initial commit"
    git push origin master
    </code>
</pre>
Check out yourusername.github.io site

##Namecheap

If you have not already bought a domain name. Buy one on <a href="https://namecheap.com">Namecheap.com</a>

<h4>After you are finished go to "Manage Domains > All Host Records"</h4>

<figure>
    <img src="../../images/all_host_records.png"></a>
</figure>

<h4>Modify your domain name settings</h4>

1. Change your @hostname to an A Record. 

2. Change your IP/ADDRESS to github's: 192.30.252.153

3. Change your "www" to CNAME. 

4. Change your IP/ADDRESS to username.github.io.

<figure>
    <img src="../../images/manage_domain.png"></a>
</figure>

<h4>After you finish, wait 5-10 minutes for your changes to take effect.</h4>

<br>
Thanks for reading! 
Feel free to leave a comment.
