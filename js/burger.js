document.querySelector(".burger").addEventListener("click", function() {
  document.querySelector(".header__nav").classList.add("active");
})
document.querySelector(".header__nav-close").addEventListener("click", function() {
  document.querySelector(".header__nav").classList.remove("active");
})