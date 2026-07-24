const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

console.log(hamburger);
console.log(navMenu);

hamburger.addEventListener("click", () => {

    console.log("clicked");

    navMenu.classList.toggle("active");

});
