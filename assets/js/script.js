'use strict';

/**
 * navbar toggle
 */

const overlay = document.querySelector("[data-overlay]");
const navOpenBtn = document.querySelector("[data-nav-open-btn]");
const navbar = document.querySelector("[data-navbar]");
const navCloseBtn = document.querySelector("[data-nav-close-btn]");

const navElemArr = [overlay, navOpenBtn, navCloseBtn];

for (let i = 0; i < navElemArr.length; i++) {
  navElemArr[i].addEventListener("click", function () {
    navbar.classList.toggle("active");
    overlay.classList.toggle("active");
  });
}



/**
 * add active class on header when scrolled 200px from top
 */

const header = document.querySelector("[data-header]");

window.addEventListener("scroll", function () {
  window.scrollY >= 200 ? header.classList.add("active")
    : header.classList.remove("active");
})

// bestseller
document.addEventListener("DOMContentLoaded", () => {
  const buttons = document.querySelectorAll(".filter-btn");
  const currentPage = window.location.pathname;

  buttons.forEach(button => {
      if (currentPage.includes(button.innerText.toLowerCase().replace(" ", ""))) {
          button.classList.add("active");
      }
  });
});

function addToCart(name, image, price) {
  if (!name || !image || !price) {
      console.error("Invalid product data:", { name, image, price });
      return; 
  }

  let cart = JSON.parse(localStorage.getItem("cart")) || [];

  const existingItem = cart.find(item => item.name === name);

  if (existingItem) {
      existingItem.quantity += 1;
  } else {
      cart.push({ name, image, price, quantity: 1 });
  }

  localStorage.setItem("cart", JSON.stringify(cart));
}
