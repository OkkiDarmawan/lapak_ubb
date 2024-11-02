const sliderWrapperAkademik = document.querySelector('.slider-wrapper-akademik');
const slidesAkademik = document.querySelectorAll('.slide-akademik');
const prevButtonAkademik = document.querySelector('.prev-akademik');
const nextButtonAkademik = document.querySelector('.next-akademik');
let currentIndexAkademik = 0;

function showSlideAkademik(index) {
  const offset = -index * 100;
  sliderWrapperAkademik.style.transform = `translateX(${offset}%)`;
}

prevButtonAkademik.addEventListener('click', () => {
  if (currentIndexAkademik > 0) {
    currentIndexAkademik--;
    showSlideAkademik(currentIndexAkademik);
  }
});

nextButtonAkademik.addEventListener('click', () => {
  if (currentIndexAkademik < slidesAkademik.length - 1) {
    currentIndexAkademik++;
    showSlideAkademik(currentIndexAkademik);
  }
});


