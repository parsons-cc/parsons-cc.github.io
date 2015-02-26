---
layout: post
title: Readings and Assignments for Mar 3
---

You'll be finishing up & reviewing the work from last class and submitting that as this week's assignment. There is also another reading.

<!--more-->

# Readings

Please read Chapter 2 from [Marijn Haverbeke's _Eloquent JavaScript_](http://eloquentjavascript.net/02_program_structure.html) for next week's class.


## Review

I've posted the example exercises from in class to the [class GitHub account](https://github.com/parsons-cc/patternist). Reviewing these may be helpful to complete the assignment. Remember to use your JavaScript console for the first two!

 1. [Exercise One (printing to the console)](http://parsons-cc.github.io/patternist/exercise-one/index.html) ([code](https://github.com/parsons-cc/patternist/blob/gh-pages/exercise-one/index.html))
 2. [Exercise Two (loops & conditionals)](http://parsons-cc.github.io/patternist/exercise-two/index.html) ([code](http://parsons-cc.github.io/patternist/exercise-two/index.html))
 3. [Exercise Three (print to the page)](http://parsons-cc.github.io/patternist/exercise-three/index.html) ([code](http://parsons-cc.github.io/patternist/exercise-three/index.html))


## Assignment

Your assignment for next week is to finish your work from last class and conver the program to print to the HTML page instead of the JavaScript Console. You'll want to look to the source of [Excercise Three](http://parsons-cc.github.io/patternist/exercise-three/index.html) for help on how to print to the page using p5.js. Key to making this work is [line 89](https://github.com/parsons-cc/patternist/blob/gh-pages/exercise-three/index.html#L89) from Exercise Three.

    element = createElement(elementTag, output);

This line should replace `console.log` and instead print to the HTML page. [You can find more information about `createElement` here.](http://p5js.org/reference/#/p5/createElement)

### Resources

More helpful links can be found on the [resources](/resources.html) page.

 * [p5.js Overview](https://github.com/processing/p5.js/wiki/p5.js-overview) — this is a tool we're using in class
 * [The p5 `createElement` function](http://p5js.org/reference/#/p5/createElement) — this is what we're using to print to the page
 * [JavaScript Comparison and Logical Operators](http://www.w3schools.com/js/js_comparisons.asp) — learn more about `<`, `>`, `==`, etc.
 * [JavaScript `%` (Remainder) Operator](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Arithmetic_Operators#Remainder)
 * [Copy Paste Character](http://copypastecharacter.com) &#9988;

### Evaluation (Grading)

This assignment will be graded based on the following:

 * The assignment is submitted on time
 * The program runs in the browser
 * The program outputs a finite number of lines (covered in Excercise One)
 * The program output changes over time (covered in Excercise Two)
 * The program outputs to the HTML page (covered in Excercise Three)

Please submit your assignment via a [GitHub Pull Request](/github-guide.html), as usual.
