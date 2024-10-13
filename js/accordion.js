'use strict';

export function accordion() {
  const acc = document.getElementsByClassName("accordion");

  for (let i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function() {
      // Toggle the "active" class for the clicked element
      this.classList.toggle("active1");

      // Select the panel related to the clicked accordion
      const panel = this.nextElementSibling;

      // Check the current display value and toggle it accordingly
      if (panel.style.display === "block") {
        panel.style.display = "none";
      } else {
        panel.style.display = "block";
      }
    });
  }
}