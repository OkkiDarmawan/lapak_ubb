const sliderWrapperElektronik = document.querySelector('.slider-wrapper-elektronik');
const slidesElektronik = document.querySelectorAll('.slide-elektronik');
const prevButtonElektronik = document.querySelector('.prev-elektronik');
const nextButtonElektronik = document.querySelector('.next-elektronik');
let currentIndexElektronik = 0;

function showSlideElektronik(index) {
  const offset = -index * 100;
  sliderWrapperElektronik.style.transform = `translateX(${offset}%)`;
}

prevButtonElektronik.addEventListener('click', () => {
  if (currentIndexElektronik > 0) {
    currentIndexElektronik--;
    showSlideElektronik(currentIndexElektronik);
  }
});

nextButtonElektronik.addEventListener('click', () => {
  if (currentIndexElektronik < slidesElektronik.length - 1) {
    currentIndexElektronik++;
    showSlideElektronik(currentIndexElektronik);
  }
});


