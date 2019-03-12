$(document).ready(function(){
    $('.works__slider').slick({
        dots: true,
        lazyLoad: 'ondemand'
    });

    $('.team__slider').slick({
        lazyLoad: 'ondemand',
        slidesToShow: 3,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1
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
