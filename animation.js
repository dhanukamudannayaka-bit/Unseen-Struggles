
// ================= SCROLL REVEAL ANIMATIONS =================

document.addEventListener("DOMContentLoaded", function () {

    const revealElements = document.querySelectorAll(
        "section, .explore-card, .activity-card, .factor-analysis"
    );

    revealElements.forEach(element => {
        element.classList.add("reveal");
    });

    const observer = new IntersectionObserver((entries) => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {
                entry.target.classList.add("active");
                observer.unobserve(entry.target);
            }

        });

    }, {
        threshold: 0.1
    });

    revealElements.forEach(element => {
        observer.observe(element);
    });

});
