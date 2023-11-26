
function changeHeadingColor() {
    let scrollHeight = window.scrollY;   
    let heading = document.querySelector('.heading');    
  
    if (scrollHeight > window.innerHeight) {  
      heading.style.background = "rgba(20, 17, 17, 0.60)";
    } else {
      heading.style.background = 'rgba(243, 239, 232, 0.60)';
    }
}
  window.addEventListener('scroll', changeHeadingColor);

