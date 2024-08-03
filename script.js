const menu = document.querySelector(".menu")
const button = document.querySelector(".menu-bar");

button.addEventListener("click", function() {
    menu.classList.toggle("show");

})

AOS.init();