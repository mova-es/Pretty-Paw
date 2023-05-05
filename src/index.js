import "./index.html";
//new modules
import "swiper/scss";
import "swiper/scss/pagination";
import "./index.scss";
import { slidersInit } from "./modules/sliders";

//use modules

slidersInit(".career__slider", {
  pagination: {
    el: ".career__slider-pagination",
  },
  breakpoints: {
    768: {
      slidesPerView: 3,
      spaceBetween: 20,
    },

    1024: {
      slidesPerView: 3,
      spaceBetween: 26,
    },

    1240: {
      slidesPerView: 4,
      spaceBetween: 30,
    },
  },
});

slidersInit(".about__slider", {
  pagination: {
    el: ".about__slider-pagination",
  },
});

const videoBG = document.querySelector(".video-bg");

videoBG.innerHTML = `
<source src="video/video.webm" type="video/webm">
<source src="video/video.mp4" type="video/mp4">
`;
