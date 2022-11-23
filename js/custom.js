/*global $ */
(function($) {
    "use strict";

    // Loader 
    $(window).on('load', function(){
        $('body').addClass('stopScroll');

        $('.loader').fadeOut(1000, function () {
            $(this).remove();
            $('body').removeClass('stopScroll');
        });
    }); 

    // OPEN SIDE  MENU 
    $('.menuBtn').on('click', function () {
        $(this).toggleClass('open');
        $('.navMenu').toggleClass('show');
        $('.bodyOverlay').toggleClass('show');
        setTimeout(function () {
            $('body').toggleClass('stopScroll');
        }, 200);
    });

    let rtl  = document.documentElement.lang == 'en' ? false : true ; 

    // Header OWL 
    $('.owlHome').owlCarousel({
        rtl: rtl,
        margin: 10,
        autoplay: true,
        loop: true,
        nav: false,
        dots: false,
        autoplaySpeed : 3000,
        autoplayTimeout : 3000,
        smartSpeed: 3000 ,
        animateOut: 'fadeOut',
        animateIn: 'fadeIn',
        navText: ["<i class='icofont-thin-right'></i>", "<i class='icofont-thin-left'></i>"],
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 1
            },
            1000: {
                items: 1
            }
        }
    });

    // Products OWL 
    $('.owlProducts').owlCarousel({
        rtl: rtl,
        margin: 20,
        autoplay: true,
        loop: true,
        nav: true,
        dots: false,
        autoplaySpeed : 3000,
        autoplayTimeout : 3000,
        smartSpeed: 3000 ,
        navText: ["<span><i class='icofont-thin-right'></i></span>", "<span><i class='icofont-thin-left'></i></span>"],
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 2
            },
            1000: {
                items: 3
            }
        }
    });

    // Projects OWL 
    let owlProjects = $('.owlProjects');
    owlProjects.owlCarousel({
        rtl: rtl,
        margin: 30,
        autoplay: true,
        loop: true,
        nav: false,
        dots: false,
        autoplaySpeed : 3000,
        autoplayTimeout : 3000,
        smartSpeed: 3000 ,
        navText: ["<span><i class='icofont-thin-right'></i></span>", "<span><i class='icofont-thin-left'></i></span>"],
        responsive: {
            0: {
                items: 1,
                stagePadding: 50
            },
            600: {
                items: 2,
                stagePadding: 50
            },
            1000: {
                items: 3,
                stagePadding: 200
            }
        }
    });

    // Go to the previous item
    $('.prevBtn').click(function() {
        owlProjects.trigger('owl.prev');
    })

    // Go to the next item
    $('.nextBtn').click(function() {
        owlProjects.trigger('owl.next');
    })


    // Header OWL 
    $('.owlClients').owlCarousel({
        rtl: rtl,
        margin: 15,
        autoplay: true,
        loop: true,
        nav: true,
        dots: false,
        autoplaySpeed : 3000,
        autoplayTimeout : 3000,
        smartSpeed: 3000 ,
        navText: ["<span><i class='icofont-thin-right'></i></span>", "<span><i class='icofont-thin-left'></i></span>"],
        responsive: {
            0: {
                items: 2
            },
            600: {
                items: 4
            },
            1000: {
                items: 6
            }
        }
    });

    // search
    $('.openSearch').on('click', function() {
        $('.search').css('display','flex');
    });
      
    $('.closeSearch').on('click', function() {
        $('.search').hide();
    });

})(jQuery);

