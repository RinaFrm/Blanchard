var slider5 = new Swiper (".projects__swiper", {
  slidesPerView: 1,
  navigation: {
    nextEl: ".projects__swiper-btn-next",
    prevEl: ".projects__swiper-btn-prev"
  },
  
  breakpoints: {
    320: {
      slidesPerView: 1,
      slidesPerGroup: 1,
      spaceBetween: 0
    },
    
    712: {
      slidesPerView: 2,
      slidesPerGroup: 2,
      spaceBetween: 25
    },

    768: {
      slidesPerView: 2,
      slidesPerGroup: 2,
      spaceBetween: 33.97
    },

    1024: {
      slidesPerView: 2,
      slidesPerGroup: 2,
      spaceBetween: 50
    }, 
    
    1600: {
      slidesPerView: 3,
      slidesPerGroup: 3,
      spaceBetween: 50
    }
  },
  a11y: {
    prevSlideMessage: 'Предыдущий',
    nextSlideMessage: 'Следующий',
  }
});