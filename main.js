// navigation menu
const navMenu = document.getElementById("nav-menu");
const navLink = document.querySelectorAll(".nav-link");
const hamburger = document.querySelector("#hamburger");

hamburger.addEventListener("click", () => {
  navMenu.classList.toggle("left-[0]");
  hamburger.classList.toggle("ri-close-large-line");
});

navLink.forEach((link) => {
  link.addEventListener("click", () => {
    navMenu.classList.toggle("left-[0]");
    hamburger.classList.toggle("ri-close-large-line");
  });
});

// swiper JS
const swiper = new Swiper(".swiper", {
  // Optional parameters
  speed: 400,
  spaceBetween: 30,
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },
  // If we need pagination
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  grabCursor: true,
  breakpoints: {
    640: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
    },
    1024: {
      slidesPerView: 3,
    },
  },
});

// scroll reveal
const sr = ScrollReveal({
  origin: "top",
  distance: "60px",
  duration: 2500,
  delay: 300,
  reset: true,
});
sr.reveal(
  `.home__data, .about__top, .popular__top, .reviev__top,.review__swiper,.footer__social_icon,.footer__bottom,.footer__copyright`
);
sr.reveal(`.home__img`, { delay: 500, scale: 0.5 });
sr.reveal(`.service__card,.popular__card`, { interval: 200 });
sr.reveal(`.about__img_leaf`, { delay: 600, origin: "right" });
sr.reveal(`.img__leaf_2,.footer__floral_img`, { delay: 600, origin: "left" });
sr.reveal(`.about__content_1, .about__image_2`, {
  delay: 600,
  origin: "left",
});
sr.reveal(`.about__content_2, .about__image_1`, {
  delay: 600,
  origin: "right",
});
