
function changeHeadingColor() {
    let scrollHeight = window.scrollY;
    let heading = document.querySelector('.heading');
    if (scrollHeight < 450) {
      heading.style.background = null;
      heading.style.position = "absolute";
      } 
    else {
      heading.style.background = "rgba( 130, 120, 120, 0.60)";
      heading.style.webkitFilter = "blur(25px);";
      heading.style.transition = " background-color 0.5s ease-in-out";
      heading.style.position = "fixed";
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



