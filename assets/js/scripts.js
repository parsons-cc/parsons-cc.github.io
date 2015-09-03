function start() {
  var sketches = [
      {
        name: 'Introduction',
        url: 'http://codepen.io/andyinabox/pen/medwzM'
      }
    ]
    , current = sketches[sketches.length-1];

  jQuery.getScript(current.url + '.js');

  // jQuery(function() {
  //   jQuery('#canvas')
  //     .width($(window).width())
  //     .height($(window).height());
  // })

};

start();
console.log('wtf!');

//
// var canvas
//   , greeting = 'Hello Creative Computing!'
//   , len = 0
//   , fontSize = 1
//   , letters = [];
//
// function setup() {
//   print(greeting);
//
//   canvas = createCanvas(windowWidth, windowHeight);
//   canvas.parent('start');
// }
//
// function draw() {
//
//   background('yellow');
//   fill('red');
//   noStroke();
//   textSize(fontSize);
//   textStyle(BOLD);
//   textAlign(CENTER);
//
//   if(len < greeting.length) {
//     len++
//   } else {
//     len = 0;
//     fontSize++;
//   }
//
//
//   for(var i=0; i < letters.length; i++) {
//     drawLetter(letters[i]);
//   }
//
//   letters.pop();
// }
//
// function drawLetter(letter) {
//   push();
//     fill(255, 0, 0)
//     textSize(letter.textSize);
//     text(letter.char, letter.x, letter.y);
//   pop();
// }
//
// function mouseMoved() {
//   letters.push({
//     textSize: fontSize
//     , x: mouseX
//     , y: mouseY
//     , char: greeting.charAt(len)
//   });
// }
//
// function windowResized() {
//   resizeCanvas(windowWidth, windowHeight);
// }
