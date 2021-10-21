const swiperSlides = document.querySelector(".swiper-slide[data-target]");
const modalContent = document.querySelectorAll(".modal-content .close");

swiperSlides.addEventListener("click", function (e) {
  const dataTargetModalId = this.dataset.target

  document.querySelector(dataTargetModalId).style.display = "block";
})

modalContent.forEach((el) => {
  el.addEventListener("click", function() {
    const dataTargetModalId = this.dataset.target

    document.querySelector(dataTargetModalId).style.display = "none";
  })
})
