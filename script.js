const burger = document.querySelector(".header-burger-menu");


const burgerBg = document.querySelector(".header-burger-menu-bg");
const close = document.querySelector(".header-burger-menu-close-menu");

function openBurger() {
  burgerBg.classList.add("active")
}
burger.addEventListener("click", openBurger)

function closeBurger() {
  burgerBg.classList.remove("active")
}
close.addEventListener("click", closeBurger)

const scrollContainer = document.querySelector('.reviews-wrapper-scroll');
const progressFill = document.querySelector('.reviews-wrapper-scroll-line-fill');

scrollContainer.addEventListener('scroll', () => {
  const maxScroll = scrollContainer.scrollWidth - scrollContainer.clientWidth;
  const scrollPercent = scrollContainer.scrollLeft / maxScroll;
  const lineMaxOffset = scrollContainer.clientWidth - progressFill.offsetWidth;
  progressFill.style.transform = `translateX(${scrollPercent * lineMaxOffset}px)`;
});
