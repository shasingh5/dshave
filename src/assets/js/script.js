$(function() {

    $('.hero-slider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        autoplay: true,
        cssEase: 'cubic-bezier(0.7, 0, 0.3, 1)',
        touchThreshold: 100
            //prevArrow: '.artitsts-wrapper .slider-pager .prev',
            //nextArrow: '.artitsts-wrapper .slider-pager .next'
    });

    $('.slider-for').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        fade: true,
        asNavFor: '.slider-nav'
    });
    $('.slider-nav').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        asNavFor: '.slider-for',
        centerMode: false,
        dots: false,
        focusOnSelect: true
    });

    $(".demo").click(function() {
        $('html, body').animate({
            scrollTop: $(".product-short").offset().top
        }, 1000);
    });
    $(".tab-click").click(function() {
        $('html, body').animate({
            scrollTop: $(".tab-top").offset().top
        }, 1000);
    });

    // $(".dropdown").hover(            
    //     function() {
    //         $('.dropdown-menu', this).not('.in .dropdown-menu').stop(true,true).slideDown("400");
    //         $(this).toggleClass('open');        
    //     },
    //     function() {
    //         $('.dropdown-menu', this).not('.in .dropdown-menu').stop(true,true).slideUp("400");
    //         $(this).toggleClass('open');       
    //     }
    // );

    $(".dropdown-2").hover(
        function() {
            $('.dropdown-menu-2', this).not('.in .dropdown-menu-2').stop(true, true).slideDown("400");
            $(this).toggleClass('open');
        },
        function() {
            $('.dropdown-menu-2', this).not('.in .dropdown-menu-2').stop(true, true).slideUp("400");
            $(this).toggleClass('open');
        }
    );

    $(".dropdown-3").hover(
        function() {
            $('.dropdown-menu-3', this).not('.in .dropdown-menu-3').stop(true, true).slideDown("400");
            $(this).toggleClass('open');
        },
        function() {
            $('.dropdown-menu-3', this).not('.in .dropdown-menu-3').stop(true, true).slideUp("400");
            $(this).toggleClass('open');
        }
    );


});