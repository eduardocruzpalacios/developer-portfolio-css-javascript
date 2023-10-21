function openTab(event, show) {
  var i, tabContentEls, tabLinksEls;

  tabContentEls = document.getElementsByClassName('tab-content');
  for (i = 0; i < tabContentEls.length; i++) {
    tabContentEls[i].style.display = 'none';
  }

  tabLinksEls = document.getElementsByClassName('tab-link');
  for (i = 0; i < tabLinksEls.length; i++) {
    tabLinksEls[i].className = tabLinksEls[i].className.replace(' active', '');
  }

  document.getElementById(show).style.display = 'block';
  event.currentTarget.className += ' active';
}
