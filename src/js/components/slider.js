import { auto } from '@popperjs/core';
import Swiper, { Navigation, EffectFade, Pagination, Scrollbar } from 'swiper';
Swiper.use([Navigation, Pagination, Scrollbar]);


const Slider = new Swiper('.reviews__slider', {
  // slidesPerView: 3,
  spaceBetween: 40,
  loop: true,
  slidesPerView: "auto",
  centeredSlides: true,

  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});

const Sliderr = new Swiper('.products__slider', {
  slidesPerView: 2,
  spaceBetween: 40,
  centeredSlides: true,
  loop: true,

  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});