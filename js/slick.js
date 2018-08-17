$('.block-reviews').slick({
    dots: true,
    autoplay: true,
    autoplayspeed: 5000,
    speed: 1000,

    responsive: [{
        breakpoint: 823, 
        settings: {
            arrows: false,
        }
    }, {
        breakpoint: 320,
            settings: "unslick"
    }]

});