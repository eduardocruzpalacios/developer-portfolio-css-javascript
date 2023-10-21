function showPopup() {
  document.documentElement.style.overflow = 'hidden';
  let popupContainerEl = document.getElementById('popup-container');
  popupContainerEl.style.display = 'flex';
}

function removePopup() {
  let popupContainerEl = document.getElementById('popup-container');
  popupContainerEl.style.display = 'none';
  document.documentElement.style.overflowY = 'auto';
}
