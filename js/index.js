const menuBtn = document.querySelector(".navigation-burger");
const menuNav = document.querySelector(".menu");

menuBtn.addEventListener("click", function () {
  menuBtn.classList.toggle("active");
  menuNav.classList.toggle("active");
});

