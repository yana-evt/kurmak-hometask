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

// Dialog
const KEYCODE= {
  ENTER: 13,
  ESC: 27,
};

const buttonLoginOpen = document.querySelector('.button-login-open');
const dialog = document.querySelector('.modal-login');
const dialogMask = document.querySelector('.modal-login__mask');

document.querySelector('.button-login-open').addEventListener('click', openDialog)

function openDialog() {
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
  dialog.querySelector('#userLogin').addEventListener('input', handleLoginInput);
  dialog.querySelector('#userLogin').addEventListener('keydown', handleLoginPasswordKeydown);
  dialog.querySelector('#userPassword').addEventListener('input', handlePasswordInput);
  dialog.querySelector('#userPassword').addEventListener('keydown', handleLoginPasswordKeydown);
  document.addEventListener('keydown', checkCloseDialog);

  dialog.querySelector('.modal-login__input').focus();
}

function handleLoginInput() {
  dialog.querySelector('#textInputLoginError').classList.remove('show');
}

function handlePasswordInput() {
  dialog.querySelector('#textInputPasswordError').classList.remove('show');
}

function handleLoginPasswordKeydown(event) {
  if (event.keyCode === KEYCODE.ENTER) {
    Promise.resolve().then(handleLoginRequest)
  }
}

function handleEnterButtonClick() {
  Promise.resolve().then(handleLoginRequest)
}

function handleLoginRequest() {
  let loginErrorMessage = dialog.querySelector('#textInputLoginError');
  let passwordErrorMessage = dialog.querySelector('#textInputPasswordError');

  hideErrors();

  let loginInput = dialog.querySelector('#userLogin');
  let passwordInput = dialog.querySelector('#userPassword');

  let loginIsMissing = loginInput.value == null || loginInput.value === '';
  let passwordIsMissing = passwordInput.value == null || passwordInput.value === '';

  if (loginIsMissing) {
    loginErrorMessage.classList.add('show');
  }

  if (passwordIsMissing) {
    passwordErrorMessage.classList.add('show');
  }

  if (!loginIsMissing && !passwordIsMissing) {
    alert('Logged in');

    closeDialog();
  }
}

function hideErrors() {
  dialog.querySelector('#textInputLoginError').classList.remove('show');
  dialog.querySelector('#textInputPasswordError').classList.remove('show');
}

function closeDialog() {
  dialogMask.removeEventListener('click', closeDialog);
  dialog.querySelector('.modal-login__enter').removeEventListener('click', handleEnterButtonClick);
  dialog.querySelector('.modal-login__close').removeEventListener('click', closeDialog);
  dialog.querySelector('#userLogin').removeEventListener('input', handleLoginInput);
  dialog.querySelector('#userLogin').removeEventListener('keydown', handleLoginPasswordKeydown);
  dialog.querySelector('#userPassword').removeEventListener('input', handlePasswordInput);
  dialog.querySelector('#userPassword').removeEventListener('keydown', handleLoginPasswordKeydown);
  document.removeEventListener('keydown', checkCloseDialog);

  dialog.querySelector('#userLogin').value = '';
  dialog.querySelector('#userPassword').value = '';
  hideErrors();

  Array.from(document.body.children).forEach(child => {
    if (child !== dialog && child !== dialogMask) {
      child.inert = false;
    }
  });

  dialog.classList.remove('opened');
  dialogMask.classList.remove('opened');

  buttonLoginOpen.focus();
}

function checkCloseDialog(event) {
  if (event.keyCode === KEYCODE.ESC) {
    closeDialog();
  }
}

// Tabs

function openTab(evt, tabName) {
  var i, tabcontent, tablinks;

  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }

  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" about-museum__tab--active", "");
  }

  document.getElementById(tabName).style.display = "block";
  evt.currentTarget.className += " about-museum__tab--active";
}

  document.getElementById("heading1").click();

// const museumHistory = document.querySelector('.about-museum__history');
// const museumHistoryMask = document.querySelector('.museum-history__mask');
//
// function historyMask() {
//
//   if(museumHistory.classList.contains("about-museum__tab--active")) {
//     museumHistoryMask.classList.add('opened');
//   }
// }
//
// historyMask();
