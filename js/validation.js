'use strict';

export function validation() {
  const validateFullName = (userName) => /^(?=.*[A-Za-z]{3})[A-Za-z][A-Za-z '-]*[A-Za-z]$/.test(userName);
  const validateEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  const form = document.querySelector('.registration-form');
  const btnSubmit = document.querySelector('.submit');
  const emailInput = document.getElementById('email');
  const userNameInput = document.getElementById('fname');

  if (!form || !btnSubmit || !emailInput || !userNameInput) {
    console.error('Form or required elements not found.');
    return;
  }

  btnSubmit.addEventListener('click', function (event) {
    event.preventDefault();
    
    const email = emailInput.value;
    const userName = userNameInput.value;

    if (!validateEmail(email)) {
      alert('Please enter a valid email.');
      return;
    }

    if (!validateFullName(userName)) {
      alert('Please enter a valid full name.');
      return;
    }

    form.reset(); // Reset the form after successful validation
  });
}
