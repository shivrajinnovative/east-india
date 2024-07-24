"use strict";

    AOS.init();
    
    $(".banner-slider").owlCarousel({
        items: 1,
        loop: true,
        margin: 0,
        nav: false,
        smartSpeed: 500,
        autoplay: false,
        dots: true,
        animateIn: "fadeIn",
        autoplayTimeout: 7600,
    });

    // clients-slider
    $(".clients-slider").owlCarousel({
        items: 5,
        loop: true,
        margin: 0,
        dots: false,
        nav: true,
        autoplay: true,
        navText: [
            '<span class="fa fa-chevron-left"></span>',
            '<span class="fa fa-chevron-right"></span>',
        ],
        responsive: {
            0: {
                items: 2,
            },
            480: {
                items: 3,
            },
            1024: {
                items: 4,
            },
            1200: {
                items: 5,
            }
        }
    });
   