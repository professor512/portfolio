// Auto snap to next section on arrow keys
document.addEventListener("keydown", function (e) {
  if (["ArrowRight", "ArrowLeft"].includes(e.key)) {
    const wrapper = document.querySelector(".horizontal-wrapper");
    const scrollAmount = window.innerWidth;
    wrapper.scrollBy({
      left: e.key === "ArrowRight" ? scrollAmount : -scrollAmount,
      behavior: "smooth",
    });
  }
});
