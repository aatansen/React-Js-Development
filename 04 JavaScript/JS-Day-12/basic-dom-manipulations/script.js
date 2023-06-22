"use strict";
// DOM manipulations

// 1. selecting elements 
// 2. styling elements 
// 3. creating elements 
// 4. node traversals 
// 5. event handlers 

// 1. selecting elements 
//id -- fast / rarely
const title = document.getElementById("main-heading");
const secondTitle = document.getElementById("second-heading");
console.log(title);
console.log(secondTitle);

// class
const country = document.getElementsByClassName("country");
console.log(country);

// tag name 
const input = document.getElementsByTagName("input");
console.log(input);

// Quary selector -- mostly used
const title2 = document.querySelector("#main-heading"); //id
console.log(title2);
const btn = document.querySelector(".btn"); //class
console.log(btn);
const h2 = document.querySelector("h2"); //tag
console.log(h2);


// Quary selector all
const country2 = document.querySelectorAll(".country");
console.log(country2);


// 2. styling elements 
const title3 = document.querySelector("#main-heading");
title3.style.color = "crimson";
title3.style.backgroundColor = "black";
title3.style.fontSize = "3rem";

const countries = document.querySelectorAll(".country");
for (let i = 0; i < countries.length; i++) {
    countries[i].style.color = "hotpink";
    countries[i].style.fontSize = "2rem";
}

// 3. creating elements 
const ul = document.querySelector("ul");

const li = document.createElement("li");
li.textContent = "India";

//append

// ul.append(li)
// ul.appendChild(li)
// ul.insertAdjacentElement('afterbegin',li)
ul.insertAdjacentElement('beforeend', li);

const firstCountry = document.querySelector(".country");
firstCountry.textContent = "BD";
console.log(firstCountry);

// set attribute 
const h1 = document.querySelector("#main-heading");
h1.setAttribute("class", "main-headline");
h1.setAttribute("width", "300px");
h1.removeAttribute("class");
h1.removeAttribute("width");

// class 
h1.classList.add("main-heading", "first-country");
h1.classList.remove("main-heading");

const a = 10;
if (a === 10) h1.classList.toggle("main-heading");


// 4. node traversals 
const ul2 = document.querySelector("ul");
console.log(ul2.parentElement);
console.log(ul2.parentNode);
console.log(ul2.childNodes);
console.log(ul2.children);


// 5. event handlers (it will be added on button where clicked) - higher order function (which can take callback function as argument)
const btn2 = document.querySelector(".btn");
const input2 = document.querySelector(".input");
const ul3 = document.querySelector("ul");

btn2.addEventListener('click', function () {
    const li = document.createElement("li");
    li.classList.add("country");
    li.textContent = input2.value; //always string
    ul.append(li);
    input2.value = "";
})



























