var i = 0;
var text = 'FullStack Developer | JavaScript & Java';
var speed = 100;

function typing() {
  if (i < text.length) {
    document.getElementById('home-message').innerHTML += text.charAt(i);
    i++;
    setTimeout(typing, speed);
  }
}
