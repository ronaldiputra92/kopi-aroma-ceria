// Toggle class active
const navbarNav = document.querySelector(".navbar-nav");
document.querySelector("#hamburger-menu").onclick = () => {
  navbarNav.classList.toggle("active");
};

// Toggle class active untuk shopping cart
const shoppingCart = document.querySelector(".shopping-cart");
document.querySelector("#shopping-cart-button").onclick = (e) => {
  shoppingCart.classList.toggle("active");
  e.preventDefault();
};

// Toggle class active untuk search-form
const searchForm = document.querySelector(".search-form");
const searchBox = document.querySelector("#search-box");
document.querySelector("#search-button").onclick = (e) => {
  searchForm.classList.toggle("active");
  searchBox.focus();
  e.preventDefault();
};

// Klik di luar element
const hamburgerMenu = document.querySelector("#hamburger-menu");
const searchButton = document.querySelector("#search-button");
const shoppingCart1 = document.querySelector("#shopping-cart-button");

document.addEventListener("click", function (e) {
  if (!hamburgerMenu.contains(e.target) && !navbarNav.contains(e.target)) {
    navbarNav.classList.remove("active");
  }

  if (!searchButton.contains(e.target) && !searchForm.contains(e.target)) {
    searchForm.classList.remove("active");
  }

  if (!shoppingCart1.contains(e.target) && !shoppingCart.contains(e.target)) {
    shoppingCart.classList.remove("active");
  }
});

// Modal Box
const itemDetailModal = document.querySelector("#item-detail-modal");
const itemDetailButton = document.querySelectorAll(".item-detail-button");

itemDetailButton.forEach((button) => {
  button.onclick = (e) => {
    itemDetailModal.style.display = "flex";
    e.preventDefault();
  };
});

// Klik tombol close
const closeButton = document.querySelector(" .modal .close");
closeButton.onclick = (e) => {
  itemDetailModal.style.display = "none";
  e.preventDefault();
};

// Klik diluar modal
window.onclick = (e) => {
  if (e.target == itemDetailModal) {
    itemDetailModal.style.display = "none";
  }
};
