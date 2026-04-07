// ---------- SLIDER (on homepage) ----------
let slideIndex = 0;
const slides = document.querySelectorAll('.slide');
if (slides.length > 0) {
  function showSlides() {
    for (let i = 0; i < slides.length; i++) {
      slides[i].style.display = 'none';
    }
    slideIndex++;
    if (slideIndex > slides.length) slideIndex = 1;
    if (slides[slideIndex - 1]) slides[slideIndex - 1].style.display = 'block';
    setTimeout(showSlides, 4000); // auto slide every 4 sec
  }
  showSlides();

  window.changeSlide = function(n) {
    slideIndex += n - 1;
    if (slideIndex < 0) slideIndex = slides.length - 1;
    if (slideIndex >= slides.length) slideIndex = 0;
    for (let i = 0; i < slides.length; i++) {
      slides[i].style.display = 'none';
    }
    slides[slideIndex].style.display = 'block';
    slideIndex++;
  };
  // initial display
  for (let i = 0; i < slides.length; i++) slides[i].style.display = 'none';
  slideIndex = 0;
  if (slides[0]) slides[0].style.display = 'block';
}

// highlight current menu item based on URL (already done via active-menu class in each file, but ensures consistency)
document.querySelectorAll('.menu-bar a').forEach(link => {
  if (link.href === window.location.href) {
    link.classList.add('active-menu');
  }
});
