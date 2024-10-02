'use strict';

export function validation(){
  
 const validateFullName = (userName) => /^(?=.*[A-Za-z]{3})[A-Za-z][A-Za-z '-]*[A-Za-z]$/.test(userName);
 
const validateEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);};

 
 const form = document.querySelector('.registration-form');
 const btnSubmit = document.querySelector('.submit');
 
 const emailInput = document.getElementById('email');
 
 const userNameInput = document.getElementById('fname');

 btnSubmit.addEventListener('click', function (event) {
    event.preventDefault(); 
    let email = emailInput.value;
    
    let userName = userNameInput.value;

    if (!validateEmail(email)) {
        alert('Please enter a valid email.');
        return;
      }
     
     
     
      if (!validateFullName(userName)) {
        alert('Please enter a valid full name.');
        return;
      } 
      if (!validateText(form)) {
        return;
      }
     
      form.reset();
    });

