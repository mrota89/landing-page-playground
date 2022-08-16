//slider hero
$('.owl-carousel.header').owlCarousel({
    loop:true,
    responsiveClass:true,
    navText:["<div class='nav-btn prev-slide'></div>","<div class='nav-btn next-slide'></div>"],
    responsive:{
        0:{
            items:1,
            nav:false
        },
        576: {
            nav: true,
            items: 1
        }
    }
});

//slider 3 cards mobile
$('.owl-carousel.section-card').owlCarousel({
    loop:true,
    responsiveClass:true,
    margin:15,
    responsive:{
        0:{
            items:1,
            nav:false
        },
        600: {
            nav: false,
            items: 2
        }
    }
});

//scroll sticky navbar
let navbar = document.querySelector(".my-header .container");
let sticky = navbar.offsetTop;

function stickyOnScroll() {
    if (window.pageYOffset >= sticky) {
        navbar.classList.add("sticky")
    } else {
        navbar.classList.remove("sticky");
    }
}

window.onscroll = function() {
    stickyOnScroll()
};

//open hamburger menu
function openNav() {
    document.getElementById("mobile-nav").style.width = "70vw";
    document.getElementById("open-btn").classList.add("hide");
}

//close hamburger menu
function closeNav() {
    document.getElementById("mobile-nav").style.width = "0vh";
    document.getElementById("open-btn").classList.remove("hide");
}


   


