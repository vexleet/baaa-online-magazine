let isDeluxeEdition = true;

const arrowBack = document.querySelector(".buy-game-arrow-back");
const arrowForward = document.querySelector(".buy-game-arrow-forward");

const deluxeEditionAbout = document.querySelectorAll("#deluxe-edition-content, #deluxe-edition-image");
const standardEditionAbout = document.querySelectorAll("#standard-edition-image");

function changeEdition() {
  isDeluxeEdition = !isDeluxeEdition;

  if(isDeluxeEdition) {
    hideElements(standardEditionAbout)
    showElements(deluxeEditionAbout)
  }
  else {
    hideElements(deluxeEditionAbout);
    showElements(standardEditionAbout)
  }
}

[arrowBack, arrowForward].forEach((el) => {
  el.addEventListener("click", changeEdition);
})

function hideElements(elements) {
  elements.forEach((el) => {
    el.classList.add("is-hidden");
  })
}

function showElements(elements) {
  elements.forEach((el) => {
    el.classList.remove("is-hidden");
  })
}