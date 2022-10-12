function openModalInfo(id) {
  let modalEl = document.getElementById(id);
  modalEl.style.display = 'block';
  document.documentElement.style.overflow = 'hidden';
}

function closeModalInfo(id) {
  let modalEl = document.getElementById(id);
  modalEl.style.display = 'none';
  document.documentElement.style.overflowY = 'auto';
}
