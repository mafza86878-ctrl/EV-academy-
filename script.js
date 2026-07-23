// =======================================
// EV Academy JavaScript
// =======================================

// Dark Mode Toggle

const themeToggle = document.getElementById("theme-toggle");

if (themeToggle) {

themeToggle.addEventListener("click", () => {

document.body.classList.toggle("dark-mode");

if (document.body.classList.contains("dark-mode")) {

themeToggle.textContent = "☀️";

localStorage.setItem("theme", "dark");

} else {

themeToggle.textContent = "🌙";

localStorage.setItem("theme", "light");

}

});

}

// Load Saved Theme

if (localStorage.getItem("theme") === "dark") {

document.body.classList.add("dark-mode");

if (themeToggle) {

themeToggle.textContent = "☀️";

}

}

// Smooth Scroll

document.querySelectorAll('a[href^="#"]').forEach(anchor => {

anchor.addEventListener("click", function(e) {

e.preventDefault();

const target = document.querySelector(this.getAttribute("href"));

if (target) {

target.scrollIntoView({

behavior: "smooth"

});

}

});

});

// Reveal Animation

const observer = new IntersectionObserver((entries) => {

entries.forEach((entry) => {

if (entry.isIntersecting) {

entry.target.classList.add("show");

}

});

});

document.querySelectorAll("section").forEach((section) => {

observer.observe(section);

});

console.log("EV Academy Website Loaded Successfully!");
