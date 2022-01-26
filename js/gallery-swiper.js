var slider1 = new Swiper (".gallery__swiper", {
  slidesPerView: 1,
  pagination: {
    el: ".gallery__swiper-pagination",
    type: "fraction"
  },
  navigation: {
    nextEl: ".gallery__swiper-btn-next",
    prevEl: ".gallery__swiper-btn-prev"
  },
  
  breakpoints: {
    320: {
      slidesPerView: 1,
      slidesPerGroup: 1,
      spaceBetween: 0
    },
    
    576: {
      slidesPerView: 2,  
      slidesPerGroup: 2,
      spaceBetween: 30
    },
    
    768: {
      slidesPerView: 2,
      slidesPerGroup: 2,
      spaceBetween: 34
    },

    1024: {
      slidesPerView: 2,
      slidesPerGroup: 2,
      spaceBetween: 34
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

var slider2 = new Swiper (".gallery__swiper-2", {
  slidesPerView: 1,
  pagination: {
    el: ".gallery__swiper-pagination",
    type: "fraction"
  },
  navigation: {
    nextEl: ".gallery__swiper-btn-next",
    prevEl: ".gallery__swiper-btn-prev"
  },
  breakpoints: {
    320: {
      slidesPerView: 1,
      slidesPerGroup: 1,
      spaceBetween: 0
    },
    576: {
      slidesPerView: 2,
      slidesPerGroup: 2,
      spaceBetween: 30
    },
    
    768: {
      slidesPerView: 2,
      slidesPerGroup: 2,
      spaceBetween: 34
    },

    1024: {
      slidesPerView: 2,
      slidesPerGroup: 2,
      spaceBetween: 34
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

var slider3 = new Swiper (".gallery__swiper-3", {
  slidesPerView: 1,
  pagination: {
    el: ".gallery__swiper-pagination",
    type: "fraction"
  },
  navigation: {
    nextEl: ".gallery__swiper-btn-next",
    prevEl: ".gallery__swiper-btn-prev"
  },
  breakpoints: {
    320: {
      slidesPerView: 1,
      slidesPerGroup: 1,
      spaceBetween: 0
    },
    576: {
      slidesPerView: 2,
      slidesPerGroup: 2,
      spaceBetween: 30
    },

    768: {
      slidesPerView: 2,
      slidesPerGroup: 2,
      spaceBetween: 34
    },

    1024: {
      slidesPerView: 2,
      slidesPerGroup: 2,
      spaceBetween: 34
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

let swiperSlides = document.querySelector(".gallery").querySelectorAll(".swiper-slide");
let modal = document.querySelector(".gallery__modal-part");
let modalBtn = modal.querySelector(".modal-content-right-close");

swiperSlides.forEach(el => {
  el.addEventListener("click", function() {
    let img = this.querySelector("img");
    let link = img.getAttribute("src");
    console.log(modal.querySelector("img"));
    document.body.style.overflow = "hidden";
    modal.classList.add("modal-active");
    modal.querySelector("img").setAttribute("src", link);
  })
})
modalBtn.addEventListener("click", function() {
  modal.classList.remove("modal-active");
  document.body.style.overflow = "";
});