document.addEventListener("DOMContentLoaded", function(){
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
    })

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
    })

    // When the user scrolls the page, execute myFunction
    window.onscroll = function() {myFunction()};

    var navbar = document.querySelector(".my-header .container");
    var sticky = navbar.offsetTop;
 
    function myFunction() {
        if (window.pageYOffset >= sticky) {
            navbar.classList.add("sticky")
        } else {
            navbar.classList.remove("sticky");
        }
    }
})


   


