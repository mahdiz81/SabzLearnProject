const swiper = new Swiper('.swiper-container', {
    speed: 850,
    loop: true,

    breakpoints: {
        576: {
            slidesPerView: 1
        },
        768: {
            slidesPerView: 2
        },
        1200: {
            slidesPerView: 3
        },
      
    }
})