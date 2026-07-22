/* =====================================
   BABY Z INVITATION
   Premium Script
===================================== */

document.addEventListener("DOMContentLoaded", () => {

const intro = document.getElementById("intro");
const enterButton = document.getElementById("enterButton");

/* -----------------------------
   OPEN INVITATION
----------------------------- */

enterButton.addEventListener("click", () => {

    intro.style.opacity = "0";

    intro.style.pointerEvents = "none";

    setTimeout(() => {

        intro.style.display = "none";

    },900);

});

/* -----------------------------
   SCROLL REVEAL
----------------------------- */

const cards = document.querySelectorAll(

".card,.section h2,.gallery img,.hero-overlay"

);

const observer = new IntersectionObserver(

(entries)=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.classList.add("show");

}

});

},

{

threshold:.15

}

);

cards.forEach(card=>{

card.classList.add("fade");

observer.observe(card);

});

});/* =====================================
   LIVE COUNTDOWN
===================================== */

const targetDate = new Date("August 9, 2026 09:30:00").getTime();

function updateCountdown(){

const now = new Date().getTime();

const distance = targetDate - now;

if(distance <= 0){

document.getElementById("days").innerHTML="0";
document.getElementById("hours").innerHTML="0";
document.getElementById("minutes").innerHTML="0";
document.getElementById("seconds").innerHTML="0";

return;

}

const days=Math.floor(distance/(1000*60*60*24));

const hours=Math.floor((distance%(1000*60*60*24))/(1000*60*60));

const minutes=Math.floor((distance%(1000*60*60))/(1000*60));

const seconds=Math.floor((distance%(1000*60))/1000);

document.getElementById("days").innerHTML=days;
document.getElementById("hours").innerHTML=hours;
document.getElementById("minutes").innerHTML=minutes;
document.getElementById("seconds").innerHTML=seconds;

}

updateCountdown();

setInterval(updateCountdown,1000);

/* =====================================
   COUNTDOWN PULSE
===================================== */

const boxes=document.querySelectorAll(".time-box");

setInterval(()=>{

boxes.forEach(box=>{

box.animate([

{
transform:"scale(1)"
},

{
transform:"scale(1.05)"
},

{
transform:"scale(1)"
}

],{

duration:700

});

});

},1000);

/* =====================================
   FLOATING SUNLIGHT PARTICLES
===================================== */

function createParticle(){

const particle=document.createElement("div");

particle.className="particle";

particle.style.left=Math.random()*100+"vw";

particle.style.animationDuration=
(8+Math.random()*6)+"s";

particle.style.opacity=
Math.random();

particle.style.width=
(6+Math.random()*10)+"px";

particle.style.height=
particle.style.width;

document.body.appendChild(particle);

setTimeout(()=>{

particle.remove();

},15000);

}

setInterval(createParticle,700);

/* =====================================
   PARALLAX HERO
===================================== */

window.addEventListener("scroll",()=>{

const hero=document.querySelector(".hero");

let offset=window.pageYOffset;

hero.style.backgroundPositionY=(offset*0.4)+"px";

});/* =====================================
   SHARE INVITATION
===================================== */

const shareButton = document.getElementById("shareButton");

if(shareButton){

shareButton.addEventListener("click",async()=>{

if(navigator.share){

try{

await navigator.share({

title:"Baby Z Baptism & First Birthday",

text:"You're invited to Baby Z's Baptism & First Birthday!",

url:window.location.href

});

}catch(e){}

}else{

navigator.clipboard.writeText(window.location.href);

alert("Invitation link copied!");

}

});

}

/* =====================================
   GALLERY LIGHTBOX
===================================== */

const galleryImages=document.querySelectorAll(".gallery img");

const overlay=document.createElement("div");

overlay.id="lightbox";

overlay.innerHTML="<img>";

document.body.appendChild(overlay);

const preview=overlay.querySelector("img");

galleryImages.forEach(img=>{

img.addEventListener("click",()=>{

preview.src=img.src;

overlay.classList.add("show");

});

});

overlay.addEventListener("click",()=>{

overlay.classList.remove("show");

});

/* =====================================
   QR CODE ZOOM
===================================== */

const qr=document.querySelector(".qr-image");

if(qr){

qr.addEventListener("click",()=>{

preview.src=qr.src;

overlay.classList.add("show");

});

}

/* =====================================
   GOLDEN CONFETTI
===================================== */

const introButton=document.getElementById("enterButton");

introButton.addEventListener("click",()=>{

for(let i=0;i<50;i++){

const confetti=document.createElement("div");

confetti.className="confetti";

confetti.style.left=Math.random()*100+"vw";

confetti.style.background=

Math.random()>.5?

"#FFD54F":

"#FFF8DC";

confetti.style.animationDuration=

(3+Math.random()*3)+"s";

document.body.appendChild(confetti);

setTimeout(()=>{

confetti.remove();

},6000);

}

});

/* =====================================
   ENDING MESSAGE
===================================== */

const footer=document.querySelector("footer");

const endObserver=new IntersectionObserver(entries=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

footer.animate([

{

opacity:.3,

transform:"translateY(40px)"

},

{

opacity:1,

transform:"translateY(0)"

}

],{

duration:1200,

fill:"forwards"

});

}

});

});

endObserver.observe(footer);