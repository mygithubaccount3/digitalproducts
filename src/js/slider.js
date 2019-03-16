$(document).ready(function(){
    $('.works__slider').slick({
        lazyLoad: 'ondemand',
        dots: true,
        dotsClass: 'dots'
    });

    $('.team__slider').slick({
        lazyLoad: 'ondemand',
        slidesToShow: 3,
        slidesToScroll: 1,
        dotsClass: 'dots',
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    arrows: false,
                    dots: true
                }
            },
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2
                }
            }
            ]
    });
});
