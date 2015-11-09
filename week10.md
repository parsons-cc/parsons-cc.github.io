---
layout: page
title: "Week 10: Research & Development"
---

<div class="cc-toc"></div>

# How we feelin?

![Code + Design](http://33.media.tumblr.com/851e19a6f444b5539b8fc47e4990cee6/tumblr_nx7w4wEX161siv67lo1_540.gif)

["rabbot’s mind" by hexmoire](http://hexmoire.tumblr.com/post/132445416519/rabbots-mind)

# Today

1. Finish Git demo (finally!)
2. Discuss "Web Design, The First 100 Years"
3. Talk about research & prototyping.
4. Time project demo

# Git er done!

Ok, now you probably have two folders to deal with for your class site. Hopefully they're both in your `Code` folder, but if not we can move them:

1. A folder called something like **"[username].github.io-master"** that you edited several weeks ago for the assignment (in class we downloaded it as a .zip file)
2. A folder called **"class-site-git"** that we pulled from GitHub in class using the `git clone` command.

So what we want to do is move the contents of the first folder (with our changes in it) to the second folder. How do we do this? Copy/paste!

![copy/paste](https://dl.dropboxusercontent.com/u/2100102/parsons-cc/images/fix-class-site-folder.mov.gif)


### Back to the Terminal!

Make sure we're in the "Code" folder:

```bash
$ cd ~/Code
```

Change directory to the "class-site-git" folder.

```bash
$ cd class-site-git
```

Now notice that if you do a `ls -a` (**l**i**s**t **a**ll) you will see a ".git" folder. This is where all of the version information is stored!

```bash
$ ls -a
.		.DS_Store	README.md	malevich.html
..		.git		index.html	style.css
```

So now you have all of your files in an active git project. Now let's save the changes and push them to the server!

### Saving changes to Git

Ok, first let's try the **`status`** command. This will tell us what's up with our git project.

Hey git, what's up?

```bash
$ git status
```

![git status 1](https://dl.dropboxusercontent.com/u/2100102/parsons-cc/images/git-status-1.mov.gif)

There's quite a bit of info in the status message here. There are two main things to pay attention to:

First files that are _already being tracked by git but have updates_ since they were last saved (the file names will be in red in most terminals):

```
Changes not staged for commit:
  (use "git add <file>..." to update what will be committed)
  (use "git checkout -- <file>..." to discard changes in working directory)

	modified:   README.md
	modified:   index.html
```

Next, we have files that _are new and aren't being tracked by git_ at all:

```
Untracked files:
  (use "git add <file>..." to include in what will be committed)

	malevich.html
	style.css

```
Really what we want to do is save all of the changes in the folder, both the existing files that have been changed and the new files that aren't being tracked yet. Fortunately, that's pretty easy:

![git status 2](https://dl.dropboxusercontent.com/u/2100102/parsons-cc/images/git-status-2.mov.gif)

```bash
$ git add .
```

This basically tells git "mark all of the modified or new files in this folder to be saved." We can see what has changed by using the `status` command again:

```bash
$ git status
```

Now you should see all of the files under a heading "Changes to be committed", and they will probably have all changed to a green color.

```
Changes to be committed:
  (use "git reset HEAD <file>..." to unstage)

	modified:   README.md
	modified:   index.html
	new file:   malevich.html
	new file:   style.css
```

That means our files are ready to be committed (saved) to the git repo. Let's do it!

```bash
$ git commit -m "Add updates to class site"
```

Ok, if that all went according to plan then we should be able to check `status` again:

```bash
$ git status
```

And see something like this:

```
nothing to commit, working directory clean
```


### Pushing changes to GitHub

```bash
$ git push origin master
```

Now if you go to your git repo, you should be able to see the updates!

![git status 3](https://dl.dropboxusercontent.com/u/2100102/parsons-cc/images/git-status-3.mov.gif)

# Discussion
![The Internet For People](https://static.pinboard.in/w100/w100.076.jpg)
["Web Design, the First 100 Years"](http://idlewords.com/talks/web_design_first_100_years.htm) by Maciej Cegłowski

# Project Ideas!

Discuss with your peers. Share the idea you researched and talk about what you know/don't know.

# R&D

![Testing airplane lenses used in map making at the U.S. Bureau of Standards, Washington, D.C](https://c2.staticflickr.com/6/5730/21863925636_fa032bbd40_b.jpg)
[Testing airplane lenses used in map making at the U.S. Bureau of Standards, Washington, D.C](https://www.flickr.com/photos/library_of_congress/21863925636/in/photolist-4jykcc-4jz9gW-4jCkMY-4jyk8T-zj3kn7-x3dLnt-4jv5U2-4jyivH-z4JwBq-4jyDoe-4jyiS6-egdN43-9YvV2c-4ibnVY-4juxcn-4S6yCp-4jCESL-4jyiyv-4jCnpG-4jyjTT-4i7hMH-4jyjQR-4jCmMS-x3LcuM-xqx1Ri-4jCtd9-4jCnxj-4jyj8e-4jv3K2-4jCnfu)

## Design = Infinite Loop
![loop](https://d13yacurqjgara.cloudfront.net/users/117549/screenshots/1372400/loop.gif)

[Infinite Loop by Rob Nichols](https://dribbble.com/shots/1372400-Infinite-Loop-Gif)

The first step is knowing what questions to ask!

![Rummy](https://dl.dropboxusercontent.com/u/2100102/parsons-cc/images/rummy.png)
[Rummy](https://www.youtube.com/watch?v=X2G8BNgSA3M)

## Research
![Research Library, Nanking Univ'y](https://c2.staticflickr.com/4/3679/14119233937_7280aa9106_b.jpg)
[Research Library, Nanking Univ'y](https://www.flickr.com/photos/library_of_congress/14119233937/)


### Research tips
* Make a list of questions first. What are the things you need to investigate? Break it into pieces
* Look for examples first! Even examples that use different tools can be helpful. Searching GitHub helps.
* Dig deeper! Look through the documentation
* Find somebody who's already solved the problem and ask! Why not?

### Some starting points
* GitHub
* Documentation for the tool you're using
* Stack overflow
* Class site resources!

## Development

Prototypes & proofs-of-concept.

![DaMM](https://dl.dropboxusercontent.com/u/2100102/parsons-cc/images/damm.png)
[Dark Matter Manufacturing](http://www.darkmattermanufacturing.com/)

Prototype:
![prototype](https://dl.dropboxusercontent.com/u/2100102/parsons-cc/images/prototypes.jpg)

Final Product:
![Final Product](http://static1.squarespace.com/static/4f57841c24ac1bb6d947d820/54872a6ee4b05992d0a5b7d5/54872bd6e4b027745c1db527/1418144730773/TriangularSeries_Basel2_photoCredit-MidnightCommercial.png?format=1000w)

[_Triangular Series_ video](https://vimeo.com/jamiezigelbaum)

### Some approaches when prototyping:

* Build it smaller
* Build it out of paper, or some other tool you are familiar with
* Make it ugly but functional
* Fake it but make it pretty!
* Build it in many separate pieces, then put them all together
* Try building a simple version two different ways
* Try to do the hardest part first
* Take it one step at a time!

# Time project demos

## Running a Python server:

This should start a python server at the address [http://localhost:8000](http://localhost:8000)

```bash
$ cd path/to/project
$ python -m SimpleHttpServer
```
![python server](https://camo.githubusercontent.com/b74657d3d198208943f6492ec3341eeabdb32ce8/68747470733a2f2f646c2e64726f70626f7875736572636f6e74656e742e636f6d2f752f323130303130322f706172736f6e732d63632f696d616765732f707974686f6e2d73696d706c652d7365727665722e6d6f762e676966)

[More info and instructions here!](https://gist.github.com/daytona1/3a687b46a43236055819)

## Demonstration Project

In class we began a sample project creating a "cat calendar". **[Browse the sample code here](https://github.com/parsons-cc/timepiece-example-catcal) or [download it to your computer](https://github.com/parsons-cc/timepiece-example-catcal/archive/master.zip).**

### Concept

The goal was to create a site that would update the background based on the current time and the image/text based on the day of the month.

[![Concept](https://github.com/parsons-cc/timepiece-example-catcal/raw/master/assets/cat-time-concept.jpg)](https://github.com/parsons-cc/timepiece-example-catcal)

### Final product

Click through to see the code and demos for each step of the way:

[![Completed](https://github.com/parsons-cc/timepiece-example-catcal/raw/master/assets/part6.png)](https://github.com/parsons-cc/timepiece-example-catcalx`)


# Next Week

I will spend some time Saturday looking over your proposals and get back to you with suggestions, etc.

## Office Hours

We can talk about your projects and catch up on conferences.

* **Sunday:** 4-7pm
* **Tuesday:** 7-9pm

Let me know if you plan on coming! Also, let me know if you'd like to meet but can't make these times!

## Assigments

> "The way to create something beautiful is often to make subtle tweaks to something that already exists, or to combine existing ideas in a slightly new way."

-- Paul Graham

 1. Review prototypes
 2. Read Paul Graham, ["Hackers and Painters"](http://www.paulgraham.com/hp.html)
