
function changeHeadingColor() {
    let scrollHeight = window.scrollY;
    let heading = document.querySelector('.heading');
    if (scrollHeight < 450) {
      heading.style.background = null;
      heading.style.position = "absolute";
      } 
    else {
      heading.style.background = "rgba( 243, 239, 232, 0.6)";
      heading.style.webkitFilter = "blur(54px);";
      heading.style.position = "fixed";
      heading.style.marhinBottom = "88px";
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


