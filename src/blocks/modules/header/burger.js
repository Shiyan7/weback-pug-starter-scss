document.addEventListener("DOMContentLoaded", () => {
    const burger = document.querySelector(".burger");

    const burgerOpen = () => {
        burger.classList.toggle("burger-close");
    };
    
    burger?.addEventListener("click", burgerOpen);
});