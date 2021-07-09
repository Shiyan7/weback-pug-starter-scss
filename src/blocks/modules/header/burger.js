document.addEventListener("DOMContentLoaded", () => {
    const burger = document.querySelector(".burger");
    const nav = document.querySelector(".nav");
    const body = document.body;

    const navOpen = () => {
        burger.classList.toggle("burger-close");
        body.classList.toggle("lock");
        nav?.classList.toggle("show");
    };
    
    burger?.addEventListener("click", navOpen);
});