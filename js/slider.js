const images = ['./image/hero.jpg', './image/hero2.jpg', './image/hero3.jpg'];
let currentIndex = 0;

const heroWrap = document.querySelector('.hero-wrap');
const backBtn = document.getElementById('backBtn');
const forwardBtn = document.getElementById('forwardBtn');

function updateBackgroundImage() {
  heroWrap.style.backgroundImage = `linear-gradient(rgba(25, 28, 38, 0.2), rgba(25, 28, 38, 0.2)), url(${images[currentIndex]})`;
}

backBtn.addEventListener('click', () => {
  currentIndex = (currentIndex - 1 + images.length)  % images.length;
  updateBackgroundImage();
});

forwardBtn.addEventListener('click', () => {
  currentIndex = (currentIndex + 1) % images.length;
  updateBackgroundImage();
});

setInterval(() => {
  currentIndex = (currentIndex + 1) % images.length;
  updateBackgroundImage();
}, 7000);
