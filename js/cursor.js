let mouseCursor = document.querySelector(".cursor");
let joel = document.querySelector(".Other-skills")
let wrapper_ = document.querySelectorAll('.nav-links li');

window.addEventListener("mousemove", cursor);

function cursor(e){
    console.log(e);
    mouseCursor.style.top = e.pageY + "px";
    mouseCursor.style.left = e.pageX + "px";
}

joel.forEach(link => {

    link.addEventListener("mouseleave", () => {
        mouseCursor.classList.remove("wrapper-cursor");
    });
    link.addEventListener("mouseover", () => {
        mouseCursor,classList.add("wrapper-cursor");
    });
});
