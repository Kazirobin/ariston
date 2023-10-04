const navbar = document.querySelector(".navbar");
window.addEventListener("scroll", (event) => {
  if (this.scrollY > 100) {
    navbar.classList.add("bg__color");
  } else {
    navbar.classList.remove("bg__color");
  }
});
const bar = document.querySelector(".navbar__bar");
const barIcon = document.querySelector(".navbar__bar__icon");
const menu = document.querySelector(".navbar__menu");
bar.addEventListener("click", () => {
  menu.classList.toggle("active");
  barIcon.classList.toggle("active");

});
