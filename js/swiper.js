const swiper = new Swiper('.swiper', {
    loop: true,

    pagination: {
        el: '.swiper-pagination',
        type: 'fraction',
    },

    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },

    scrollbar: {
        el: '.swiper-scrollbar',
    },
});






const tab_swiper = new Swiper('.tech-swiper', {
    loop: true,

});

const tabs = document.querySelectorAll('.tab');
tabs.forEach(tab => {
    tab.addEventListener('click', () => {
        const tabIndex = tab.getAttribute('data-tab') - 1;

        tabs.forEach(t => t.classList.remove('active'));
        tab.classList.add('active');
        
        tab_swiper.slideTo(tabIndex);
    });
});

tabs[0].classList.add('active');







const blog_swiper = new Swiper('.swiper-container', {
    loop: true,
    slidesPerView: 1,
    spaceBetween: 30,
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    pagination: {
        el: '.swiper-pagination',
        type: 'fraction',
    },
    breakpoints: {

        768: {
            slidesPerView: 1,
            spaceBetween: 20
        }
    },
});






const reviews_swiper = new Swiper('.reviews-swiper-container', {
    slidesPerView: 1,
    spaceBetween: 30,
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    pagination: {
        el: '.swiper-pagination',
        type: 'fraction',
    },
    loop: true,
});
