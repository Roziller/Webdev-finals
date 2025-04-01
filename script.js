document.addEventListener("DOMContentLoaded", function () {
    const sections = document.querySelectorAll(".section");

    const fadeInOnScroll = () => {
        sections.forEach((section) => {
            const sectionTop = section.getBoundingClientRect().top;
            if (sectionTop < window.innerHeight - 100) {
                section.classList.add("visible");
            }
        });
    };

    fadeInOnScroll(); // Run on page load
    window.addEventListener("scroll", fadeInOnScroll);
});
