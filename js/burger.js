'use strict';

export function burgerMenu() {
  const burger = document.querySelector(".fa-bars");
  const xMark = document.querySelector(".fa-xmark");
  const mobileMenu = document.querySelector(".header_nav");

  if (!burger || !xMark || !mobileMenu) {
    console.error("Menu elements not found in the DOM.");
    return;
  }

  burger.addEventListener("click", () => {
    mobileMenu.classList.add("show");
    burger.style.display = "none";
    xMark.style.display = "block";
  });

  xMark.addEventListener("click", () => {
    mobileMenu.classList.remove("show");
    burger.style.display = "block";
    xMark.style.display = "none";
  });
}
