// ===== Menu Toggle =====
const menubar = document.querySelector('#menu-bars');
const navbar = document.querySelector('.navbar');

menubar.addEventListener('click', () => {
    menubar.classList.toggle('fa-times');
    navbar.classList.toggle('active');
});

// ===== Gallery Lightbox =====
const galleryItems = document.querySelectorAll('.gallery-item');
const lightbox = document.querySelector('.lightbox');
const lightboxImg = document.querySelector('.lightbox-img');
const caption = document.querySelector('.lightbox .caption');
const closeBtn = document.querySelector('.lightbox .close');
const prevBtn = document.querySelector('.lightbox .prev');
const nextBtn = document.querySelector('.lightbox .next');

let currentIndex = 0;

function openLightbox(index) {
    currentIndex = index;
    lightbox.style.display = 'flex';
    lightboxImg.src = galleryItems[currentIndex].querySelector('img').src;
    caption.textContent = galleryItems[currentIndex].dataset.title;
}

function showNext() {
    currentIndex = (currentIndex + 1) % galleryItems.length;
    openLightbox(currentIndex);
}

function showPrev() {
    currentIndex = (currentIndex - 1 + galleryItems.length) % galleryItems.length;
    openLightbox(currentIndex);
}

galleryItems.forEach((item, index) => {
    item.addEventListener('click', () => openLightbox(index));
});

nextBtn.addEventListener('click', (e) => { e.stopPropagation(); showNext(); });
prevBtn.addEventListener('click', (e) => { e.stopPropagation(); showPrev(); });

closeBtn.addEventListener('click', () => { lightbox.style.display = 'none'; });
lightbox.addEventListener('click', (e) => { if(e.target === lightbox) lightbox.style.display = 'none'; });

document.addEventListener('keydown', (e) => {
    if(lightbox.style.display === 'flex') {
        if(e.key === 'ArrowRight') showNext();
        if(e.key === 'ArrowLeft') showPrev();
        if(e.key === 'Escape') lightbox.style.display = 'none';
    }
});
