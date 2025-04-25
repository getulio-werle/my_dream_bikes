// menu
function toggleMenu() {
  let menu = document.querySelector("#menu");
  menu.classList.toggle("hidden");
}

// carousel
document.addEventListener('DOMContentLoaded', () => {
  const carousel = document.querySelector('#carousel');
  const slides = document.querySelectorAll('.slide');
  let currentIndex = 0;

  // next slide
  document.querySelector('#next').addEventListener('click', () => {
    if (currentIndex < slides.length - 1) {
      currentIndex++;
      carousel.style.transform = `translateX(-${currentIndex * 100}%)`;
    }
  });

  document.querySelector('#back').addEventListener('click', () => {
    if (currentIndex > 0) {
      currentIndex--;
      carousel.style.transform = `translateX(-${currentIndex * 100}%)`;
    }
  });

  setInterval(() => {
    if (currentIndex == slides.length - 1) {
      currentIndex = 0;
      carousel.style.transform = `translateX(${currentIndex * 100 * slides.length}%)`;
    } else {
      currentIndex++;
      carousel.style.transform = `translateX(-${currentIndex * 100}%)`;
    }
  }, 5000);
});