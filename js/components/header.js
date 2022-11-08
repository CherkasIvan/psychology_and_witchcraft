const menuBtn = document.querySelector(".navigation-burger");
const menuNav = document.querySelector(".menu");
const navDeactivate = document.querySelector(".content");
const allMobileHeaderLinks = document.querySelectorAll(".menu-navigation-list__item");

  menuBtn.addEventListener("click", function () {
    menuBtn.classList.toggle("active");
    menuNav.classList.toggle("active");
    console.log(1);
  });

navDeactivate.addEventListener("click", function () {
  if (
    menuBtn.classList.value === "navigation-burger active" &&
    menuNav.classList.value === "menu active"
  ) {
    menuBtn.classList.toggle("active");
    menuNav.classList.toggle("active");
  }
});

allMobileHeaderLinks.forEach((el) => {
  el.addEventListener("click", function () {
    menuBtn.classList.toggle("active");
    menuNav.classList.toggle("active");
  });
});
