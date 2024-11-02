const sliderWrapper = document.querySelector('.slider-wrapper');
const slides = document.querySelectorAll('.slide');
const prevButton = document.querySelector('.prev');
const nextButton = document.querySelector('.next');
let currentIndex = 0;

function showSlide(index) {
  const offset = -index * 100;
  sliderWrapper.style.transform = `translateX(${offset}%)`;
}

prevButton.addEventListener('click', () => {
  if (currentIndex > 0) {
    currentIndex--;
    showSlide(currentIndex);
  }
});

nextButton.addEventListener('click', () => {
  if (currentIndex < slides.length - 1) {
    currentIndex++;
    showSlide(currentIndex);
  }
});