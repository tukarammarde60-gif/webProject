// ===== Menu Toggle =====
const menubar = document.querySelector('#menu-bars');
const navbar = document.querySelector('.navbar');

menubar.addEventListener('click', () => {
    menubar.classList.toggle('fa-times'); // change icon
    navbar.classList.toggle('active');   // show/hide menu
});



menubar.addEventListener('click', () => {
    menubar.classList.toggle('fa-times'); // change icon
    navbar.classList.toggle('active');   // show/hide menu
});

// ===== Booking Form Submission =====
const url = 'https://script.google.com/macros/s/AKfycbyVbIrszmhIkK-sMnH1oX8vZWArffigKhrYp8AWhk1X6dlnmyDgcBBzWM-yQwpilt61Gw/exec'; // Your Apps Script URL
const bookingForm = document.querySelector('#bookingForm');
const submitButton = bookingForm.querySelector('button[type="submit"]');

bookingForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    submitButton.disabled = true;
    submitButton.innerText = 'Booking...';

    const formData = new FormData(bookingForm);

    try {
        const response = await fetch(url, {
            method: 'POST',
            body: formData
        });

        if (response.ok) {
            alert('Booking submitted successfully!');
            bookingForm.reset();
        } else {
            alert('Error submitting form. Please try again.');
            console.error('Server response:', response.statusText);
        }
    } catch (err) {
        alert('Error submitting form. Please try again.');
        console.error(err);
    } finally {
        submitButton.disabled = false;
        submitButton.innerText = 'Book Now';
    }
// Mobile View
    /* ===== Mobile Responsive Adjustments ===== */
@media (max-width: 1024px) {
  /* Hero Text */
  .hero-text h2 {
    font-size: 2.6rem; /* Slightly smaller on tablets */
  }

  /* Hero Booking Form */
  .hero-booking .contactus {
    width: 85%;
    padding: 25px;
  }

  /* Navbar Links */
  .navbar a {
    font-size: 1.6rem;
  }
}

@media (max-width: 768px) {
  /* Header Navbar */
  #menu-bars {
    display: block;
  }

  .navbar {
    position: absolute;
    top: 100%;
    right: 0;
    width: 100%;
    background: #ffc61a;
    flex-direction: column;
    display: none;
    text-align: center;
    padding: 1rem 0;
  }

  .navbar.active {
    display: flex;
  }

  .navbar a {
    width: 100%;
    font-size: 1.8rem;
    padding: 1rem 0;
    border-top: 1px solid rgba(255, 255, 255, 0.3);
  }

  /* Hero Text & Booking Form */
  .hero-text h2 {
    font-size: 2.2rem;
  }

  .hero-booking .contactus {
    width: 95%;
    padding: 20px;
  }

  /* Hero Icons */
  .hero-icon {
    width: 60px;
    height: 60px;
  }

  .hero-icon:nth-child(1) { left: -80px; }
  .hero-icon:nth-child(2) { left: -100px; }
  .hero-icon:nth-child(3) { left: -120px; }
}

@media (max-width: 480px) {
  /* Hero Text */
  .hero-text h2 {
    font-size: 2rem;
  }

  /* Booking Form */
  .hero-booking .contactus {
    width: 100%;
    padding: 15px;
  }

  .booking-form .contactus {
    padding: 15px;
  }

  /* Gallery */
  .gallery {
    grid-template-columns: repeat(auto-fit, minmax(140px, 1fr));
    gap: 12px;
    margin: 30px 10px;
  }

  .gallery-item img {
    height: 140px;
  }

  /* Fast Booking Steps */
  .booking-steps {
    flex-direction: column;
    gap: 20px;
  }

  /* Testimonials */
  .testimonial-grid {
    grid-template-columns: 1fr;
    gap: 15px;
  }

  /* Navbar Links */
  .navbar a {
    font-size: 1.6rem;
  }
}

});
