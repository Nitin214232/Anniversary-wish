/* ============================================
   Happy 1st Engagement Anniversary
   script.js
============================================ */

// ===============================
// Loader
// ===============================

window.addEventListener("load", () => {

    setTimeout(() => {

        const loader = document.querySelector(".loader");

        loader.style.opacity = "0";

        loader.style.visibility = "hidden";

    }, 1800);

});

// ===============================
// Live Anniversary Counter
// ===============================

const anniversaryDate = new Date("July 6, 2025 00:00:00").getTime();

function updateCounter() {

    const now = new Date().getTime();

    const distance = now - anniversaryDate;

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));

    const hours = Math.floor(
        (distance % (1000 * 60 * 60 * 24)) /
        (1000 * 60 * 60)
    );

    const minutes = Math.floor(
        (distance % (1000 * 60 * 60)) /
        (1000 * 60)
    );

    const seconds = Math.floor(
        (distance % (1000 * 60)) /
        1000
    );

    document.getElementById("days").textContent = days;
    document.getElementById("hours").textContent = hours;
    document.getElementById("minutes").textContent = minutes;
    document.getElementById("seconds").textContent = seconds;

}

updateCounter();

setInterval(updateCounter,1000);

// ===============================
// Falling Rose Petals
// ===============================

const petalsContainer = document.getElementById("petals");

function createPetal(){

    const petal = document.createElement("div");

    petal.classList.add("petal");

    petal.style.left = Math.random()*100+"vw";

    petal.style.animationDuration =
        (5 + Math.random()*6) + "s";

    petal.style.opacity =
        0.4 + Math.random();

    petal.style.transform =
        "scale("+(0.5+Math.random())+")";

    petalsContainer.appendChild(petal);

    setTimeout(()=>{

        petal.remove();

    },12000);

}

setInterval(createPetal,350);

// ===============================
// Fade Animation
// ===============================

const sections = document.querySelectorAll("section");

const observer = new IntersectionObserver(entries=>{

    entries.forEach(entry=>{

        if(entry.isIntersecting){

            entry.target.style.opacity="1";

            entry.target.style.transform="translateY(0)";

        }

    });

},{
    threshold:.15
});

sections.forEach(section=>{

    section.style.opacity="0";

    section.style.transform="translateY(60px)";
    section.style.transition=".9s ease";

    observer.observe(section);

});

// ===============================
// Gallery Lightbox
// ===============================

const galleryImages =
document.querySelectorAll(".gallery-grid img");

const lightbox=document.createElement("div");

lightbox.id="lightbox";

lightbox.innerHTML=`

<span id="closeLightbox">&times;</span>

<img id="lightboxImage">

`;

document.body.appendChild(lightbox);

const lightboxImage=
document.getElementById("lightboxImage");

galleryImages.forEach(img=>{

img.addEventListener("click",()=>{

lightbox.style.display="flex";

lightboxImage.src=img.src;

document.body.style.overflow="hidden";

});

});

lightbox.addEventListener("click",()=>{

lightbox.style.display="none";

document.body.style.overflow="auto";

});

// ===============================
// Lightbox Styles
// ===============================

const style=document.createElement("style");

style.innerHTML=`

#lightbox{

position:fixed;

inset:0;

background:rgba(0,0,0,.92);

display:none;

justify-content:center;

align-items:center;

z-index:99999;

cursor:pointer;

}

#lightbox img{

max-width:90%;

max-height:90%;

border-radius:18px;

box-shadow:0 20px 60px rgba(0,0,0,.5);

animation:zoomIn .35s;

}

#closeLightbox{

position:absolute;

top:30px;

right:40px;

font-size:50px;

color:white;

cursor:pointer;

}

@keyframes zoomIn{

from{

transform:scale(.8);

opacity:0;

}

to{

transform:scale(1);

opacity:1;

}

}

`;

document.head.appendChild(style);

// ===============================
// Smooth Scroll
// ===============================

document.querySelectorAll('a[href^="#"]').forEach(anchor=>{

anchor.addEventListener("click",function(e){

e.preventDefault();

document.querySelector(this.getAttribute("href"))

.scrollIntoView({

behavior:"smooth"

});

});

});

// ===============================
// Floating Sparkles
// ===============================

function sparkle(){

const star=document.createElement("div");

star.innerHTML="✨";

star.style.position="fixed";

star.style.left=Math.random()*100+"vw";

star.style.top="-20px";

star.style.fontSize=(12+Math.random()*15)+"px";

star.style.pointerEvents="none";

star.style.zIndex="5";

star.style.opacity=".9";

star.style.transition="8s linear";

document.body.appendChild(star);

setTimeout(()=>{

star.style.transform="translateY(120vh) rotate(360deg)";

star.style.opacity="0";

},50);

setTimeout(()=>{

star.remove();

},8000);

}

setInterval(sparkle,1200);

// ===============================
// Mouse Glow
// ===============================

const glow=document.createElement("div");

glow.style.position="fixed";

glow.style.width="180px";

glow.style.height="180px";

glow.style.borderRadius="50%";

glow.style.pointerEvents="none";

glow.style.background="radial-gradient(circle, rgba(255,215,120,.28), transparent 70%)";

glow.style.zIndex="2";

glow.style.transform="translate(-50%,-50%)";

document.body.appendChild(glow);

document.addEventListener("mousemove",(e)=>{

glow.style.left=e.clientX+"px";

glow.style.top=e.clientY+"px";

});

// ===============================
// Confetti Celebration
// ===============================

let fired=false;

window.addEventListener("scroll",()=>{

const footer=document.querySelector("footer");

const rect=footer.getBoundingClientRect();

if(rect.top<window.innerHeight && !fired){

fired=true;

celebrate();

}

});

function celebrate(){

for(let i=0;i<180;i++){

const conf=document.createElement("div");

conf.style.position="fixed";

conf.style.left=Math.random()*100+"vw";

conf.style.top="-20px";

conf.style.width="10px";

conf.style.height="10px";

conf.style.background=

`hsl(${Math.random()*360},100%,60%)`;

conf.style.zIndex="9999";

conf.style.pointerEvents="none";

conf.style.transition=

(4+Math.random()*2)+"s linear";

document.body.appendChild(conf);

setTimeout(()=>{

conf.style.transform=

`translateY(${window.innerHeight+100}px)
rotate(${720*Math.random()}deg)`;

conf.style.opacity="0";

},20);

setTimeout(()=>{

conf.remove();

},6000);

}

}
