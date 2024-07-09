const checkbox = document.querySelector(".hamburger")
const navMenu = document.querySelector(".navbarMenu")

checkbox.addEventListener("click", () => {
    checkbox.classList.toggle("active");
    navMenu.classList.toggle("active");
})