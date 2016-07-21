---
layout: header-image-post
title:  "Hosting your site on Github in 10 Minutes or less"
date:   2015-01-11 10:21:23
headerimg: /img/github_hosting_1024x512.jpg
articleclass: left
---

## Github

<h4>Create your unique repository</h4>

Github allows every user to host their site for free. The only catch is that you have to create a repo that is USERNAME.github.io

Create a new repo that is an exact match of your username.

<figure>
    <img src="/img/github_io.png" alt="github"></a>
</figure>

<h4>git init or git clone</h4>

...git init

```
<pre>
    <code>
    touch README.md
    git init
    git add README.md
    git commit -m "first commit"
    git remote add origin git@github.com:USERNAME/USERNAME.github.io.git
    git push -u origin master
    </code>
</pre>
```

```
...or git clone
<pre>
    <code>
    git remote add origin git@github.com:USERNAME/USERNAME.github.io.git
    git push -u origin master
    </code>
</pre>
```

*REMEMBER: you need to have a repo created on github before you can use* <code>git remote add origin git@github.com:USERNAME/USERNAME.github.io.</code>

<h4>Create an index.html</h4>

In your index.html file type <code>Hello World!</code>

<h4>Create a CNAME file</h4>
Inside your CNAME file insert your domain name. You do not need to add the "http://" part.

<figure>
    <img src="/img/cname.png" alt="cname"></a>
</figure>

<h4>Git add, git commit, and git push your changes.</h4>
<pre>
    <code>
    git add .
    git commit -m "your commit message"
    git push origin master
    </code>
</pre>
<h2>Namecheap</h2>

<h4>Go to "Manage Domains > All Host Records"</h4>

<figure>
    <img src="/img/all_host_records.png" alt="host records"></a>
</figure>

<h4>Modify your domain name settings</h4>

Change @ to an <code>A Record</code> and IP/ADDRESS to Github's IP/ADDRESS: <code>192.30.252.153</code>

Change www to <code>CNAME</code> and IP/ADDRESS to <code>USERNAME.github.io.</code>.

<figure>
    <img src="/img/manage_domain.png" alt="manage domain"></a>
</figure>

After your changes are saved, wait 5-10 minutes for yourdomainname.com to be hosted on github.

<br>
Thanks for reading!
Feel free to leave a comment.
