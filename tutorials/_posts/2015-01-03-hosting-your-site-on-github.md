---
layout: header-image-post
title:  "Hosting your site on Github in 10 Minutes or less"
date:   2015-01-11 10:21:23
headerimg: /img/github_hosting_1024x512.jpg
articleclass: left
---

## GitHub: Create your unique repository

1) Github allows every user to host their site for free. The only catch is that you have to create a repo that is `USERNAME.github.io`.

2) Create a new repo that is an exact match of your username.

<img src="/img/github_io.png" alt="github">

### git init or git clone

3) git init

```
touch README.md
git init
git add README.md
git commit -m "first commit"
git remote add origin git@github.com:USERNAME/USERNAME.github.io.git
git push -u origin master
```

#### REMEMBER: you need to have a repo created on github before you can use this.

```
git remote add origin git@github.com:USERNAME/USERNAME.github.io.
```

### Create an index.html

3) In your `index.html`, type `Hello World!`.

#### Create a CNAME file

4) Inside your CNAME file insert your domain name.

<img src="/img/cname.png" alt="cname">

#### Git add, git commit, and git push your changes

```
git add .
git commit -m "your commit message"
git push origin master
```

## Namecheap

5) Go to "Manage Domains > All Host Records"

<img src="/img/all_host_records.png" alt="host records">

### Modify your domain name settings

6) Change @ to an `A Record` and IP/ADDRESS to Github's IP/ADDRESS: `192.30.252.153`.

7) Change www to `CNAME` and IP/ADDRESS to `USERNAME.github.io.`.

<img src="/img/manage_domain.png" alt="manage domain">

8) After your changes are saved, wait 5-10 minutes for yourdomainname.com to be hosted on github.
