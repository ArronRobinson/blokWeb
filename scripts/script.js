// JavaScript Document
var buttonMenu = document.querySelector("nav button:nth-of-type(3)");
var subMenu = document.querySelector("main ul");

buttonMenu.addEventListener("click", toggleMenu);

function toggleMenu () {
    subMenu.classList.toggle("open");
}