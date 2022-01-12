document.addEventListener("DOMContentLoaded", function() {
  document.querySelectorAll(".list-item__btn").forEach(item => {
  item.addEventListener("click", function() {
    let btn = this;
    let dropdown = this.parentElement.querySelector(".list-item__dropdown");
  
    document.querySelectorAll(".list-item__dropdown").forEach(el => {
      if (el != dropdown) {
        el.classList.remove("active-menu__list-item");
      }
    })
    dropdown.classList.toggle("active-menu__list-item");
  })
})

document.addEventListener("click", function(e) {
  let target = e.target;
  if (!target.closest(".menu__list")) {
    document.querySelectorAll(".list-item__dropdown").forEach(el => {
        el.classList.remove("active-menu__list-item");
    })
  }
})
})



