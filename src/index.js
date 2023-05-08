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
      slidesPerView: 'auto',
      spaceBetween: 20,
      pagination: false,
    },

    1024: {
      slidesPerView: 'auto',
      spaceBetween: 26,
      pagination: false,
    },

    1240: {
      slidesPerView: 'auto',
      spaceBetween: 30,
      pagination: false,
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
