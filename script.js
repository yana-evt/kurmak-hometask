const slides = document.querySelectorAll('.js-slide');
const prev = document.querySelector('.js-button-prev');
const next = document.querySelector('.js-button-next');

const nextSlide = function () {
  const current = document.querySelector('.slide--current');
  current.classList.remove('slide--current');
  if ((current.nextElementSibling) && (current.nextElementSibling.classList.contains('js-slide'))) {
    current.nextElementSibling.classList.add('slide--current');
  } else {
    slides[0].classList.add('slide--current');
  }
}

const prevSlide = function () {
  const current = document.querySelector('.slide--current');
  current.classList.remove('slide--current');
  if (current.previousElementSibling) {
    current.previousElementSibling.classList.add('slide--current');
  } else {
    slides[slides.length - 1].classList.add('slide--current');
  }
}

next.addEventListener('click', e => {
  nextSlide();
} );

prev.addEventListener('click', e => {
  prevSlide();
} )
