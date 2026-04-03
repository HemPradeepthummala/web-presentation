const displayNextSlide = () => {
  const currentSlide = document.querySelector('.slide:not(.hidden)');
  const nextSlide = currentSlide ? currentSlide.nextElementSibling : null;
  if (nextSlide) {
    currentSlide.classList.add('hidden');
    nextSlide.classList.remove('hidden');
  }
};

const displayPreviousSlide = () => {
  const currentSlide = document.querySelector('.slide:not(.hidden)');
  const previousSlide = currentSlide ? currentSlide.previousElementSibling : null;
  if (previousSlide) {
    currentSlide.classList.add('hidden');
    previousSlide.classList.remove('hidden');
  }
};
const mappedNavigationKeys = {
  'ArrowRight': displayNextSlide,
  'ArrowLeft': displayPreviousSlide
};  
const registerEventListners = () => { 
  document.addEventListener('keydown', (event) => {
    mappedNavigationKeys[event.key]?.();
  });
}

const main = () => {
  registerEventListners();
}

globalThis.onload = main;