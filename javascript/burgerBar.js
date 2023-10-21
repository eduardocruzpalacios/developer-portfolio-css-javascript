var isMenuClosed = true;
var icon = document.getElementById('icon-menu');

icon.addEventListener('click', () => {
  document.querySelector('.hidden').classList.toggle('show');

  // delay value must be equal to nav ul transition for mobile
  if (isMenuClosed) {
    setTimeout(function () {
      setIconToCross();
    }, 750);
  } else {
    setTimeout(function () {
      setIconToBars();
    }, 750);
  }
});

function setIconToCross() {
  icon.classList.remove('fa-bars');
  icon.classList.add('fa-times');
  isMenuClosed = false;
}

function setIconToBars() {
  icon.classList.remove('fa-times');
  icon.classList.add('fa-bars');
  isMenuClosed = true;
}

function closeNav() {
  setTimeout(function () {
    document.querySelector('.hidden').classList.toggle('show');
    setIconToBars();
  }, 750);
}
