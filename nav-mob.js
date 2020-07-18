const navSlide = () => {
    const mobbutton = document.querySelector(".mob-button");
    const nav = document.querySelector(".nav-links");
    const navlinks = document.querySelectorAll('.nav-links li');
    
    mobbutton.addEventListener("click", () => {
        nav.classList.toggle('nav-active');
        

    navlinks.forEach((link, index) => {
        if (link.style.animation){
            link.style.animation = "";
        }else{
        link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.3}s`;
        }
    });

    mobbutton.classList.toggle("switch");

});
}

navSlide();