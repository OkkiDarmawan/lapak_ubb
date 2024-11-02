const sliderWrapperFashion = document.querySelector('.slider-wrapper-fashion');
const slidesFashion = document.querySelectorAll('.slide-fashion');
const prevButtonFashion = document.querySelector('.prev-fashion');
const nextButtonFashion = document.querySelector('.next-fashion');
let currentIndexFashion = 0;

function showSlideFashion(index) {
  const offset = -index * 100;
  sliderWrapperFashion.style.transform = `translateX(${offset}%)`;
}

prevButtonFashion.addEventListener('click', () => {
  if (currentIndexFashion > 0) {
    currentIndexFashion--;
    showSlideFashion(currentIndexFashion);
  }
});

nextButtonFashion.addEventListener('click', () => {
  if (currentIndexFashion < slidesFashion.length - 1) {
    currentIndexFashion++;
    showSlideFashion(currentIndexFashion);
  }
});


