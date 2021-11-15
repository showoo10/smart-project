new Swiper(".news .swiper-container", {
  autoplay: true,
  centeredSlides: true,
  loop: true,
});

new Swiper(".notice-line .swiper-container", {
  direction: "vertical",
  autoplay: true,
  loop: true,
});

const videoEl = document.querySelector(".video");
const promotionToggleBtn = document.querySelector(".toggle-promotion");
let isHidePromotion = false;
promotionToggleBtn.addEventListener("click", function () {
  isHidePromotion = !isHidePromotion;
  if (isHidePromotion) {
    videoEl.classList.add("hide");
  } else {
    videoEl.classList.remove("hide");
  }
});

new Swiper(".graduate-video .swiper-container", {
  loop: true,
});
