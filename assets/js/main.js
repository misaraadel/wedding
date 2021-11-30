$(document).ready(function () {
    $('.loader').fadeOut(2000);
    //scroll to top make fade for button
    $(window).scroll(function () {
        if ($(this).scrollTop() > 700) {
            $(".scroll-top-button").fadeIn();
        } else {
            $(".scroll-top-button").fadeOut();
        }
    });
    //scroll to top button
    $(".scroll-top-button").on('click', function () {
        $('html , body').animate({
            scrollTop: 0
        }, 100);
    });
    //Wow intit
    wow = new WOW({
        boxClass: 'wow',
        animateClass: 'animated',
        offset: 200,
        mobile: true,
        live: false
    });
    wow.init();
    //start active navbar
    $('.hamburger').click(function(){
        $('.hamburger').toggleClass('active');
        $('.navbar-nav').toggleClass('acitve-nav');
        $('body').toggleClass('overflowNone')
    });
    //data fancybox 
    $('[data-fancybox]').fancybox({
        protect: true ,
        loop: false,
        keyboard: false,
        arrows: false,
        wheel: false,
        closeExisting: false,
        preventCaptionOverlap: true,
        modal: false,
        infobar: false,
        hideScrollbar: true,
        touch: false ,
        buttons: [
            "close"
        ],
        image: {
            preload: true
        },

    });
    //owl header screen 
    $('.owl-header').owlCarousel({
        rtl: true,
        loop:true,
        margin: 20,
        nav:true,
        dots: false,
        touchDrag  :false,
		mouseDrag  : false,
		autoWidth: false,
		animateOut: 'fadeOut',
        animateIn: 'fadeIn',
		smartSpeed: 2000,
		dragEndSpeed: 2000,
		slidSpeed: 900,
        paginationSpeed: 900,
        autoplayHoverPause: true,
        items:1,
        navContainerClass: "container owl-nav",
		navText: [
            '<img src="assets/images/left_arrow.svg" alt=""/>',
            '<img  src="assets/images/right_arrow.svg" alt="" />'
        ],
    });
    //partner slider 
    $('.owl-service').owlCarousel({
        rtl: true,
        loop:false,
        margin: 20,
        nav:false,
        dots: true,
        autoplay: true,
        touchDrag  : true,
		mouseDrag  : true,
		autoWidth: false,
		animateOut: 'fadeOut',
        animateIn: 'fadeIn',
        autoplayTimeout: 6000,
		smartSpeed: 2000,
		dragEndSpeed: 2000,
		slidSpeed: 900,
        paginationSpeed: 900,
        autoplayHoverPause: true,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:2
            },
            1000:{
                items:4
            }
        }
    });
});