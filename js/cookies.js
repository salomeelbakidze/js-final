'use strict';

export function cookies() {
  document.addEventListener('DOMContentLoaded', () => {
    const cookieBox = document.getElementById('cookie-box');
    const acceptButton = document.querySelector('.accept');
    const declineButton = document.querySelector('.decline');

    if (acceptButton) {
      acceptButton.addEventListener('click', () => {
        cookieBox.style.display = 'none';
        // You can set cookies or handle acceptance here
      });
    }

    if (declineButton) {
      declineButton.addEventListener('click', () => {
        cookieBox.style.display = 'none';
        // You can handle decline logic here
      });
    }
  });
}