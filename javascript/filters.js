function clickFilter(containerToShow, tabClicked) {
  var filtersEls = document.getElementsByClassName('filter-container');
  for (var i = 0; i < filtersEls.length; i++) {
    filtersEls[i].style.display = 'none';
  }

  document.getElementById(containerToShow).style.display = 'block';

  var tabLinksEls = document.getElementsByClassName('filter-tag');
  for (var j = 0; j < tabLinksEls.length; j++) {
    tabLinksEls[j].classList.remove('filter-active');
  }

  document.getElementById(tabClicked).classList.add('filter-active');
}
