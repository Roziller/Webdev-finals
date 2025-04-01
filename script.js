let lastScrollTop = 0;
const navbar = document.getElementById("navbar");

window.addEventListener("scroll", function () {
    let currentScroll = window.pageYOffset || document.documentElement.scrollTop;

    if (currentScroll > lastScrollTop) {
        // Scrolling Down - Hide Navbar
        navbar.classList.add("hidden");
    } else {
        // Scrolling Up - Show Navbar
        navbar.classList.remove("hidden");
    }

    lastScrollTop = currentScroll;
});
