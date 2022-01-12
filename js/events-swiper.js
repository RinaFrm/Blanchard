var slider4 = new Swiper (".events__swiper", {
  slidesPerView: 1,
  pagination: {
    el: ".events__swiper-pagination",
    type: "bullets",
    clickable: true
  },
  navigation: {
    nextEl: ".events__swiper-btn-next",
    prevEl: ".events__swiper-btn-prev"
  },
  breakpoints: {
    320: {
      slidesPerView: 1,
      spaceBetween: 0
    },

    712: {
      slidesPerView: 2,
      spaceBetween: 20
    },

    768: {
      slidesPerView: 2,
      spaceBetween: 34
    },

    1024: {
      slidesPerView: 3,
      spaceBetween: 27
    }, 
    
    1200: {
      slidesPerView: 3,
      spaceBetween: 50
    }
  },
  a11y: {
    prevSlideMessage: 'Предыдущий',
    nextSlideMessage: 'Следующий',
  }
});