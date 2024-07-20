
function changeHeadingColor() {
  let scrollHeight = window.scrollY;
  let heading = document.querySelector('.heading');
  let logotip = document.querySelector('.heading-logo__img');
  let headingNumber = document.querySelector('.heading-number');
  let headingText = document.querySelector('.heading-nav');

  if (scrollHeight < 450) {
    heading.classList.remove('scrolled');
    logotip.classList.remove('black-color');
    headingNumber.classList.remove('black-color');
    headingText.classList.remove('black-headingText');
  } else {
    heading.classList.add('scrolled');
    logotip.classList.add('black-color');
    headingNumber.classList.add('black-color');
    headingText.classList.add('black-headingText');
  }
}

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


