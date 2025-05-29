import Swiper from 'swiper/bundle';

function swiper(

) {
    const swiper = new Swiper('.swiper', {

        // slidesPerView: 4,
        slidesPerView: "auto",
        spaceBetween: 12,
         loop: true,


        // If we need pagination
        pagination: {
            el: '.swiper-pagination',
            clickable: true,//работает клик погинации
            // dynamicBullets: true,//перемещаем в в низ дотсы

        },


        breakpoints: {
            840: {
                spaceBetween: 24,
            },

        },


        // Navigation arrows
        // navigation: {
        //   nextEl: '.swiper-button-next',
        //   prevEl: '.swiper-button-prev',
        // },

    });
}

export default swiper;