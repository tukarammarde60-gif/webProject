// ===== Menu Toggle =====
const menubar = document.querySelector('#menu-bars');
const navbar = document.querySelector('.navbar');

menubar.addEventListener('click', () => {
    menubar.classList.toggle('fa-times');
    navbar.classList.toggle('active');
});

// ===== Booking Form Submission =====
const url = 'https://script.google.com/macros/s/AKfycbwUXo8-SdQU1VazcaPC7K8IDWgfGHUvRtqB13n590EbZr4-C02tnWzJE6A77N53BVHr/exec';
const bookingForm = document.querySelector('#bookingForm');
const submitButton = bookingForm.querySelector('button[type="submit"]');

// === Create Success Popup ===
function showSuccessPopup(message) {
    const popup = document.createElement('div');
    popup.className = 'success-popup';
    popup.textContent = message;
    document.body.appendChild(popup);

    // Show popup with animation
    setTimeout(() => popup.classList.add('show'), 100);

    // Remove after 4 seconds
    setTimeout(() => {
        popup.classList.remove('show');
        setTimeout(() => popup.remove(), 500);
    }, 4000);
}

bookingForm.addEventListener('submit', async (e) => {
    e.preventDefault();

    // Validate phone number
    const phone = document.getElementById("phone").value.trim();
    if (!/^\d{10}$/.test(phone)) {
        showSuccessPopup("❌ Please enter a valid 10-digit phone number.");
        return;
    }

    submitButton.disabled = true;
    submitButton.innerText = 'Booking...';

    const formData = new FormData(bookingForm);

    try {
        const response = await fetch(url, {
            method: 'POST',
            body: formData
        });

        if (response.ok) {
            showSuccessPopup("✅ Booking successful! We’ll contact you shortly.");
            bookingForm.reset();
        } else {
            showSuccessPopup("⚠️ Something went wrong. Please try again.");
            console.error('Server response:', response.statusText);
        }
    } catch (err) {
        showSuccessPopup("⚠️ Network error. Please try again later.");
        console.error(err);
    } finally {
        submitButton.disabled = false;
        submitButton.innerText = 'Submit';
    }
});

// ===== Structured Data (SEO Schema) =====
(function() {
    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "TaxiService",
        "name": "Tirupati Tours and Travels",
        "image": "https://www.tirupatirides.in/Logo.png",
        "description": "Reliable taxi, car hire, and cab booking service in Latur. Comfortable rides, affordable prices, and 24/7 availability.",
        "telephone": "+919850876285",
        "address": {
            "@type": "PostalAddress",
            "addressLocality": "Latur",
            "addressRegion": "Maharashtra",
            "addressCountry": "IN"
        },
        "areaServed": "Maharashtra",
        "url": "https://www.tirupatirides.in"
    };

    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.text = JSON.stringify(jsonLd);
    document.head.appendChild(script);
})();
