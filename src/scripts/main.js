// console.log('alalal');
$(function() {
    $('[data-element="toggle"]').on('click', function(e) {
        var href = $(this).data('target');
        _target = $(`#${href}`);
        _target.toggleClass('visible');
    })

    var gallery = new Swiper("[data-element='carousel-gallery']", {
        slidesPerView: 'auto',
        spaceBetween: 48,
        loop: true,
        autoplay: {
            delay: 5000,
            disableOnInteraction: false,
        },
        navigation: {
            nextEl: "[data-element='carousel-gallery'] .carousel__button--next",
            prevEl: "[data-element='carousel-gallery'] .carousel__button--prev",
        },
    });
    
    var reviews = new Swiper("[data-element='carousel-reviews']", {
        slidesPerView: 'auto',
        spaceBetween: 12,
        loop: true,
        grabCursor: true,
        effect: "coverflow",
        coverflowEffect: {
            rotate: 50,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows: true,
        },
        autoplay: {
            delay: 5000,
            disableOnInteraction: false,
        },
    });
    
    var galleryPost = new Swiper("[data-element='carousel-gallery-post']", {
        slidesPerView: 'auto',
        spaceBetween: 24,
        // loop: true,
        // autoplay: {
        //     delay: 5000,
        //     disableOnInteraction: false,
        // },
        navigation: {
            nextEl: '[data-element="gallery-post-nav-next"]',
            prevEl: '[data-element="gallery-post-nav-prev"]',
          },
    });

    var wow = new WOW({
        mobile: false
    });
    if ($(window).width() > 992) {
        wow.init()
    }

    
    $('[data-element="video"]').magnificPopup({
        type: 'iframe',
        mainClass: 'mfp-fade',
        removalDelay: 160,
        preloader: false,

        fixedContentPos: true,
    });
    
    var galleryVideoThumbs = new Swiper('[data-element="carousel-thumbs"]', {
        // loop: true,
        spaceBetween: 10,
        slidesPerView: 3,
        freeMode: true,
        watchSlidesProgress: true,
        direction: "horizontal",
        breakpoints: {
            576: {
                direction: "vertical",
            }
        }
        
    });
    var galleryVideo = new Swiper('[data-element="carousel-gallery-video"]', {
        navigation: {
          nextEl: "[data-element='carousel-thumbs'] .button--nav-secondary-next",
          prevEl: "[data-element='carousel-thumbs'] .button--nav-secondary-prev",
        },
        slidesPerView: 1,
        spaceBetween: 10,
        thumbs: {
          swiper: galleryVideoThumbs,
        },
    });

});

