const swiper = new Swiper(".meuSwiper", {

    effect: "coverflow",

    grabCursor: true,

    centeredSlides: true,

    loop: true,

    slidesPerView: "auto",

    coverflowEffect: {

        rotate: 0,

        stretch: 120,

        depth: 350,

        modifier: 1,

        scale: .9,

        slideShadows: false,

    },

    autoplay:{

        delay:3000,

        disableOnInteraction:false,

    },

    pagination:{

        el:".swiper-pagination",

        clickable:true,

    },

    navigation:{

        nextEl:".swiper-button-next",

        prevEl:".swiper-button-prev",

    },

});