$(function() {

    $('.barber-slider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        autoplay: true,
        cssEase: 'cubic-bezier(0.7, 0, 0.3, 1)',
        touchThreshold: 100
            //prevArrow: '.artitsts-wrapper .slider-pager .prev',
            //nextArrow: '.artitsts-wrapper .slider-pager .next'
    });

    $('.work-slider').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        arrows: true,
        autoplay: true,
        responsive: [            
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 1
              }
            },
            {
              breakpoint: 480,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1
              }
            }
            // You can unslick at a given breakpoint now by adding:
            // settings: "unslick"
            // instead of a settings object
        ]
    });
    $('.services-slider').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        //asNavFor: '.slider-for',
        centerMode: false,
        dots: false,
        focusOnSelect: true,
        arrows: true,
        autoplay: true,
        responsive: [            
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 1
              }
            },
            {
              breakpoint: 480,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1
              }
            }
            // You can unslick at a given breakpoint now by adding:
            // settings: "unslick"
            // instead of a settings object
        ]
    });

    $(window).on('scroll', function(){
        if($(window).scrollTop()>=95 && !$('.header').hasClass('sticky')){
            $('.header').addClass('sticky'); 
        }
        else if($(window).scrollTop()<95 && $('.header').hasClass('sticky')){
           $('.header').removeClass('sticky') 
        }
    });

    $(window).scroll(function(event) {
        var scrollTop = $(document).scrollTop();
        if (scrollTop > 100) {
            $(".scroll-btn").fadeIn(400);
        } else {
            $(".scroll-btn").fadeOut(400);
        }
    });
    $(".scroll-btn").on('click', function(event) {
        event.preventDefault();
        $("html, body").animate({
            scrollTop: 0
        }, 800, function() {
            $(".scroll-btn").fadeOut(400);
        });
    });
});