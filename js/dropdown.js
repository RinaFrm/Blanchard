document.addEventListener("DOMContentLoaded", function() {
  document.querySelectorAll(".list-item-btn").forEach(item => {
  item.addEventListener("click", function() {
    let btn = this;
    let dropdown = this.parentElement.querySelector(".dropdown");
  
    document.querySelectorAll(".dropdown").forEach(el => {
      if (el != dropdown) {
        el.classList.remove("active-menu__list-item");
      }
    })
    dropdown.classList.toggle("active-menu__list-item");
    this.classList.toggle("active");
  })
})

document.addEventListener("click", function(e) {
  let target = e.target;
  let btn = this;
  if (!target.closest(".menu__list")) {
    document.querySelector(".list-item-btn").classList.remove("active"),
    document.querySelectorAll(".dropdown").forEach(el => {
        el.classList.remove("active-menu__list-item");
    })
  }
})
})



