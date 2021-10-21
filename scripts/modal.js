const swiperSlides = document.querySelector(".swiper-slide[data-target]");


swiperSlides.addEventListener("click", function (e) {
  const dataTargetModalId = this.dataset.target

  document.querySelector(dataTargetModalId).style.display = "block";
})

