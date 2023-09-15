//*********************JAVASCRIPT FOR NAVIGATION BAR START****************************************************
burger = document.querySelector(".burger");
navbar = document.querySelector(".navbar");
navList = document.querySelector(".nav-list");
logo = document.querySelector(".logo");

burger.addEventListener("click", () => {
    navbar.classList.toggle("h-nav-resp");
    navList.classList.toggle("v-class-resp");
    logo.classList.toggle("v-class-resp");
})

//*********************JAVASCRIPT FOR SLIDER HOME PAGE START****************************************************
var slideIndex = 0;
carousel();

function carousel() {
    var i;
    var x = document.getElementsByClassName("mySlides");
    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > x.length) { slideIndex = 1 }
    x[slideIndex - 1].style.display = "block";
    setTimeout(carousel, 2000); // Change image every 2 seconds
}
//*********************JAVASCRIPT FOR SLIDER HOME PAGE END****************************************************

// **********************JS FOR TREATMENT SLIDER START*********************************************************
var swiper = new Swiper(".slide-container", {
    slidesPerView: 4,
    spaceBetween: 20,
    sliderPerGroup: 4,
    loop: true,
    centerSlide: "true",
    fade: "true",
    grabCursor: "true",
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
        dynamicBullets: true,
    },
    navigation: {
        nextEl: ".swiper-button-next-treatment",
        prevEl: ".swiper-button-prev-treatment",
    },

    breakpoints: {
        0: {
            slidesPerView: 1,
        },
        520: {
            slidesPerView: 2,
        },
        768: {
            slidesPerView: 3,
        },
        1000: {
            slidesPerView: 4,
        },
    },
});
// **************JS FOR TREATMENT SLIDER END*********************************************************

// ***********************************JAVASCRIPT FOR THE TESTIMONIAL SLIDER START **************************************************
var swiper = new Swiper(".slide-content", {
    slidesPerView: 4,
    spaceBetween: 20,
    loop: true,
    centerSlide: 'true',
    fade: 'true',
    grabCursor: 'true',
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
        dynamicBullets: true,
    },
    navigation: {
        nextEl: ".swiper-button-next-testimonial",
        prevEl: ".swiper-button-prev-testimonial",
    },

    breakpoints: {
        0: {
            slidesPerView: 1,
        },
        520: {
            slidesPerView: 2,
        },
        768: {
            slidesPerView: 3,
        },
        1000: {
            slidesPerView: 4,
        },
    },
});
// ***********************************JAVASCRIPT FOR THE TESTIMONIAL SLIDER END **************************************************