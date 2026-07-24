/* ==========================================
            EV Academy Script
========================================== */

/* Mobile Menu */

const menuBtn = document.querySelector(".menu-btn");
const navLinks = document.querySelector(".nav-links");

menuBtn.addEventListener("click", () => {

    navLinks.classList.toggle("active");

});

/* Close Menu After Click */

document.querySelectorAll(".nav-links a").forEach(link => {

    link.addEventListener("click", () => {

        navLinks.classList.remove("active");

    });

});

/* Sticky Header */

const header = document.querySelector(".header");

window.addEventListener("scroll", () => {

    if (window.scrollY > 50) {

        header.classList.add("sticky");

    } else {

        header.classList.remove("sticky");

    }

});

/* Scroll Animation */

const fadeElements = document.querySelectorAll(
    ".hero, .about, .courses, .why-choose, .contact"
);

function revealSections() {

    fadeElements.forEach(section => {

        const sectionTop = section.getBoundingClientRect().top;

        if (sectionTop < window.innerHeight - 120) {

            section.classList.add("show");

        }

    });

}

window.addEventListener("scroll", revealSections);

revealSections();

/* Smooth Button Effect */

document.querySelectorAll("a[href^='#']").forEach(anchor => {

    anchor.addEventListener("click", function (e) {

        e.preventDefault();

        document.querySelector(this.getAttribute("href")).scrollIntoView({

            behavior: "smooth"

        });

    });

});

/* Current Year */

const year = document.querySelector("#year");

if (year) {

    year.textContent = new Date().getFullYear();/* ==========================================
        ACTIVE NAVIGATION LINK
========================================== */

const sections = document.querySelectorAll("section");
const navItems = document.querySelectorAll(".nav-links a");

window.addEventListener("scroll", () => {

    let currentSection = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop - 120;
        const sectionHeight = section.offsetHeight;

        if (window.scrollY >= sectionTop &&
            window.scrollY < sectionTop + sectionHeight) {

            currentSection = section.getAttribute("id");

        }

    });

    navItems.forEach(link => {

        link.classList.remove("active");

        if (link.getAttribute("href") === "#" + currentSection) {

            link.classList.add("active");

        }

    });

});

/* ==========================================
            BACK TO TOP BUTTON
========================================== */

const backToTop = document.querySelector(".back-to-top");

window.addEventListener("scroll", () => {

    if (window.scrollY > 500) {

        backToTop.style.opacity = "1";
        backToTop.style.visibility = "visible";

    } else {

        backToTop.style.opacity = "0";
        backToTop.style.visibility = "hidden";

    }

});

backToTop.addEventListener("click", () => {

    window.scrollTo({

        top:0,
        behavior:"smooth"

    });

});

/* ==========================================
        HERO IMAGE PARALLAX EFFECT
========================================== */

const heroImage = document.querySelector(".hero-image img");

window.addEventListener("mousemove",(e)=>{

    const x = (window.innerWidth / 2 - e.pageX) / 60;
    const y = (window.innerHeight / 2 - e.pageY) / 60;

    heroImage.style.transform =
    `translate(${x}px,${y}px)`;

});

/* ==========================================
            BUTTON RIPPLE EFFECT
========================================== */

const buttons = document.querySelectorAll(
".primary-btn, .secondary-btn"
);

buttons.forEach(button=>{

    button.addEventListener("mouseenter",()=>{

        button.style.transform="translateY(-4px)";

    });

    button.addEventListener("mouseleave",()=>{

        button.style.transform="translateY(0)";

    });

});

/* ==========================================
            END OF SCRIPT
========================================== */

console.log("EV Academy Website Loaded Successfully.");/* ==========================================
        PAGE LOADED ANIMATION
========================================== */

window.addEventListener("load", () => {

    document.body.classList.add("loaded");

});

/* ==========================================
        HERO IMAGE FADE EFFECT
========================================== */

const heroImg = document.querySelector(".hero-image img");

if (heroImg) {

    heroImg.onload = () => {

        heroImg.style.opacity = "1";
        heroImg.style.transform = "scale(1)";

    };

}

/* ==========================================
        LAZY LOADING IMAGES
========================================== */

const images = document.querySelectorAll("img");

const imageObserver = new IntersectionObserver((entries, observer) => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {

            const image = entry.target;

            image.classList.add("image-visible");

            observer.unobserve(image);

        }

    });

}, {

    threshold: 0.2

});

images.forEach(image => {

    imageObserver.observe(image);

});

/* ==========================================
        DISABLE RIGHT CLICK
========================================== */

document.addEventListener("contextmenu", (event) => {

    event.preventDefault();

});

/* ==========================================
        DISABLE IMAGE DRAGGING
========================================== */

images.forEach(image => {

    image.setAttribute("draggable", "false");

});

/* ==========================================
        KEYBOARD ACCESSIBILITY
========================================== */

document.addEventListener("keyup", (event) => {

    if (event.key === "Escape") {

        navLinks.classList.remove("active");

    }

});

/* ==========================================
        WEBSITE READY
========================================== */

console.log("EV Academy is ready.");

  }
