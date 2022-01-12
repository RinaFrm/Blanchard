const container = document.querySelector(".hero__container")
const swiper6 = new Swiper('.hero__swiper', {
  slidesPerView: 1,
  spaceBetween: 0,
  speed: 2000,
  autoplay: {
    delay: 2000
  },
  effect: "fade",
  allowTouchMove: false,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev"
  },
  pagination: {
    el: '.swiper-bullet-pagination',
    type: 'bullets',
    clickable: true
  }
});