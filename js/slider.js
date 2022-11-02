let position = 0;
const slidesToShow = 4;
const slidesToScroll = 1;

const container = document.querySelector(".slider-container");
const track = document.querySelector(".slider-track");
const buttonNext = document.querySelector(".slider-button__next");
const buttonPrev = document.querySelector(".slider-button__prev");

const items = document.querySelectorAll(".slider-track__item");
const itemsCount = items.length;

const itemWidth = container.clientWidth / slidesToShow;
const movePosition = slidesToScroll * itemWidth;

items.forEach((item) => {
  item.style.minWidth = `${itemWidth}px`;
});

buttonNext.addEventListener("click", () => {
  const itemsLeft = itemsCount - (Math.abs(position) + slidesToShow * itemWidth) / itemWidth;
  position -= itemsLeft >= slidesToScroll ? movePosition : itemsLeft * itemWidth;

  setPosition();
  checkBtns();
});

buttonPrev.addEventListener("click", () => {
  const itemsLeft = Math.abs(position) / itemWidth;

  position += itemsLeft >= slidesToScroll ? movePosition : itemsLeft * itemWidth;

  setPosition();
  checkBtns();
});

const setPosition = () => {
  track.style.transform = `translateX(${position}px)`;
};

const checkBtns = () => {
  buttonPrev.disabled = position === 0;
  buttonNext.disabled = position <= -(itemsCount - slidesToShow) * itemWidth;
};

checkBtns();
