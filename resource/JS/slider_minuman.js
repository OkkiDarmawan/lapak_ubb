const sliderWrapperMinuman = document.querySelector('.slider-wrapper-minuman');
const slidesMinuman = document.querySelectorAll('.slide-minuman');
const prevButtonMinuman = document.querySelector('.prev-minuman');
const nextButtonMinuman = document.querySelector('.next-minuman');
let currentIndexMinuman = 0;

function showSlideMinuman(index) {
  const offset = -index * 100;
  sliderWrapperMinuman.style.transform = `translateX(${offset}%)`;
}

prevButtonMinuman.addEventListener('click', () => {
  if (currentIndexMinuman > 0) {
    currentIndexMinuman--;
    showSlideMinuman(currentIndexMinuman);
  }
});

nextButtonMinuman.addEventListener('click', () => {
  if (currentIndexMinuman < slidesMinuman.length - 1) {
    currentIndexMinuman++;
    showSlideMinuman(currentIndexMinuman);
  }
});