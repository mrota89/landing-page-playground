//slider hero
$('.owl-carousel.header').owlCarousel({
    loop:true,
    responsiveClass:true,
    navText:["<div class='nav-btn prev-slide'></div>","<div class='nav-btn next-slide'></div>"],
    autoplay:true,
    autoplayTimeout:5000,
    autoplayHoverPause:true,
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
    autoplay:true,
    autoplayTimeout:10000,
    autoplayHoverPause:true,
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

//on scroll cambia background navbar
function stickyOnScroll() {
    let navbar = document.querySelector(".my-header .container");
    let sticky = navbar.offsetTop;
    if (window.pageYOffset > sticky) {
        navbar.classList.add("sticky")
    } else {
        navbar.classList.remove("sticky");
    }
}

//open hamburger menu
function openNav() {
    document.getElementById("mobile-nav").style.width = "70vw";
    document.getElementById("open-btn").style.display="none";
}

//close hamburger menu
function closeNav() {
    document.getElementById("mobile-nav").style.width = "0vh";
    setTimeout(() => {
        document.getElementById("open-btn").style.display="block";
    }, 200);
}

//animazione onscroll degli elementi in pagina
function reveal() {
    const reveals = document.querySelectorAll(".reveal");
    reveals.forEach(element => {
        const windowHeight = window.innerHeight; //altezza viewport
        const elementTop = element.getBoundingClientRect().top; //distanza dell'elemento dal viewpoint
        const elementVisible = 150; //distanza "da scrollare" prima che l'elemento venga mostrato
        if (elementTop < windowHeight - elementVisible) {
            element.classList.add("active");
        }
    })
}

//animazione della navbar onload
function navAnimate() {
    setTimeout(()=>{
        const header = document.getElementsByClassName("navbar")[0];
        header.classList.add("active");
    }, 100);
}

window.addEventListener("scroll", reveal);
window.addEventListener("scroll", stickyOnScroll);
window.addEventListener("load", navAnimate);

//on load return to top
window.addEventListener("load", window.scrollTo(0, 0));






