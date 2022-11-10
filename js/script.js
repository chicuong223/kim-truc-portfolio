document.addEventListener("DOMContentLoaded", () => {
    showSlides(slideIndex);
});

let slideIndex = 1;

// Next/previous controls
function plusSlides(n) {
    const index = (slideIndex += n);
    showSlides(index);
}

function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("slide");
    if (n > slides.length) {
        slideIndex = 1;
    }
    if (n < 1) {
        slideIndex = slides.length;
    }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slides[slideIndex - 1].style.display = "block";
}
