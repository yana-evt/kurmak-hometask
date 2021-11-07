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

////
const KEYCODE= {
  ESC: 27,
};

const dialog = document.querySelector('.modal-login');
const dialogMask = document.querySelector('.modal-login__mask');

let previouslyActiveElement;

document.querySelector('.button-login-open').addEventListener('click', openDialog)

function openDialog() {
  previouslyActiveElement = document.activeElement;

  Array.from(document.body.children).forEach(child => {
    if (child !== dialog && child !== dialogMask) {
      child.inert = true;
    }
  });

  dialog.classList.add('opened');
  dialogMask.classList.add('opened');

  dialogMask.addEventListener('click', closeDialog);
  dialog.querySelector('.modal-login__enter').addEventListener('click', handleEnterButtonClick);
  dialog.querySelector('.modal-login__close').addEventListener('click', closeDialog);
  document.addEventListener('keydown', checkCloseDialog);

  dialog.querySelector('.modal-login__input').focus();
}

function handleEnterButtonClick() {


  alert('Logged in');

  closeDialog();
}

function closeDialog() {
  dialogMask.removeEventListener('click', closeDialog);
  dialog.querySelector('.modal-login__enter').removeEventListener('click', handleEnterButtonClick);
  dialog.querySelector('.modal-login__close').removeEventListener('click', closeDialog);
  document.removeEventListener('keydown', checkCloseDialog);

  Array.from(document.body.children).forEach(child => {
    if (child !== dialog && child !== dialogMask) {
      child.inert = false;
    }
  });

  dialog.classList.remove('opened');
  dialogMask.classList.remove('opened');

  previouslyActiveElement.focus();
}

function checkCloseDialog(event) {
  if (event.keyCode === KEYCODE.ESC) {
    closeDialog();
  }
}
