

const phoneNumberRegex = /^[0-9]*$/;

document.addEventListener('DOMContentLoaded', () => {
  
  const heading = document.querySelector('.heading');
  const logo = document.querySelector('.heading-logo__img');
  const headingNumber = document.querySelector('.heading-number');
  const headingText = document.querySelector('.heading-nav');
  const selectDirection = document.getElementById("directionSelect");

  const changeHeaderColor = () => {
      let scrollHeight = window.scrollY;

      if (scrollHeight < 450) {
          heading.classList.remove('scrolled');
          logo.classList.remove('black-color');
          headingNumber.classList.remove('black-color');
          headingText.classList.remove('black-headingText');
      } else {
          heading.classList.add('scrolled');
          logo.classList.add('black-color');
          headingNumber.classList.add('black-color');
          headingText.classList.add('black-headingText');
      }
  };

  window.addEventListener('scroll', changeHeaderColor);
  

  const changeDirectionSelectText = () => {
    const selectedOption = selectDirection.options[selectDirection.selectedIndex];

    if (selectedOption.value !== "Куда хотите ехать?") {
      selectDirection.classList.add("selected");
    } else {
      selectDirection.classList.remove("selected");
    }
  };
  
  selectDirection.addEventListener('change', changeDirectionSelectText);
  
});


const validatePhoneValue = (input) => {
  const value = input.value;
  if (!phoneNumberRegex.test(value)) {
      input.value = value.replace(/\D/g, "");
  }
};

