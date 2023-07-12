const swiper = new Swiper("#swiper", {
  // slidesPerView: 3,
  centeredSlides: true,
  spaceBetween: 30,
  speed: 1000,
  autoplay: {
    delay: 2500,
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

  breakpoints: {
    200: {
      slidesPerView: 0.8,
    },
    400: {
      slidesPerView: 1,
    },
    600: {
      slidesPerView: 2,
    },
    800: {
      slidesPerView: 3,
    },
    900: {
      slidesPerView: 3.2,
    },
    1000: {
      slidesPerView: 2.1,
    },
    1200: {
      slidesPerView: 2.32,
    },
  },
});

//mobile navigation
const hamburgerBtn = document.querySelector(".icon-hamburger");
const closeBtn = document.querySelector(".icon-close");
const mobileNav = document.querySelector(".header__nav");
const backdrop = document.querySelector(".backdrop");

hamburgerBtn.addEventListener("click", function () {
  this.style.display = "none";
  backdrop.style.display = "block";
  mobileNav.style.display = "block";
  closeBtn.style.display = "block";
});

closeBtn.addEventListener("click", function () {
  mobileNav.style.display = "none";
  hamburgerBtn.style.display = "block";
  this.style.display = "none";
  backdrop.style.display = "none";
});

//form submitting
const form = document.querySelector("form");
const email = document.getElementById("email");
const emailError = document.querySelector(".error");

email.addEventListener("input", (event) => {
  if (email.validity.valid) {
    emailError.textContent = "";
    emailError.className = "error";
  } else {
    showError();
  }
});

form.addEventListener("submit", (event) => {
  if (!email.validity.valid) {
    showError();

    event.preventDefault();
  }
});

function showError() {
  if (email.validity.typeMismatch) {
    emailError.textContent = "Please insert a valid email";

    emailError.className = "error active";
  }
}
