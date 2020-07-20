

let mouseCursor = document.querySelector(".cursor");
let joel = document.querySelectorAll(".head")
let text_x = document.querySelectorAll(".pmo");
let image_x = document.querySelectorAll(".image-mouse");
let inner_x = document.querySelectorAll(".inner");


window.addEventListener("mousemove", cursor);

function cursor(e){
    console.log(e);
    mouseCursor.style.top = e.pageY + "px";
    mouseCursor.style.left = e.pageX + "px";
}

joel.forEach(el => {

    el.addEventListener("mouseleave", () => {
        mouseCursor.classList.remove("joel-mouseover");
    });
    el.addEventListener("mouseover", () => {
        mouseCursor.classList.add("joel-mouseover");
    });
});

text_x.forEach(el => {

    el.addEventListener("mouseleave", () => {
        mouseCursor.classList.remove("text_x-mouseover");
    });
    el.addEventListener("mouseover", () => {
        mouseCursor.classList.add("text_x-mouseover");
    });
});

image_x.forEach(el => {

    el.addEventListener("mouseleave", () => {
        mouseCursor.classList.remove("image-mouseover");
    });
    el.addEventListener("mouseover", () => {
        mouseCursor.classList.add("image-mouseover");
    });
});

inner_x.forEach(el => {

    el.addEventListener("mouseleave", () => {
        mouseCursor.classList.remove("inner-mouseover");
    });
    el.addEventListener("mouseover", () => {
        mouseCursor.classList.add("inner-mouseover");
    });
});


document.querySelectorAll('button').forEach(function(button){
    button.onclick = function(){

            document.documentElement.style.setProperty('--color', button.dataset.color);

    }

});
