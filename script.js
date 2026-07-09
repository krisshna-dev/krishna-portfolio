// ================================
// Typing Animation
// ================================

const words = [
    "Full Stack Developer",
    "Frontend Developer",
    "Backend Developer",
    "JavaScript Developer",
    "Tech Enthusiast"
];

let wordIndex = 0;
let charIndex = 0;
let isDeleting = false;

const typingElement = document.getElementById("typing");

function typeEffect() {

    if (!typingElement) return;

    const currentWord = words[wordIndex];

    if (!isDeleting) {

        typingElement.textContent = currentWord.substring(0, charIndex);

        charIndex++;

        if (charIndex > currentWord.length) {

            isDeleting = true;

            setTimeout(typeEffect, 1200);

            return;

        }

    } else {

        typingElement.textContent = currentWord.substring(0, charIndex);

        charIndex--;

        if (charIndex < 0) {

            isDeleting = false;

            wordIndex++;

            if (wordIndex >= words.length)
                wordIndex = 0;

        }

    }

    setTimeout(typeEffect, isDeleting ? 50 : 100);

}

// ================= MOBILE MENU =================

const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

if (hamburger && navMenu) {

    hamburger.addEventListener("click", function () {

        navMenu.classList.toggle("active");

    });

    document.querySelectorAll(".nav-link").forEach(link => {

        link.addEventListener("click", () => {

            navMenu.classList.remove("active");

        });

    });

}

// ================================
// Active Navigation
// ================================

const sections=document.querySelectorAll("section");

const navLinks=document.querySelectorAll(".nav-link");

window.addEventListener("scroll",()=>{

let current="";

sections.forEach(section=>{

const sectionTop=section.offsetTop-150;

const sectionHeight=section.clientHeight;

if(window.scrollY>=sectionTop){

current=section.getAttribute("id");

}

});

navLinks.forEach(link=>{

link.classList.remove("active");

if(link.getAttribute("href")==="#"+current){

link.classList.add("active");

}

});

});

// ================================
// Scroll To Top
// ================================

const scrollBtn=document.getElementById("scrollTop");

window.addEventListener("scroll",()=>{

if(!scrollBtn) return;

if(window.scrollY>300){

scrollBtn.style.display="flex";

}else{

scrollBtn.style.display="none";

}

});

if(scrollBtn){

scrollBtn.onclick=()=>{

window.scrollTo({

top:0,

behavior:"smooth"

});

};

}

// ================================
// Smooth Scroll
// ================================

document.querySelectorAll(".nav-link").forEach(anchor=>{

anchor.addEventListener("click",function(e){

e.preventDefault();

const target=document.querySelector(this.getAttribute("href"));

if(target){

target.scrollIntoView({

behavior:"smooth"

});

}

});

});

const logo=document.querySelector(".logo");

if(logo){

logo.addEventListener("click",function(e){

e.preventDefault();

document.querySelector("#home").scrollIntoView({

behavior:"smooth"

});

});

}

// ================================
// Fade Animation
// ================================

const observer=new IntersectionObserver(entries=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.classList.add("show");

}

});

});

document.querySelectorAll("section").forEach(section=>{

section.classList.add("hidden");

observer.observe(section);

});

// ================================
// Start Website
// ================================
function loadParticles() {
    particlesJS("particles-js", {
        particles: {
            number: {
                value: 80,
                density: {
                    enable: true,
                    value_area: 800
                }
            },
            color: {
                value: "#00f7ff"
            },
            shape: {
                type: "circle"
            },
            opacity: {
                value: 0.5
            },
            size: {
                value: 3
            },
            move: {
                enable: true,
                speed: 2
            },
            line_linked: {
                enable: true,
                distance: 150,
                color: "#00f7ff",
                opacity: 0.3,
                width: 1
            }
        },
        interactivity: {
            detect_on: "canvas",
            events: {
                onhover: {
                    enable: true,
                    mode: "grab"
                },
                onclick: {
                    enable: true,
                    mode: "push"
                }
            }
        },
        retina_detect: true
    });
}

window.addEventListener("DOMContentLoaded", () => {
    typeEffect();
    loadParticles();
});
/* ================= CURSOR ================= */

const glow=document.querySelector(".cursor-glow");

document.addEventListener("mousemove",(e)=>{

glow.style.left=e.clientX+"px";

glow.style.top=e.clientY+"px";

});

const header=document.querySelector(".header");

window.addEventListener("scroll",()=>{

if(window.scrollY>40){

header.style.background="rgba(5,8,22,.9)";

header.style.boxShadow="0 10px 35px rgba(0,0,0,.25)";

}else{

header.style.background="rgba(5,8,22,.75)";

header.style.boxShadow="none";

}

});