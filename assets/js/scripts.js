function start() {
  var sketches = [
      {
        name: 'Introduction',
        url: 'http://codepen.io/andyinabox/pen/medwzM'
      }
    ]
    , current = sketches[sketches.length-1];

  jQuery.getScript(current.url + '.js');
};

start();
