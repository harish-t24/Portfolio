// ==============================
// NAVBAR
// ==============================

const menuToggle = document.getElementById("menu-toggle");
const navLinks = document.getElementById("nav-links");
const navItems = document.querySelectorAll("#nav-links a");
const sections = document.querySelectorAll(".content-section");

// Mobile Menu
menuToggle.addEventListener("click", () => {
    navLinks.classList.toggle("active");
    menuToggle.classList.toggle("open");
});

// ==============================
// SHOW SECTION
// ==============================

function showSection(sectionId, event) {

    // Hide all sections
    sections.forEach(section => {
        section.style.display = "none";
    });

    // Show selected section
    document.getElementById(sectionId).style.display = "block";

    // Active Navbar
    navItems.forEach(item => {
        item.classList.remove("active");
    });

    if (event) {
        event.target.classList.add("active");
    }

    // Close Mobile Menu
    navLinks.classList.remove("active");
    menuToggle.classList.remove("open");

    // Scroll Top
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}

// ==============================
// DEFAULT SECTION
// ==============================

window.addEventListener("load", () => {

    sections.forEach(section => {
        section.style.display = "none";
    });

    document.getElementById("home").style.display = "block";

});

/* ==========================================
   LOADER
========================================== */

window.addEventListener("load",()=>{

    const loader=document.querySelector(".loader");

    setTimeout(()=>{

        loader.style.opacity="0";

        loader.style.visibility="hidden";

    },1800);

});
// ==============================
// BACK TO TOP BUTTON
// ==============================

const topBtn = document.getElementById("topBtn");

window.addEventListener("scroll", () => {

    if (!topBtn) return;

    if (window.scrollY > 300) {
        topBtn.style.display = "flex";
    } else {
        topBtn.style.display = "none";
    }

});

if (topBtn) {

    topBtn.addEventListener("click", () => {

        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });

    });

}

// ==============================
// STAR BACKGROUND
// ==============================

const canvas = document.getElementById("stars");

if (canvas) {

    const ctx = canvas.getContext("2d");

    function resizeCanvas() {

        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;

    }

    resizeCanvas();

    window.addEventListener("resize", resizeCanvas);

    const stars = [];

    const totalStars = 250;

    for (let i = 0; i < totalStars; i++) {

        stars.push({

            x: Math.random() * canvas.width,
            y: Math.random() * canvas.height,
            radius: Math.random() * 2 + 0.5,
            speed: Math.random() * 1.5 + 0.3

        });

    }

    function animateStars() {

        ctx.fillStyle = "#0d1117";
        ctx.fillRect(0, 0, canvas.width, canvas.height);

        stars.forEach(star => {

            ctx.beginPath();

            ctx.arc(
                star.x,
                star.y,
                star.radius,
                0,
                Math.PI * 2
            );

            ctx.fillStyle = "rgba(255,255,255,0.9)";
            ctx.fill();

            star.y -= star.speed;

            if (star.y < 0) {

                star.y = canvas.height;
                star.x = Math.random() * canvas.width;

            }

        });

        requestAnimationFrame(animateStars);

    }

    animateStars();

}