const slides = document.querySelectorAll(".slide");
let counter = 0;

// position slides side by side
slides.forEach((slide, index) => {
  slide.style.left = `${index * 100}%`;
});

function goNext() {
  counter++;

  if (counter >= slides.length) {
    counter = 0; // start from 1 again
  }

  slideImage();
}

function goPrev() {
  counter--;

  if (counter < 0) {
    counter = slides.length - 1;
  }

  slideImage();
}

function slideImage() {
  slides.forEach(slide => {
    slide.style.transform = `translateX(-${counter * 100}%)`;
  });
}



