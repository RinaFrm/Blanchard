
document.querySelectorAll(".simplebar").forEach(item => {
  new SimpleBar(item, {
    autoHide: false,
    scrollbarMaxSize: 28,
});
})