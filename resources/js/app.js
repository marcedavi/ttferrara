import './simple-lightbox.min.js';

import Swiper, {Navigation, Pagination, Autoplay} from './swiper-bundle.min.js';

Swiper.use([Navigation, Pagination, Autoplay]);

window.addEventListener('load', function () {
    let lightbox = new SimpleLightbox('#gallery a');

    // Menu
    document.getElementById('primary-menu-toggle').addEventListener('click', function () {
        document.getElementById('main-menu').classList.toggle('max-h-0');
        document.getElementById('main-menu').classList.toggle('max-h-96');
    });

    // Carousel
    let swiper = new Swiper(".swiper", {
        loop: true,
        speed: 700,
        autoplay: {
            delay: 5000,
        },
        pagination: {
            el: '.swiper-pagination',
            clickable: true
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
    });

});