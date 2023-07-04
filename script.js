const swiper = new Swiper(".swiper", {
  slidesPerView: 1,
  centeredSlides: true,
  spaceBetween: 30,
  speed: 1000,
  autoplay: {
    delay: 4500,
    disableOnInteraction: false,
  },
  // Optional parameters
  direction: "horizontal",
  loop: true,

  // If we need pagination
  pagination: {
    el: ".swiper-pagination",
    centeredSlides: true,
    clickable: true,
  },

  // Navigation arrows
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  // And if we need scrollbar
  scrollbar: {
    el: ".swiper-scrollbar",
  },
});
