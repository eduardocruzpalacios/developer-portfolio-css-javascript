function accordion(buttonClicked) {
  var buttonEl = document.getElementById(buttonClicked);
  buttonEl.classList.toggle('accordion-clicked');
  buttonEl.nextElementSibling.classList.toggle('panel-clicked');
}
