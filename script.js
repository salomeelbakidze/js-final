let burger = document.querySelector(".fa-bars");
let xMark = document.querySelector(".fa-xmark");
let mobileMenu = document.querySelector(".header_nav");

burger.addEventListener("click", ()=>{
    mobileMenu.classList.add("show");
    burger.style.display = "none";
    xMark.style.display = "block";
});

xMark.addEventListener("click", ()=>{
    mobileMenu.classList.remove("show");
    burger.style.display = "block";
    xMark.style.display = "none";
});