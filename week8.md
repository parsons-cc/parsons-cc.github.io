---
layout: page
title: "Clouds to Circuits / Filesystems, Git, IDEs"
---

## Networks!

There are networks everywhere! Here are some kinds.

### Centralized
![centralized](https://dl.dropboxusercontent.com/u/2100102/parsons-cc/images/centralized.png)
![panopticon](https://dl.dropboxusercontent.com/u/2100102/parsons-cc/images/panopticon.jpg)

### Decentralized
![decentralized](https://dl.dropboxusercontent.com/u/2100102/parsons-cc/images/decentralize.png)
![SOTUS](https://dl.dropboxusercontent.com/u/2100102/parsons-cc/images/Supreme-Court-Justices.jpg)

### Distributed
![distributed](https://dl.dropboxusercontent.com/u/2100102/parsons-cc/images/distributed.png)
![eisenhower](https://dl.dropboxusercontent.com/u/2100102/parsons-cc/images/finalmap.jpg)

### The Internet, everybody's favorite distributed network!
![tin cans](https://dl.dropboxusercontent.com/u/2100102/parsons-cc/images/tin-can-network.jpg)
![internet](https://dl.dropboxusercontent.com/u/2100102/parsons-cc/images/map-of-internet.png)

## Say Hello to the terminal

![Terminal.app](https://dl.dropboxusercontent.com/u/2100102/parsons-cc/images/terminal-demo.gif)

### Proceed with caution!
Be aware that the terminal won't babysit you in the way you're used to. You can do some **serious damage** if you're not careful. In a worst-case scenario, you could **delete some or all of your hard drive** by accident (trust me, I've done it). But we're hackers now so we can handle it, just remember to be careful and take your time. Also, back up your computer if you aren't already!

### The basics


![Applications->Utilities->Terminal.app](https://dl.dropboxusercontent.com/u/2100102/parsons-cc/images/terminal-location.png)

**Applications->Utilities->Terminal.app**

Turn up your volume, then let's say hi! Using `say` followed with text will say it out loud.

```bash
$ say hello
```

Time to get existential — `whoami` will tell you your username.

```bash
$ whoami
```

When you see `ls` think "list" -- list files in the current directory.

```bash
$ ls
```

But wait, what is the current directory? `pwd` is "path with directory" and will tell you where you are.

```bash
$ pwd
```

The dot (`.`) means current directory (folder). Commands like `ls` assume you mean the current directory if you don't say otherwise.

```bash
# same thing!
$ ls
$ ls .
```

Two dots (`..`) means the folder above this one. So this means "list the contents of the folder above me". But notice that `pwd` stays the same, because we never left the current folder.

```bash
$ ls ..
$ pwd
```

But this is boring, let's go somewhere! `cd` will change the directory. For instance, this will _move_ one folder up (use `pwd` to check):

```bash
$ cd ..
$ pwd
```

So let's get to the root of the matter! This will go to the very top folder of your hard drive. Use some of the tools we've learned to look around:

```bash
$ cd /
$ pwd
$ ls
```

If you really get lost, `open` will open in the Finder (which you're probably more comfortable with).

```bash
open .
```

Notice there are some files you can see in the terminal but not in the Finder! The people making OS X decided we can't be trusted with everything. Good thing we know how to use the terminal now.

This will bring us back to home base, in the terminal `~` means home.

```bash
$ cd ~
```

Ok so that's all great and everything but what else can we do? Well for one thing, there's "piping":

```bash
$ whoami | say
```

The `|` character takes the output of one command and sends it to another one. That last takes the output of `whoami` (your username) and instead of just spitting it out as text it sends it to the `say` command. Let's try another one:

```bash
$ pwd | say
```

What about `ls`?

```bash
$ ls | say
```

Oh no, how do I stop it!?

 * `control + c` -> Eject! Force whatever you're doing to cancel
 * `contrul + u` -> Remove currently typed text
 * `up key` / `down key` -> Look through your history
 * `tab key` -> Autocomplete

Some other helpful tools: for most commands if you type the command and `-h` it will give you some basic info about how to use it:

```bash
$ say -h
```

And you can usually get more in-depth instructions from the manual (`man`) command:

```bash
$ man say
```

This might look like gibberish to you now, but you'll get used to it over time. For instance, I learned that you can get a list of voices by entering this:

```bash
say -v ?
```

And I can use that list now to output things in different voices:

```bash
say -v Trinoids whoa this is a weird one
say -v Pipe Organ bum bum bum bummm bum bum
```

You get the idea ;)

## Say hello to git

![Git](https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/Git-logo.svg/320px-Git-logo.svg.png)

Some basic terms:

 * ***[Git](http://en.wikipedia.org/wiki/Git_%28software%29)*** is a free and open-source ["revision control system"](http://en.wikipedia.org/wiki/Revision_control) built for programming projects. It uses a **distributed** networking system to manage tracking code between collaborators. Think of it as a "Save" for your code project, in the same way you would save an Adobe Illustrator file or a Word document. Or even better, think of it as [Time Machine](http://en.wikipedia.org/wiki/Time_Machine_%28OS_X%29) for your code, since it keeps track of all of your changes, and allows you go back to older versions if you need to.

 * ***[GitHub](http://en.wikipedia.org/wiki/GitHub)*** is a company that makes it really easy to use Git. They are a good study in the power of designing user experiences, as the popularity of Git now is partually fueled by the ease of use on GitHub.

 * A ***repository*** is the archive where all the information about your project is stored.

 * A **commit** is basically an individual "save" for a _Git repositry_. It's a snapshot of a particular moment in a project's history, containing information about everything that has changed since the last _commit_. When you save a _commit_ you also add a _commit message_, which is a brief written description of what has changed in the project.

 * **Cloning** is when you copy a Git repository to make a new one. This is what happens when you copy files from GitHub onto your computer. Every Git repository can be cloned infinite times, and each clone can be synced with the others.

## Git, meet the terminal

Ok, so let's do some ... uh .. _gitting_? First go to your GitHub account (hint: you should have put your username in the class Google Doc).

Let's fire up the terminal. First make sure you're in your home folder.

```bash
$ cd ~
```

Ok, now let's make a folder to store our code projects in:

```bash
$ mkdir Code
```

Now `cd` into that folder.

```bash
$ cd Code
```

Ok, now go to your Git repository and copy the "clone" URL:

~[clone-url](https://dl.dropboxusercontent.com/u/2100102/parsons-cc/images/git-clone.png)

Now type `git pull ` and then paste the link into the terminal: (so your url should be in place of `[path to your repository]" below:

```bash
$ git pull [path to your repository]
```

Now if we try `ls` we should see our newly cloned project! Let's use `cd` to go inside and check it out:

```bash
$ ls
$ cd [name of your project]
```
Ok now let's see what's going on in git.

```bash
$ git status
```

Try and change a file, and then see:

```bash
$ git status
```

How do we save?

```bash
$ git add .
```

But now it's only saved on my computer. How do I get it back up to the server?

```bash
$ git push
```

What if somebody else makes changes? Or what if I change it somewhere else?

```bash
$ git pull
```

Ok! Now we're ready to go!

## HTML Demo

 * Opening site in Atom
 * Open in browser
  * Refresh, refresh, refresh!
 * Basic HTML
  * Adding links
  * Adding images
 * Basic CSS
  * Background colors
  * Fonts
  * Magic?
 * Bringing in JavaScript??

# Assignments

 1. Make a basic HTML website! Anything goes really, but make sure to add your "Drawing Machine" project.
 2. Read "The Information"
