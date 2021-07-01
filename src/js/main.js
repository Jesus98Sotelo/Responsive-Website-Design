document.getElementById('icon__menu').addEventListener('click', () => {
  document.getElementById('nav__menu').classList.toggle('show');
  document.getElementById('icon__menu').classList.toggle('fa-ellipsis-v')
  document.getElementById('icon__menu').classList.toggle('fa-ellipsis-h')
})