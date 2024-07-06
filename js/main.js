/*
function changeHeadingColor() {
    let scrollHeight = window.scrollY;
    let heading = document.querySelector('.heading');
    if (scrollHeight < 450) {
      heading.style.backgroundColor = null;
      heading.style.backdropFilter = null;
      heading.style.position = "absolute";
      } 
    else {
      heading.style.backgroundColor = "rgba(243, 239, 232, 0.6)";
      heading.style.backdropFilter = "blur(54px)";
      heading.style.position = "fixed";
      heading.style.marhinBottom = "88px";
    }
}*/
function changeHeadingColor() {
  let scrollHeight = window.scrollY;
  let heading = document.querySelector('.heading');
  let logotip = document.querySelector('.heading-logo__img');
  let headingNumber = document.querySelector('.heading-number');
  let headingText = document.querySelector('.heading-nav__option-text');
  if (scrollHeight < 450) {
    heading.classList.remove('scrolled');
    logotip.classList.remove('black-color');
    headingNumber.classList.remove('black-color');
    headingText.classList.remove('black-color');

  } else {
    heading.classList.add('scrolled');
    logotip.classList.add('black-color');
    headingNumber.classList.add('black-color');
    headingText.classList.add('black-color');
  }
}
/*
window.addEventListener('scroll', function() {
  if (window.scrollY > 450) {
    document.querySelector('.heading-nav__option-text').classList.add('dark-heading');
  } else {
    document.querySelector('.heading-nav__option-text').classList.remove('dark-heading');
  }
});

window.addEventListener('scroll', function() {
  if (window.scrollY > 450) {
    document.querySelectorAll('.heading-nav__option-text, .heading-number, .heading-logo__img').forEach(function(element) {
      element.style.color = 'black';
    });
  } else {
    document.querySelectorAll('.heading-nav__option-text, .heading-number, .heading-logo__img').forEach(function(element) {
      element.style.color = 'white';
    });
  }
});*/

window.addEventListener('scroll', changeHeadingColor);
window.addEventListener('scroll', changeHeadingColor);

function inputPhoneNumber(input) {
    let regex = /^[0-9]*$/;
    let value = input.value;
    if (!regex.test(value)) {
      input.value = value.replace(/\D/g, "");
    }
}

function changeText() {
  let select = document.getElementById("directionSelect");
  let selectedOption = select.options[select.selectedIndex];
  
  if (selectedOption.value !== "Куда хотите ехать?") {
    select.classList.add("selected");
  } else {
    select.classList.remove("selected");
  }
}


