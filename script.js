/* ==========================================================
                    PORTFOLIO JS
========================================================== */

"use strict";

/* ==========================================================
                    ELEMENTS
========================================================== */

const menuToggle =
document.getElementById("menu-toggle");

const navLinks =
document.getElementById("nav-links");

const navItems =
document.querySelectorAll("#nav-links a");

const sections =
document.querySelectorAll(".content-section");

const progressBar =
document.getElementById("progressBar");

const cursorGlow =
document.querySelector(".cursor-glow");

// ==============================
// SHOW SECTION
// ==============================
// ==============================
// SHOW SECTION (Scrolling to section)
// ==============================
function showSection(sectionId, event) {
    if (event) {
        event.preventDefault();
    }
    
    const target = document.getElementById(sectionId);
    if (target) {
        const nav = document.querySelector("nav");
        const navHeight = nav ? nav.offsetHeight : 80;
        const targetPos = target.getBoundingClientRect().top + window.scrollY - navHeight + 10;
        
        window.scrollTo({
            top: targetPos,
            behavior: "smooth"
        });
    }

    navItems.forEach(item => {
        item.classList.remove("active");
    });

    if (event && event.currentTarget) {
        event.currentTarget.classList.add("active");
    } else {
        const matchingLink = Array.from(navItems).find(link => {
            const onclickAttr = link.getAttribute("onclick");
            return onclickAttr && onclickAttr.includes(`'${sectionId}'`);
        });
        if (matchingLink) matchingLink.classList.add("active");
    }

    if (navLinks) navLinks.classList.remove("active");
    if (menuToggle) menuToggle.classList.remove("open");
}

// ==============================
// DEFAULT LOAD SECTION
// ==============================
window.addEventListener("load", () => {
    const hash = window.location.hash;
    if (hash) {
        const sectionId = hash.substring(1);
        setTimeout(() => {
            showSection(sectionId);
        }, 300);
    }
});


const loader = document.getElementById("loader");
const fill = document.getElementById("loaderFill");
const percent = document.getElementById("loadingPercent");

if (loader && fill && percent) {

    let value = 0;

    const loading = setInterval(() => {

        value++;

        fill.style.width = value + "%";
        percent.textContent = value + "%";

        if (value >= 100) {

            clearInterval(loading);

            setTimeout(() => {

                loader.classList.add("hide");

            }, 300);

        }

    }, 20);

}


/* ==========================================================
                CURSOR GLOW
========================================================== */

if(cursorGlow){

window.addEventListener("mousemove",e=>{

cursorGlow.style.left=e.clientX+"px";

cursorGlow.style.top=e.clientY+"px";

});

}

/* ==========================================================
                PROGRESS BAR
========================================================== */

window.addEventListener("scroll",()=>{

const total=

document.documentElement.scrollHeight

-

window.innerHeight;

const progress=

(window.scrollY/total)*100;

progressBar.style.width=

progress+"%";

});

/* ==========================================================
                BACK TO TOP
========================================================== */

const topBtn = document.getElementById("topBtn");

if(topBtn){

window.addEventListener("scroll",()=>{

topBtn.style.display=
window.scrollY>350 ? "flex":"none";

});

topBtn.addEventListener("click",()=>{

window.scrollTo({
top:0,
behavior:"smooth"
});

});

}

/* ==========================================================
                NAVBAR SCROLL EFFECT
========================================================== */
window.addEventListener("scroll", () => {
    const nav = document.querySelector("nav");
    if (!nav) return;
    if (window.scrollY > 50) {
        nav.style.background = "rgba(10, 10, 15, 0.9)";
        nav.style.boxShadow = "0 10px 30px rgba(0, 0, 0, 0.5)";
    } else {
        nav.style.background = "rgba(10, 10, 15, 0.75)";
        nav.style.boxShadow = "0 8px 40px rgba(0, 0, 0, 0.35)";
    }
});

/* ==========================================================
                SCROLL SPY
========================================================== */
window.addEventListener("scroll", () => {
    let current = "";
    const scrollPosition = window.scrollY || document.documentElement.scrollTop;
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const nav = document.querySelector("nav");
        const navHeight = nav ? nav.offsetHeight : 80;
        
        if (scrollPosition >= sectionTop - navHeight - 40) {
            current = section.id;
        }
    });

    navItems.forEach(link => {
        link.classList.remove("active");
        
        const onclickAttr = link.getAttribute("onclick");
        if (onclickAttr && onclickAttr.includes(`'${current}'`)) {
            link.classList.add("active");
        } else if (link.textContent.trim().toLowerCase() === current) {
            link.classList.add("active");
        }
    });
});
/* ==========================================================
                    PORTFOLIO JS
========================================================== */

"use strict";





/* ==========================================================
                    MOBILE MENU
========================================================== */

if(menuToggle){

menuToggle.addEventListener("click",()=>{

navLinks.classList.toggle("active");

menuToggle.classList.toggle("open");

});

}



// Duplicate Navbar Scroll listener removed

/* ==========================================================
                    STAR BACKGROUND
========================================================== */

const canvas = document.getElementById("stars");

if(canvas){

const ctx = canvas.getContext("2d");

function resizeCanvas(){

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

}

resizeCanvas();

window.addEventListener(

"resize",

resizeCanvas

);

const stars=[];

const STAR_COUNT=280;

for(let i=0;i<STAR_COUNT;i++){

stars.push({

x:Math.random()*canvas.width,

y:Math.random()*canvas.height,

radius:Math.random()*2.2+.5,

speed:Math.random()*1.4+.2,

alpha:Math.random(),

dx:(Math.random()-.5)*.3

});

}

function animateStars(){

ctx.clearRect(

0,

0,

canvas.width,

canvas.height

);

stars.forEach(star=>{

ctx.beginPath();

ctx.arc(

star.x,

star.y,

star.radius,

0,

Math.PI*2

);

ctx.fillStyle=

`rgba(255,255,255,${star.alpha})`;

ctx.fill();

star.y-=star.speed;

star.x+=star.dx;

star.alpha+=

(Math.random()-.5)*.02;

if(star.alpha<.2)

star.alpha=.2;

if(star.alpha>.9)

star.alpha=.9;

if(star.y<0){

star.y=canvas.height;

star.x=Math.random()*canvas.width;

}

if(star.x<0)

star.x=canvas.width;

if(star.x>canvas.width)

star.x=0;

});

requestAnimationFrame(

animateStars

);

}

animateStars();

}

/* ==========================================================
                FLOATING PARTICLES
========================================================== */

function createParticle(x,y){

const particle=

document.createElement("span");

particle.style.position="fixed";

particle.style.left=x+"px";

particle.style.top=y+"px";

particle.style.width="8px";

particle.style.height="8px";

particle.style.borderRadius="50%";

particle.style.pointerEvents="none";

particle.style.background=

"rgba(139,92,246,.8)";

particle.style.zIndex="999999";

document.body.appendChild(

particle

);

const angle=

Math.random()*360;

const distance=

60+Math.random()*70;

particle.animate([

{

transform:

"translate(0,0) scale(1)",

opacity:1

},

{

transform:

`translate(

${Math.cos(angle)*distance}px,

${Math.sin(angle)*distance}px

)

scale(0)`,

opacity:0

}

],{

duration:900,

easing:"ease-out"

});

setTimeout(()=>{

particle.remove();

},900);

}

window.addEventListener(

"click",

e=>{

for(let i=0;i<10;i++){

createParticle(

e.clientX,

e.clientY

);

}

});

/* ==========================================================
                GITHUB REPOSITORIES
========================================================== */

fetch(

"https://api.github.com/users/harish-t24/repos"

)

.then(res=>res.json())

.then(data=>{

const repoContainer=

document.getElementById(

"repos"

);

if(!repoContainer) return;

let html="";

data

.sort(

(a,b)=>

b.stargazers_count-

a.stargazers_count

)

.slice(0,6)

.forEach(repo=>{

html+=`

<div class="project-card">

<h2>

${repo.name}

</h2>

<p>

${repo.description||"No description"}

</p>

<div class="project-tech">

<span>

⭐ ${repo.stargazers_count}

</span>

<span>

${repo.language||"Unknown"}

</span>

</div>

<div class="project-buttons">

<a

href="${repo.html_url}"

target="_blank">

GitHub

</a>

</div>

</div>

`;

});

repoContainer.innerHTML=html;

})

.catch(err=>{

console.log(err);

});

/* ==========================================================
                VISITOR COUNTER
========================================================== */

if(typeof CountAPI!=="undefined"){

CountAPI

.visits(

"harish-portfolio",

"homepage"

)

.then(result=>{

const visitor=

document.getElementById(

"visitor-count"

);

if(visitor){

visitor.innerText=

result.value;

}

});

}

/* ==========================================================
                EMAIL JS
========================================================== */
if (typeof emailjs !== "undefined") {
    emailjs.init("YOUR_PUBLIC_KEY");

    const form = document.getElementById("contact-form");
    if (form) {
        form.addEventListener("submit", function(e) {
            e.preventDefault();

            showToast("Sending message... ✉️");

            emailjs.sendForm(
                "YOUR_SERVICE_ID",
                "YOUR_TEMPLATE_ID",
                this
            )
            .then(() => {
                showToast("Message Sent Successfully! 🚀");
                form.reset();
            })
            .catch((err) => {
                console.error("EmailJS Error:", err);
                // Fallback simulation for offline/demo uses
                showToast("Demo Submit: Message simulated! 🚀");
                form.reset();
            });
        });
    }
}

/* ==========================================================
                FLOATING EFFECTS
========================================================== */

const floatingCards=

document.querySelectorAll(

".highlight-card,.service-card"

);

floatingCards.forEach(

(card,index)=>{

card.style.animation=

`floatCard

${4+index*.3}s

ease-in-out

infinite`;

});

const style=

document.createElement(

"style"

);

style.innerHTML=`

@keyframes floatCard{

0%{

transform:translateY(0);

}

50%{

transform:translateY(-10px);

}

100%{

transform:translateY(0);

}

}

`;

document.head.appendChild(

style

);

/* ==========================================================
                PERFORMANCE
========================================================== */

window.addEventListener(

"resize",

()=>{

cancelAnimationFrame(

window.resizeTimer

);

window.resizeTimer=

requestAnimationFrame(()=>{

if(canvas){

canvas.width=

window.innerWidth;

canvas.height=

window.innerHeight;

}

});

});

/* ==========================================================
                KEYBOARD SHORTCUTS
========================================================== */
document.addEventListener("keydown",e=>{

if(e.key==="Escape"){

if(typeof closeModal==="function"){
closeModal();
}

}

});

/* ==========================================================
                PRELOAD IMAGES
========================================================== */

document

.querySelectorAll("img")

.forEach(img=>{

const image=

new Image();

image.src=img.src;

});

/* ==========================================================
                CONSOLE MESSAGE
========================================================== */

console.log(

"%cWelcome to Harish Portfolio 🚀",

"color:#8b5cf6;font-size:22px;font-weight:bold;"

);

console.log(

"%cDesigned with ❤️ using HTML CSS JavaScript",

"color:#3b82f6;font-size:14px;"

);

/* ==========================
Typing Animation
========================== */

const words = [

"Full Stack Developer",

"Python Developer",

"Software Developer",

"Cloud Enthusiast",

"Problem Solver"

];

let wordIndex = 0;

let charIndex = 0;

let deleting = false;

const typing = document.getElementById("typing-text");

function typeEffect(){

    if(!typing) return;

    const current = words[wordIndex];

    if(!deleting){

        typing.textContent = current.substring(0,charIndex++);

        if(charIndex > current.length){

            deleting = true;

            setTimeout(typeEffect,1200);

            return;

        }

    }else{

        typing.textContent = current.substring(0,charIndex--);

        if(charIndex < 0){

            deleting = false;

            wordIndex = (wordIndex+1)%words.length;

        }

    }

    setTimeout(typeEffect,deleting?50:100);

}

typeEffect();

/* ==========================================================
                TOAST NOTIFICATION
========================================================== */
function showToast(message) {
    const toast = document.getElementById("toast");
    if (toast) {
        toast.textContent = message;
        toast.classList.add("show");
        
        clearTimeout(window.toastTimer);
        window.toastTimer = setTimeout(() => {
            toast.classList.remove("show");
        }, 4000);
    }
}

// Initial welcome toast
window.addEventListener("load", () => {
    setTimeout(() => {
        showToast("Welcome to My Portfolio 👋");
    }, 1000);
});

/* ==========================================================
                MODAL FUNCTIONS
========================================================== */
function openModal(title, content) {
    const modal = document.getElementById("projectModal");
    const modalTitle = document.getElementById("modalTitle");
    const modalBody = document.getElementById("modalBody");
    
    if (modal && modalTitle && modalBody) {
        modalTitle.textContent = title;
        modalBody.innerHTML = content;
        modal.style.display = "flex";
        document.body.style.overflow = "hidden";
    }
}

function closeModal() {
    const modal = document.getElementById("projectModal");
    if (modal) {
        modal.style.display = "none";
        document.body.style.overflow = "";
    }
}

// Close modal when clicking outside
window.addEventListener("click", e => {
    const modal = document.getElementById("projectModal");
    if (e.target === modal) {
        closeModal();
    }
});
/* ==========================================================
                END OF SCRIPT
========================================================== */