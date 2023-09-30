import './style.css';
import log1 from './home.js';
import log2 from './menu.js';
import log3 from './contact.js';
import { clearLayout as clearLayoutHome, layout as layoutHome } from './home.js';
import { clearLayout as clearLayoutMenu,layout as layoutMenu } from './menu.js';
import { clearLayout as clearLayoutContact,layout as layoutContact } from './contact.js';

console.log("Hello, Hi, welcome!");

const homeBtn = document.createElement("button");
const menuBtn = document.createElement("button");
const contactBtn = document.createElement("button");

const layout = document.createElement("header");

const body = document.querySelector("body");

homeBtn.textContent = "HOME";
homeBtn.classList.add("active");
menuBtn.textContent = "MENU";
contactBtn.textContent = "CONTACT";


layout.appendChild(homeBtn);
layout.appendChild(menuBtn);
layout.appendChild(contactBtn);

const footer = document.createElement("footer");
body.appendChild(layout);
body.appendChild(footer);




const btns = document.querySelectorAll("button");
layoutHome();

homeBtn.addEventListener("click", (e) => {
    if (e.target.classList.value == "active") return;

    clearLayoutContact();
    clearLayoutMenu();

    let activeBtn = document.querySelector(".active");
    activeBtn.classList.remove('active');
    
    layoutHome();
    e.target.classList.add('active');
});

menuBtn.addEventListener("click", (e) => {
    if (e.target.classList.value == "active") return;

    clearLayoutHome();
    clearLayoutContact();

    let activeBtn = document.querySelector(".active");
    activeBtn.classList.remove('active');
    
    layoutMenu();
    e.target.classList.add('active');
});

contactBtn.addEventListener("click", (e) => {
    if (e.target.classList.value == "active") return;

    clearLayoutHome();
    clearLayoutMenu();

    let activeBtn = document.querySelector(".active");
    activeBtn.classList.remove('active');
    
    layoutContact();
    e.target.classList.add('active');
});

btns.forEach((btn) => {
    console.log(btn.textContent);
});

log1();
log2();
log3();