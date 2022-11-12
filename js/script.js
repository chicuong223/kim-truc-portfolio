document.addEventListener("DOMContentLoaded", () => {
    showSlides(slideIndex);

    const modal = document.getElementById("slideshow");
    const closeModalBtn = document.getElementsByClassName("close")[0];
    let modalToggle = document.getElementById("slideshow-toggle");
    modalToggle.onclick = function () {
        modal.style.display = "block";
    };
    closeModalBtn.onclick = function () {
        modal.style.display = "none";
    };

    window.onclick = function (event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    };
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

function scrollToSection(id) {
    window.event.preventDefault();
    let el = document.getElementById(id);
    el.scrollIntoView();
}
