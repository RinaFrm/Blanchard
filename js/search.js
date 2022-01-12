document.querySelector(".header__search-btn").addEventListener("click", function() {
  document.querySelector(".header__search-form").classList.add("header__search-form__active");
  document.querySelector(".header__search-btn").classList.add("active");
  document.querySelector(".header__search").classList.add("active");
})
document.querySelector(".header__form-btn").addEventListener("click", function() {
  document.querySelector(".header__search-form").classList.remove("header__search-form__active");
  document.querySelector(".header__search-btn").classList.remove("active");
})


document.addEventListener("click", function(e) {
  let target = e.target;
  let form = document.querySelector(".header__search-form");
  if (!target.closest(".header__search")) {
  form.classList.remove("header__search-form__active");
  document.querySelector(".header__search-btn").classList.remove("active");
    form.querySelector("header__form-input");
  }
})