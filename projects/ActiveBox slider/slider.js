$(document).ready(function () {
    $(".owl-carousel").owlCarousel({
        items: 1,
        autoplay: true,
        // autoplayHoverPause: true,
        autoplayTimeout: 3000,
        animateIn: 'fadeIn',
        animateOut: 'fadeOut',
        margin: 30,
        loop: true,
        dots: true,
    });
});