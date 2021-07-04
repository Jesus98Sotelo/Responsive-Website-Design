import '../css/main.css';

document.getElementById('icon__menu').addEventListener('click', () => {
  document.getElementById('nav__menu').classList.toggle('show');
  document.getElementById('icon__menu').classList.toggle('fa-ellipsis-v')
  document.getElementById('icon__menu').classList.toggle('fa-ellipsis-h')
})

const workItems = document.querySelectorAll('.work .item');
const workItemsCount = workItems.length;
let currentIndex = 0;
const closeButton = document.getElementById('close-button');
const prevButton = document.getElementById('prev-button');
const nextButton = document.getElementById('next-button');


workItems.forEach(item => {
  item.addEventListener('click' , (e) => {
    e.preventDefault();
    currentIndex = parseInt(item.getAttribute('data-id'));
    const contentArr = document.querySelectorAll('#details-container .item');

    document.querySelectorAll('#details-container .item').forEach((item) => { item.classList.add('item-hide');})
    document.querySelectorAll('#details-container .item')[currentIndex].classList.toggle('item-hide');
    document.getElementById('screen').style['animation-name'] = 'fade-in';
    document.querySelector('body').style['overflow'] = 'hidden';

    setTimeout(() => {
      document.getElementById('details-container').style.display = 'block';
    }, 1000);

    setTimeout(() => {
      document.getElementById('screen').style = '';
    }, 2000);
  });
});


closeButton.addEventListener('click', (e) => {
  e.preventDefault();

  document.getElementById('screen').style['animation-name'] = 'fade-in';
  document.querySelector('body').style['overflow'] = 'auto';

  setTimeout(() => {
    document.getElementById('details-container').style.display = 'none';
  }, 1000);

  setTimeout(() => {
    document.getElementById('screen').style = '';
  }, 2000);
});

prevButton.addEventListener('click', (e) => {
  if (currentIndex - 1 < 0) {
    return
  }
  currentIndex--;
  loadGalleryItem(currentIndex);
});
nextButton.addEventListener('click', (e) => {
  if (currentIndex + 1 == workItemsCount) {
    return
  }
  currentIndex++;
  loadGalleryItem(currentIndex);
});

function loadGalleryItem(index) {
  document.querySelectorAll('#details-container .item').forEach(item => { item.classList.add('item-hide');})
  document.querySelectorAll('#details-container .item')[index].classList.toggle('item-hide');
}