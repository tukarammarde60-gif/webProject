// ===== Menu Toggle =====
const menubar = document.querySelector('#menu-bars');
const navbar = document.querySelector('.navbar');

menubar.addEventListener('click', () => {
  menubar.classList.toggle('fa-times');
  navbar.classList.toggle('active');
});

// ===== Google Apps Script URL =====
const url = 'https://script.google.com/macros/s/AKfycbxSuU62XOv8NAjRKjfhaPccaX_xQmT_sZlVRrItUH2YGsfBPt5loSkT1eibvtvAcEPSzA/exec';

// ===== Success Popup =====
function showSuccessPopup(message) {
  const popup = document.createElement('div');
  popup.className = 'success-popup';
  popup.textContent = message;
  document.body.appendChild(popup);

  // Animate show
  setTimeout(() => popup.classList.add('show'), 100);

  // Remove popup after 4 seconds
  setTimeout(() => {
    popup.classList.remove('show');
    setTimeout(() => popup.remove(), 500);
  }, 4000);
}

// ===== Booking Form Submission =====
const bookingForm = document.querySelector('#bookingForm');
if (bookingForm) {
  const submitButton = bookingForm.querySelector('button[type="submit"]');

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
    formData.append('type', 'booking'); // Identify form type for script

    try {
      const response = await fetch(url, { method: 'POST', body: formData });
      const result = await response.json();

      if (result.status === 'success') {
        showSuccessPopup("✅ Booking successful! We’ll contact you shortly.");
        bookingForm.reset();
      } else {
        showSuccessPopup("⚠️ Something went wrong. Please try again.");
        console.error('Server response:', result.message);
      }
    } catch (err) {
      showSuccessPopup("⚠️ Network error. Please try again later.");
      console.error(err);
    } finally {
      submitButton.disabled = false;
      submitButton.innerText = 'Submit';
    }
  });
}

// ===== Feedback Form Submission =====
const feedbackForm = document.querySelector('#feedbackForm');
if (feedbackForm) {
  const feedbackButton = feedbackForm.querySelector('button[type="submit"]');

  feedbackForm.addEventListener('submit', async (e) => {
    e.preventDefault();

    feedbackButton.disabled = true;
    feedbackButton.innerText = 'Submitting...';

    const formData = new FormData(feedbackForm);
    formData.append('type', 'feedback'); // Identify form type for script

    try {
      const response = await fetch(url, { method: 'POST', body: formData });
      const result = await response.json();

      if (result.status === 'success') {
        showSuccessPopup("✅ Thank you for your valuable feedback!");
        feedbackForm.reset();
      } else {
        showSuccessPopup("⚠️ Something went wrong. Please try again.");
        console.error('Server response:', result.message);
      }
    } catch (err) {
      showSuccessPopup("⚠️ Network error. Please try again later.");
      console.error(err);
    } finally {
      feedbackButton.disabled = false;
      feedbackButton.innerText = 'Submit';
    }
  });
}

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

