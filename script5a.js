const images = document.querySelectorAll('.slider-image');
let currentImageIndex = 0;

function showImage(index) {
  if (index < 0) {
    currentImageIndex = images.length - 1;
  } else if (index >= images.length) {
    currentImageIndex = 0;
  }

  images.forEach((image, i) => {
    if (i === currentImageIndex) {
      image.style.display= 'block';
    } else {
      image.style.display = 'none';
    }
  });
}

document.getElementById('previous-btn').addEventListener('click', () => {
  currentImageIndex--;
  showImage(currentImageIndex);
});

document.getElementById('next-btn').addEventListener('click', () => {
  currentImageIndex++;
  showImage(currentImageIndex);
});

showImage(currentImageIndex);
