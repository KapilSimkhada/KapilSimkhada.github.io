const menuToggle =
    document.getElementById("menu-toggle");

const navLinks =
    document.querySelector(".nav-links");


if (menuToggle) {

    menuToggle.addEventListener(
        "click",
        function () {

            navLinks.classList.toggle("active");

        }
    );

}


const year =
    document.getElementById("year");


if (year) {

    year.textContent =
        new Date().getFullYear();

}
