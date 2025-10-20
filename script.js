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
const url = 'https://script.google.com/macros/s/AKfycbwUXo8-SdQU1VazcaPC7K8IDWgfGHUvRtqB13n590EbZr4-C02tnWzJE6A77N53BVHr/exec'; // Your Apps Script URL
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
        submitButton.innerText = 'Submit';
    }
    
});

// Mobile Number Validation
document.getElementById("bookingForm").addEventListener("submit", function(e) {
    const phone = document.getElementById("phone").value.trim();
    if (!/^\d{10}$/.test(phone)) {
        e.preventDefault(); // stop form submission
        alert("Please enter a valid 10-digit phone number.");
    }
});




