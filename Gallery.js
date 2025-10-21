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
// ===== Gallery Lightbox for Mobile =====
const galleryItems = document.querySelectorAll('.gallery-item');
let lightbox = document.createElement('div');
lightbox.classList.add('lightbox');
lightbox.innerHTML = `
    <span class="close">&times;</span>
    <span class="prev">&#10094;</span>
    <img class="lightbox-img" src="" alt="">
    <span class="next">&#10095;</span>
    <div class="caption"></div>
`;
document.body.appendChild(lightbox);

const lightboxImg = lightbox.querySelector('.lightbox-img');
const closeBtn = lightbox.querySelector('.close');
const prevBtn = lightbox.querySelector('.prev');
const nextBtn = lightbox.querySelector('.next');

let currentIndex = 0;

function openLightbox(index) {
    currentIndex = index;
    lightbox.style.display = 'flex';
    lightboxImg.src = galleryItems[currentIndex].querySelector('img').src;
}

function showNext() {
    currentIndex = (currentIndex + 1) % galleryItems.length;
    lightboxImg.src = galleryItems[currentIndex].querySelector('img').src;
}

function showPrev() {
    currentIndex = (currentIndex - 1 + galleryItems.length) % galleryItems.length;
    lightboxImg.src = galleryItems[currentIndex].querySelector('img').src;
}

// Open lightbox on click (only for mobile)
galleryItems.forEach((item, index) => {
    item.addEventListener('click', () => {
        if(window.innerWidth <= 768) openLightbox(index);
    });
});

closeBtn.addEventListener('click', () => { lightbox.style.display = 'none'; });
nextBtn.addEventListener('click', (e) => { e.stopPropagation(); showNext(); });
prevBtn.addEventListener('click', (e) => { e.stopPropagation(); showPrev(); });

lightbox.addEventListener('click', (e) => {
    if(e.target === lightbox) lightbox.style.display = 'none';
});

document.addEventListener('keydown', (e) => {
    if(lightbox.style.display === 'flex') {
        if(e.key === 'ArrowRight') showNext();
        if(e.key === 'ArrowLeft') showPrev();
        if(e.key === 'Escape') lightbox.style.display = 'none';
    }
});
// ===== Mobile Swipe for Lightbox =====
let startX = 0;
let endX = 0;

lightbox.addEventListener('touchstart', (e) => {
    startX = e.touches[0].clientX;
});

lightbox.addEventListener('touchmove', (e) => {
    endX = e.touches[0].clientX;
});

lightbox.addEventListener('touchend', () => {
    const diff = startX - endX;
    if (Math.abs(diff) > 50) { // swipe threshold
        if (diff > 0) showNext(); // swipe left → next
        else showPrev();           // swipe right → prev
    }
});

});

