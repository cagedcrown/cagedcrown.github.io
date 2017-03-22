---
layout: header-image-post
title:  "Hosting your site on Github"
date:   2015-01-11 10:21:23
headerimg: /img/github_hosting_1024x512.jpg
articleclass: left
---

## GitHub: Create your unique repository

Github allows every user to host their site for free. The only catch is that you have to create a repo that is `USERNAME.github.io`.

Create a new repo that is an exact match of your username.

<img src="/img/github_io.png" alt="github">

## git init or git clone


```
touch README.md
git init
git add README.md
git commit -m "first commit"
git remote add origin git@github.com:USERNAME/USERNAME.github.io.git
git push -u origin master
```


## Create an index.html

In your `index.html`, type `Hello World!`.

## Create a CNAME file

Inside your CNAME file insert your domain name.

<img src="/img/cname.png" alt="cname">

## Git add, git commit, and git push your changes

```
git add .
git commit -m "your commit message"
git push origin master
```

## Namecheap

Go to "Manage Domains > All Host Records"

<img src="/img/all_host_records.png" alt="host records">

## Modify your domain name settings

Change @ to an `A Record` and IP/ADDRESS to Github's IP/ADDRESS: `192.30.252.153`.

Change www to `CNAME` and IP/ADDRESS to `USERNAME.github.io.`.

<img src="/img/manage_domain.png" alt="manage domain">

After your changes are saved, wait 5-10 minutes for yourdomainname.com to be hosted on github.
