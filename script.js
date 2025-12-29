const scrollContainer = document.querySelector('.reviews-wrapper-scroll');
const progressFill = document.querySelector('.reviews-wrapper-scroll-line-fill');

scrollContainer.addEventListener('scroll', () => {
  const maxScroll = scrollContainer.scrollWidth - scrollContainer.clientWidth;
  const scrollPercent = scrollContainer.scrollLeft / maxScroll;
  const lineMaxOffset = scrollContainer.clientWidth - progressFill.offsetWidth;
  progressFill.style.transform = `translateX(${scrollPercent * lineMaxOffset}px)`;
});
