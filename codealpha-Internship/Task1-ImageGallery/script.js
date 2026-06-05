const images = document.querySelectorAll('.gallery-img');
const lightbox = document.getElementById('lightbox');
const lightboxImg = document.getElementById('lightbox-img');
const closeBtn = document.querySelector('.close-btn');

let currentIndex = 0;
images.forEach((img, index) => {
    img.addEventListener('click', () => {
        currentIndex = index;
        showImage();
        lightbox.style.display = 'flex';
    });
});

function showImage() {
    lightboxImg.src = images[currentIndex].src;
}

document.getElementById('next').addEventListener('click', () => {
    currentIndex++;

    if (currentIndex >= images.length) {
        currentIndex = 0;
    }

    showImage();
});

document.getElementById('prev').addEventListener('click', () => {
    currentIndex--;

    if (currentIndex < 0) {
        currentIndex = images.length - 1;
    }

    showImage();
});

closeBtn.addEventListener('click', () => {
    lightbox.style.display = 'none';
});


function filterImages(category) {

    images.forEach(img => {

        if (category === 'all') {
            img.style.display = 'block';
        }
        else if (img.classList.contains(category)) {
            img.style.display = 'block';
        }
        else {
            img.style.display = 'none';
        }

    });
}