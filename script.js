/* ==========================================================
   ZAVIER MYLES INVITATION WEBSITE
   Version Ultimate
   script.js
   PART 1
========================================================== */

document.addEventListener("DOMContentLoaded", () => {

const loadingScreen =
document.getElementById("loading-screen");

const welcomeScreen =
document.getElementById("welcome-screen");

const website =
document.getElementById("website");

const openInvitation =
document.getElementById("openInvitation");

const musicButton =
document.getElementById("musicButton");

const bgMusic =
document.getElementById("bgMusic");

const backTop =
document.getElementById("backTop");

/* =====================================
   Loading Screen
===================================== */

setTimeout(() => {

loadingScreen.style.opacity = "0";

setTimeout(() => {

loadingScreen.style.display = "none";

},800);

},1800);

/* =====================================
   Open Invitation
===================================== */

openInvitation.addEventListener("click",()=>{

welcomeScreen.style.opacity="0";

setTimeout(()=>{

welcomeScreen.style.display="none";

website.style.display="block";

window.scrollTo({

top:0,

behavior:"smooth"

});

},700);

/* Attempt to autoplay music */

bgMusic.play().catch(()=>{

console.log("Autoplay prevented.");

});

});

/* =====================================
   Music Button
===================================== */

let musicPlaying=true;

musicButton.addEventListener("click",()=>{

if(bgMusic.paused){

bgMusic.play();

musicButton.textContent="🎵";

musicPlaying=true;

}else{

bgMusic.pause();

musicButton.textContent="🔇";

musicPlaying=false;

}

});

/* =====================================
   Back To Top
===================================== */

window.addEventListener("scroll",()=>{

if(window.scrollY>500){

backTop.style.display="flex";

}else{

backTop.style.display="none";

}

});

backTop.addEventListener("click",()=>{

window.scrollTo({

top:0,

behavior:"smooth"

});

});

/* =====================================
   Dynamic Greeting
===================================== */

const greeting =

document.getElementById(

"dynamicGreeting"

);

if(greeting){

const hour =

new Date().getHours();

let text="";

if(hour<12){

text="Good Morning!";

}

else if(hour<18){

text="Good Afternoon!";

}

else{

text="Good Evening!";

}

greeting.textContent=text;

}

/* End DOM Loaded */

});

/* =====================================
   LIVE COUNTDOWN
===================================== */

const eventDate = new Date(

"August 9, 2026 09:30:00"

).getTime();

const days =
document.getElementById("days");

const hours =
document.getElementById("hours");

const minutes =
document.getElementById("minutes");

const seconds =
document.getElementById("seconds");

function updateCountdown(){

const now = new Date().getTime();

const distance = eventDate - now;

if(distance <= 0){

if(days) days.textContent="00";
if(hours) hours.textContent="00";
if(minutes) minutes.textContent="00";
if(seconds) seconds.textContent="00";

return;

}

const d = Math.floor(

distance/(1000*60*60*24)

);

const h = Math.floor(

(distance%(1000*60*60*24))/

(1000*60*60)

);

const m = Math.floor(

(distance%(1000*60*60))/

(1000*60)

);

const s = Math.floor(

(distance%(1000*60))/

1000

);

if(days) days.textContent =
String(d).padStart(2,"0");

if(hours) hours.textContent =
String(h).padStart(2,"0");

if(minutes) minutes.textContent =
String(m).padStart(2,"0");

if(seconds) seconds.textContent =
String(s).padStart(2,"0");

}

updateCountdown();

setInterval(updateCountdown,1000);

/* =====================================
   SCROLL REVEAL
===================================== */

const revealElements =

document.querySelectorAll(

".glass-card, .summary-card, .timeline-item, .event-card, .parent-card, .dress-card"

);

revealElements.forEach(element=>{

element.classList.add("fade-up");

});

const observer =

new IntersectionObserver(

(entries)=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.classList.add("show");

}

});

},

{

threshold:0.15

}

);

revealElements.forEach(element=>{

observer.observe(element);

});

/* =====================================
   HERO PARALLAX
===================================== */

const heroBackground =

document.querySelector(

".hero-background"

);

window.addEventListener(

"scroll",

()=>{

if(!heroBackground) return;

const offset =

window.pageYOffset;

heroBackground.style.transform =

`translateY(${offset*0.25}px) scale(1.08)`;

}

);

/* =====================================
   SMOOTH SECTION LINKS
===================================== */

document

.querySelectorAll('a[href^="#"]')

.forEach(link=>{

link.addEventListener(

"click",

function(e){

const target =

document.querySelector(

this.getAttribute("href")

);

if(target){

e.preventDefault();

target.scrollIntoView({

behavior:"smooth",

block:"start"

});

}

}

);

});

/* =====================================
   BUTTON RIPPLE EFFECT
===================================== */

document

.querySelectorAll(

".primary-button, .secondary-button"

)

.forEach(button=>{

button.addEventListener(

"click",

function(e){

const ripple =

document.createElement("span");

const size =

Math.max(

this.clientWidth,

this.clientHeight

);

const rect =

this.getBoundingClientRect();

ripple.style.width=size+"px";
ripple.style.height=size+"px";

ripple.style.left=

e.clientX-rect.left-size/2+"px";

ripple.style.top=

e.clientY-rect.top-size/2+"px";

ripple.className="ripple";

this.appendChild(ripple);

setTimeout(()=>{

ripple.remove();

},600);

});

});

/* =====================================
   GODPARENT SEARCH
===================================== */

const godparentSearch =
document.getElementById("godparentSearch");

if(godparentSearch){

godparentSearch.addEventListener("keyup",function(){

const keyword =
this.value.toLowerCase();

document
.querySelectorAll(".godparent-list li")
.forEach(item=>{

const name =
item.textContent.toLowerCase();

item.style.display =
name.includes(keyword)
? "list-item"
: "none";

});

});

}

/* =====================================
   DIGITAL GUESTBOOK
===================================== */

const guestbookForm =
document.getElementById("guestbookForm");

const guestbookMessages =
document.getElementById("guestbookMessages");

let messages =

JSON.parse(

localStorage.getItem("zavierGuestbook")

)||[];

function renderGuestbook(){

if(!guestbookMessages) return;

guestbookMessages.innerHTML="";

messages.forEach(message=>{

const card=
document.createElement("div");

card.className="guest-message";

card.innerHTML=`

<h4>${message.name}</h4>

<p>${message.message}</p>

`;

guestbookMessages.appendChild(card);

});

}

renderGuestbook();

if(guestbookForm){

guestbookForm.addEventListener("submit",function(e){

e.preventDefault();

const name=

document
.getElementById("guestName")
.value.trim();

const message=

document
.getElementById("guestMessage")
.value.trim();

if(name===""||message==="") return;

messages.unshift({

name,

message

});

localStorage.setItem(

"zavierGuestbook",

JSON.stringify(messages)

);

renderGuestbook();

guestbookForm.reset();

alert("Thank you for leaving a message for Zavier Myles!");

});

}

/* =====================================
   SHARE INVITATION
===================================== */

function shareInvitation(){

const shareData={

title:

"Zavier Myles Baptism & First Birthday",

text:

"You're invited to celebrate the Baptism and First Birthday of Zavier Myles!",

url:

window.location.href

};

if(navigator.share){

navigator.share(shareData);

}else{

navigator.clipboard.writeText(

window.location.href

);

alert(

"Invitation link copied to clipboard."

);

}

}

const shareButton=

document.getElementById(

"shareInvitation"

);

if(shareButton){

shareButton.addEventListener(

"click",

shareInvitation

);

}

const footerShare=

document.getElementById(

"shareFooter"

);

if(footerShare){

footerShare.addEventListener(

"click",

shareInvitation

);

}

/* =====================================
   SAVE TO CALENDAR
===================================== */

const calendarButton=

document.getElementById(

"saveCalendar"

);

if(calendarButton){

calendarButton.addEventListener(

"click",

()=>{

const calendarFile=`BEGIN:VCALENDAR
VERSION:2.0
BEGIN:VEVENT
SUMMARY:Zavier Myles Baptism & First Birthday
DTSTART:20260809T013000Z
DTEND:20260809T070000Z
LOCATION:Our Lady of La Paz Parish Church, Makati City
DESCRIPTION:Join us as we celebrate Zavier Myles' Baptism and First Birthday.
END:VEVENT
END:VCALENDAR`;

const blob=

new Blob(

[calendarFile],

{

type:

"text/calendar"

}

);

const link=

document.createElement("a");

link.href=

URL.createObjectURL(blob);

link.download=

"Zavier_Myles_Invitation.ics";

link.click();

});

}

/* =====================================
   GALLERY LIGHTBOX
===================================== */

document

.querySelectorAll(

".gallery-grid img, .featured-photo img"

)

.forEach(image=>{

image.addEventListener(

"click",

()=>{

const overlay=

document.createElement("div");

overlay.style.position="fixed";
overlay.style.inset="0";
overlay.style.background="rgba(0,0,0,.9)";
overlay.style.display="flex";
overlay.style.alignItems="center";
overlay.style.justifyContent="center";
overlay.style.zIndex="99999";
overlay.style.cursor="zoom-out";

const img=

document.createElement("img");

img.src=image.src;

img.style.maxWidth="90%";
img.style.maxHeight="90%";
img.style.borderRadius="20px";
img.style.boxShadow="0 25px 70px rgba(0,0,0,.45)";

overlay.appendChild(img);

overlay.addEventListener(

"click",

()=>{

overlay.remove();

});

document.body.appendChild(

overlay

);

});

});

/* =====================================
   MAIN BACK TO TOP BUTTON
===================================== */

const backTopMain = document.getElementById("backTopMain");

if (backTopMain) {

    backTopMain.addEventListener("click", function (e) {

        e.preventDefault();

        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });

    });

}
/* =====================================
   END OF SCRIPT
===================================== */