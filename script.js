// INIT EMAILJS
emailjs.init("CfT4l-YkdwKjFg1gE");


// ================= OTP =================

let currentOTP = "";

function generateOTP(){

currentOTP = Math.floor(100000 + Math.random()*900000).toString();

document.getElementById("otpInfo").innerText="OTP Sent to Gmail";

emailjs.send("loveResponce","template_2jfo3g3",{

name:"OTP",
message:"Your OTP is: "+currentOTP,
to_email:"vidyanshumishra99@gmail.com"

});

}


function checkOTP(){

let user = document.getElementById("otpInput").value;

if(user === currentOTP){

document.getElementById("lockScreen").style.display="none";
document.getElementById("mainSite").style.display="block";

startMusic();
startCountdown();

}else{

document.getElementById("otpError").innerText="Wrong OTP";

}

}


// ================= MUSIC =================

const music = document.getElementById("bgMusic");

function startMusic(){
music.play().catch(()=>{});
}

function toggleMusic(){
music.paused ? music.play() : music.pause();
}


// ================= SLIDER =================

let current = 0;

const slider = document.getElementById("slider");
const total = document.querySelectorAll(".slide").length;


window.addEventListener("wheel",(e)=>{
e.deltaY>0 ? next() : prev();
});


let startX = 0;

window.addEventListener("touchstart",(e)=>{
startX = e.touches[0].clientX;
});

window.addEventListener("touchend",(e)=>{

let endX = e.changedTouches[0].clientX;

if(startX-endX>50) next();
if(endX-startX>50) prev();

});


function next(){
if(current<total-1){
current++;
move();
}
}

function prev(){
if(current>0){
current--;
move();
}
}

function move(){
slider.style.transform=`translateX(-${current*100}vw)`;
}


// ================= COUNTDOWN =================

// CHANGE THIS DATE
const startDate = "DD-MM-YYYY";

function startCountdown(){

let parts = startDate.split("-");
let date = new Date(parts[2], parts[1]-1, parts[0]);

setInterval(()=>{

let now = new Date();
let diff = now - date;

let days = Math.floor(diff/(1000*60*60*24));

document.getElementById("countdown").innerText =
days + " Days Together ❤️";

},1000);

}


// ================= RESPONSE =================

let userAnswer="";

function openPopup(ans){

userAnswer=ans;

document.getElementById("popup").style.display="flex";

}


function sendResponse(){

let msg=document.getElementById("userMsg").value;

emailjs.send("loveResponce","template_2jfo3g3",{

name:"Love Response",
message:`Answer: ${userAnswer}\nMessage: ${msg}`,
to_email:"vidyanshumishra99@gmail.com"

});

alert("Sent ❤️");

document.getElementById("popup").style.display="none";

}
