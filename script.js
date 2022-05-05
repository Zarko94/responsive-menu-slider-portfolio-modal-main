const mobileMenu = () => {
  let menu = document.querySelector(".header ul");
  let btn = document.querySelector(".header button");

  if (btn.innerText === "MENU") {
    menu.style.display = "block";
    btn.innerText = "Close";
  } else {
    menu.style.display = "none";
    btn.innerText = "MENU";
  }
};
// Galerija

let rightBtn = document.querySelector("#right-btn");

let leftBtn = document.querySelector("#left-btn");
let imgNumber = 0;
let pictures = document.querySelectorAll(".slider-images img");
const moveRight = () => {
  displayNone();
  imgNumber++;
  if (imgNumber === pictures.length) {
    imgNumber = 0;
  }
  pictures[imgNumber].style.display = "block";
};

const moveLeft = () => {
  displayNone();
  imgNumber--;
  if (imgNumber === -1) {
    imgNumber = pictures.length - 1;
  }
  pictures[imgNumber].style.display = "block";
};

rightBtn.addEventListener("click", moveRight);
leftBtn.addEventListener("click", moveLeft);

const displayNone = () => {
  pictures.forEach((img) => {
    img.style.display = "none";
  });
};

//FILTER
const items = document.querySelector(".portfolio-items");
const portfolioSort = (item) => {
  let category = item.getAttribute("data-category");
  let portfolioItems = document.querySelectorAll(".portfolio-single-item");

  portfolioItems.forEach((item) => {
    item.style.display = "none";
  });
  if (category === "sve") {
    portfolioItems.forEach((item) => {
      item.style.display = "block";
    });
  }
  portfolioItems.forEach((item) => {
    if (item.getAttribute("data-category").includes(category)) {
      item.style.display = "block";
    }
  });
};
// open modal
const modal = document.querySelector(".popup-modal");
const overlay = document.querySelector(".overlay");
const openModal = () => {
  modal.style.display = "block";
  overlay.style.display = "block";
};

const closeModal = () => {
  modal.style.display = "none";
  overlay.style.display = "none";
};
