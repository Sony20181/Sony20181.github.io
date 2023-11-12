window.addEventListener("scroll", function() {
    var scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    var heading = document.querySelector(".heading");
    
    if (scrollTop > 800) {
        heading.style.background = "rgba(20, 17, 17, 0.60)";
        heading.style.backdropFilter = "blur(20px)";
        heading.style.transition = "background-color 0.7s ease-in-out";
    } else {
        heading.style.background = "rgba(243, 239, 232, 0.60)";
        heading.style.backdropFilter = "blur(27px)";
        heading.style.transition = "background-color 0.7s ease-in-out";
       
    }
});

