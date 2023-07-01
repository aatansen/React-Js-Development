<details>
<summary>JS-Day-01</summary>

### Topic:

- Setting Up Your Code Editor
- Introduction to JavaScript
- Linking a JavaScript File
- Variables
- Problem - 01:
- Data Types
- let, const and var
- Basic Operators
- Operator Precedence
- Problem - 02

### Linking JS file:

- normally at the end of body
- but sometimes required at top

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    
    <script src="./script.js"></script>
</body>
</html>
```

### Variable Naming

- variable naming should not start with Capital or any keyword

```jsx
// let Person = "Almin";
// let function = 10;
```

JavaScript has two main types of data: primitive and complex.

### JavaScript has six primitive data types:

- Boolean
- Null
- Undefined
- Number
- String
- Symbol (added in ECMAScript 6)

### Complex data types are:

- Object
- Array
- Function
- Date
- RegExp
- Error
- Map
- Set
- WeakMap
- WeakSet
- ArrayBuffer
- SharedArrayBuffer
- DataView
- Typed Arrays

### Re-assign or mutate (let)

```jsx
let isJsFun;
console.log(isJsFun)

// re-assign or mutate 
isJsFun = true;
console.log(isJsFun);
```

### If a variable declare with cost it can’t be undefined and it cant be re-assign

```jsx
const isJsFun; //error
```

### Variable should not declare without keyword

```jsx
name = "Tansen"; //should not use like this when declaring
```

</details>

<details>
<summary>JS-Day-02</summary>
    
### Topic:

- Different Operations in JS

### Math Operations

```jsx
const currentYear = 2023;
const ageTumpa = currentYear - 1998;
const ageRahat = currentYear - 1996;
console.log(ageTumpa, ageRahat);
```

### String operation

```jsx
const first_name = "Alahi";
const last_name = "Tansen";
console.log(first_name + " " + last_name);

const bikeBrand = "Yamaha";
const bikeModel = "MT5";
const fullBikeName = bikeBrand + " " + bikeModel;
console.log(fullBikeName);
```

### Assignment operator

```jsx
let number = 20 + 10;
number = number + 5;
number -= 10;
console.log(number);
```

### Operator precedence

```jsx
console.log(2023>2002+16);
```

### Template literals

```jsx
const name = "Tansen"
const age=21
const job="student"
const bio="My name is "+name+"."+" I am "+age+" years old."+"I am a "+job+"."
console.log(bio);

//now with template literals
const bio2=`My name is ${name}. I am ${age} years old.I am a ${job}.`
console.log(bio2);
console.log(`I
am 
Tansen`);
```

### Conditionals or control structure

```jsx
const birthYear=1995;
if(birthYear<=1999){
console.log("You are a 90's kid");
}else{
console.log("You are not a 90's kid");
}
```

### Type conversion(manually) and coercion(automatically)

```jsx
const inputYear=1995
console.log(inputYear+10);

const inputYear2="1995"
console.log(inputYear2+10); //coercion(automatically) 10 will become string

console.log(inputYear2-10); //coercion(automatically) 10 will become number
```

### Game

```jsx
let a="1"+1
a-=1
console.log(a);
```

</details>

<details>
<summary>JS-Day-03</summary>

### Topic:

- Truthy and Falsy Value
- Equality operators
- Condition
- AND OR
- Switch Case
- Ternary operator

### Truthy & Falsy Value

- There are 5 falsy value
    - `0`
    - `””`
    - `undefined`
    - `null`
    - `NaN`

```jsx
// Truthy & Falsy Value
console.log(Boolean(0));
console.log(Boolean(""));
console.log(Boolean(undefined));
console.log(Boolean(null));
console.log(Boolean(NaN));
console.log(Boolean(1));
```

- All others are Truthy value

### Equality operators

- `=` —> Assign
- `==` or `===` —> equality
- `! =` or `! ==` —> not equal
- JS doesn’t type coercion, strict
- All time use `===` , it will check strictly

```jsx
// Equality operators
const age = "20";
if (age === 20) {
    console.log("You are adult"); //when "=="
} else {
    console.log("You are too young"); //when "==="
}
```

### Nested Condition

when inside a condition and it does not match it will stop there or `else` will execute if `else` is define

```jsx
if (testAge === 18) {
    if (testNID) {
        if (testPassport) {
            console.log(`your age: ${testAge}, applicable for this job.`);
        }
    } else {
        console.log(`Absent!`);
    }

} else if (testAge !== 18) {
    if (testBirthReg) {
        console.log(`your age: ${testAge}, and you're note applicable. `);
    } else {
        console.log(`Absent!`);
    }
} else {
    console.log(`Absent!`);
}
```

### Leap year (AND OR)

```jsx
let year = 2024;
if (year % 400 === 0 || (year % 4 === 0 && year % 100 !== 0)) {
    console.log(`${year} is a leap year.`);
} else {
    console.log(`${year} is not a leap year.`);
}
```

### Switch case

```jsx
const day = "sunday";

switch (day) {
    case "saturday":
        console.log("No Class!");
        break;
    case "sunday":
        console.log("Class!!");
        break;
    case "monday":
        console.log("No Class");
        break;
    case "tuesday":
    case "wednesday":
        console.log("No Class!!");
        break;
    case "thursday":
    case "friday":
        console.log("Class!!");
        break;
    default:
        console.log("Not a valid day");
        break;
}
```

### Ternary Operator

```jsx
const a=2;
const b=3;
let c;

a>b?c=a+b : c=b-a;
console.log(c);
```

</details>

<details>
<summary>JS-Day-03-Exam</summary>

### Type Conversion vs Type Coercion

```jsx
// Type conversion - Manual conversion
const myNumber = "10"
console.log(Number(myNumber));

// Type coercion -  Automatic conversion
const myNumber2 = "10"
console.log(myNumber2 / 2);
```

### if.. else if.. else

- Single condition execute

### if.. if.. else

- Multiple condition execute

### Undefined vs Null

- `let age;` —> undefined
- `let age = null;` —> Null (show as object)

</details>

<details>
<summary>JS-Day-04</summary>

### Topic:

- Strict mode
- Function in JS

### Strict mode

```jsx
"use strict";

const private =20;
const interface = "audio"
console.log(private);
```

### Function: 3 ways of creating function

- Function declarations
- Function expressions
- Arrow function

Function declarations

```jsx
function sumTwo(num1,num2){
    const sum = num1+num2
    console.log(sum);
}
sumTwo(3,4)
```

</details>

<details>
<summary>JS-Day-05</summary>

### Topic:

- Three way of creating function

### Function declarations

```jsx
// function declarations
function addThreeNum(num1, num2, num3) {
    const sum = num1 + num2 + num3;
    console.log(sum);
}
addThreeNum(2, 3, 4);
```

### Function expressions

```
// function expression
const juiceFactory = function (apples,oranges){
    const juice = (apples*oranges)/2
    return `${juice} Juice is ready using ${apples} apples and ${oranges} oranges. 🥤`
}
console.log(juiceFactory(10,20));
```

### Arrow function

```jsx
// arrow functions
const addTwoNum = (num1, num2) =>{
    const sum = num1 + num2;
    console.log(sum);
}
addTwoNum(2, 3);

const ageCalc = (birthYear)=>2023-birthYear;
console.log(ageCalc(2001));

const heroMaker = (heroAge,heroSkill)=>{
    if (heroAge>=18 && heroSkill){
        return "You can be a hero."
    }else{
        return "You can't be a hero"
    }
}
console.log(heroMaker(21,true));
```

</details>

<details>
<summary>JS-Day-06</summary>

### Topic:

- Function calling function

### Function calling function

```jsx
function technicalTest(ramF,cpuC){
    const dramState = ramFreqTest(ramF)
    const cpuState = cpuTurbo(cpuC)
    return `${dramState} and ${cpuState}`

}

console.log(technicalTest(2400,1.8));

function ramFreqTest(ramFreq){
    return ramFreq>=2620?"DDR4":"DDR3"
}

function cpuTurbo(cpuClock){
    return cpuClock>=3.1?"1800rpm":"1400rpm"
}
```

</details>

<details>
<summary>JS-Day-07</summary>

### Topic:

- Array
- Array methods
- Function revision
- Side effect calculation
- Currying function
- Anonymous function
- Objects

### Two way of creating array

- Literal syntax
- Array function

```jsx
// array (literal systax)
const friend = ['Shohan', 'Badhon', 'Eklas', 'Nasim'];

const years = [1991, 1993, 1995, 1999];

// array (array function)
const years2 = new Array(2001, 2003, 2005, 2009);
```

### Array methods

```jsx
// array length 
console.log(friend.length);

// push - add element at the end
const lastBenchers = ['Shohan', 'Shuvo', 'Abdullah', 'Fahim'];

lastBenchers.push('Abir');

console.log(lastBenchers);

// unshift - add element at the beginning
lastBenchers.unshift('Tansen');
console.log(lastBenchers);

// pop - remove element at the end
lastBenchers.pop();
console.log(lastBenchers);

// shift - remove element at the beginning
lastBenchers.shift();
console.log(lastBenchers);

// indexOf - finding element by name 
console.log(lastBenchers.indexOf('Shuvo'));

// includes - if it present in array or not boolean
console.log(lastBenchers.includes('Tansen'));
```

### Currying Array

```jsx
// currying function
function  multi(a){
    return function(b){
        return function(c){
            return function(d){
                return function(e){
                    return a*b*c*d*e
                }
            }
        }
    }
}

console.log(multi(5)(4)(3)(2)(1));
```

### Currying function to arrow function (lambda function)

```jsx
// lamda calculus or lamda function declarations
const multiPro = (a) => (b) => (c) => (d) => (e) => a * b * c * d * e;
console.log(multiPro(5)(4)(3)(2)(1));
```

### Object

```jsx
//object
const student = {
    firstName : "Arafat",
    lastName : "Rahman",
    age:19,
    job:"Programmer",
    firends:["Rahim","Karim","Nishi"],
    isGoodAtGame:true,
}
// finding properties using two methods (dot and bracket)

console.log(student.age);
console.log(student.firends[2]);

console.log(student["firstName"]);
```

</details>

<details>
<summary>JS-Day-08</summary>

### Topic:

- Array revision
- Mutate (reassign)
- Creating object
- Creating method
- This
- Reference
- For loop
- continue - break
- loop inside a loop
- while loop

### Array Revision

```jsx
// array literal
const odd = [1, 3, 5, 7, 9];
console.log(odd);

// array function
const even = new Array(2, 4, 6, 8);
console.log(even);

console.log(odd[3]);
console.log(even[3]);

console.log(odd.length);
console.log(odd[odd.length - 1]);
```

### Mutate (reassign)

```jsx
// mutate
const odd = [1, 3, 5, 7, 9];
odd[2] = 55;
console.log(odd);
```

### Object creating

```jsx
const student = {
    firstName: "Nesnat",
    lastName: "Ahmad",
    birthYear: 2001,

    calcAge: function () {
        return 2023 - student.birthYear; //what if student name changed? so this can be used to solve that problem
    },
};
console.log(student.calcAge());
```

### Method & This

```jsx
const student2 = {
    firstName: "Nesnat",
    lastName: "Ahmad",
    birthYear: 2005,

    calcAge: function () {
        return 2023 - this.birthYear; //using this
    },
    greetings: function () {
        return `Hello, ${this.firstName}`;
    },
};
console.log(student2.calcAge());
console.log(student2.greetings());
```

### For Loop

```jsx
// for loop
for (let i = 1; i <= 20; i++) {
    console.log(`Step ${i}`);
}

const namesArray = ["Alice", "Bob", "Charlie", "David", "Emma", "Frank", "Grace",
    ["Mina", "Tina", "Rina", "Parina"],
    true,
    "Dancer"
];
for (let i = 0; i < namesArray.length; i++) {
    console.log(namesArray[i]);
}

const evenNumbers = [2, 4, 6, 8, 10, 12, 14, 16, 18, 20];
let sum = 0;
for (let i = 0; i < evenNumbers.length; i++) {
    sum += evenNumbers[i];
}
console.log(sum);

const arr = [10, true, 21, "a", "b", false, 55, true, "x"];
const arr2 = [];

for (let i = 0; i < arr.length; i++) {
    arr2.push(arr[i]);
}
console.log(arr2);

const years = [1994, 1996, 1998, 2001, 1993, 1995];

const ages = [];

for (let i = 0; i < years.length; i++) {
    ages.push(2023 - years[i]);
}
console.log(ages);
```

### continue and break

```jsx
console.log("Continue");
for (let i = 0; i < arr.length; i++) {
    if (typeof arr[i] === "string") {
        continue;
    }
    console.log(arr[i], typeof arr[i]);
}

console.log("Break");
for (let i = 0; i < arr.length; i++) {
    if (typeof arr[i] === "string") {
        break;
    }
    console.log(arr[i], typeof arr[i]);
}
```

### loop inside a loop

```jsx
for (let i = 1; i <= 10; i++) {
    console.log(`Step ----------- ${i}`);
    for (let j = 1; j <= i; j++) {
        console.log(`Run --${j}`);
    }
}

// Star pattern 
let n = 5;
let star = "";
for (let row = 1; row <= n; row++) {
    for (let col = 1; col <= n; col++) {

        star += "*";
    }
    star += "\n";
}
console.log(star);
```

### While Loop

```jsx
// while loop 
let i=0
const arr3 = [10,20,30,40,50]
while(i<arr3.length){
    console.log(arr3[i]);
    i++
}
```

</details>

<details>
<summary>JS-Day-09</summary>

### Topic:

- JavaScript Fundamental Recap
- Previous (01 - 08) day revision

</details>

<details>
<summary>JS-Day-10</summary>

### Topic:

- NodeJS installation
- Live server
- Think as a programmer
- Debug a program
- JavaScript definition
- Features of JS
- JS Engines
- V8 Engine

### NodeJS installation

### Live server

install live-server

```jsx
npm install live-server -g
```

run live server

```jsx
live-server
```

### Think as a programmer

- Define problem
- What is the input and output of that problem
- What I need to solve that problem

```jsx
// given an array of positive numbers "arr", find total sum of all elements

// strategy:
//input array / posivite integer >0 / arr 
//output : sum / all elements from the array
//1. declare a container
//2. read all element for loop
//3. container that will hold the sum

function summation(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    return sum;
}

const arr = [5,2,4,1,3,5,6,9]

console.log(summation(arr));
```

### JavaScript definition

Simple definition

> JavaScript is a high level object oriented interpreted multi paradigm programming language.
> 

Brief definition

> JavaScript is a high level, prototype based, object oriented, multi-paradigm, interpreted or just-in-time (JIT) compiled, dynamic, single threaded, garbage collected, programming language with first class functions and non-blocking event loop concurrency model.
> 

### Features of JS

1. `High-level`: JavaScript is a high-level programming language, which means that it provides abstractions and features that simplify programming and hide low-level details from the programmer.
2. `Prototype-based`: JavaScript uses a prototype-based inheritance model, where objects inherit properties and methods from other objects. This allows for easy reuse and extensibility of existing code.
3. `Object-oriented`: JavaScript supports object-oriented programming (OOP) concepts like encapsulation, inheritance, and polymorphism through its prototype-based approach.
4. `Multi-paradigm`: JavaScript is a multi-paradigm language, which means that it supports several different programming styles, including object-oriented, functional, and imperative programming.
    
    Procedural Programming:
    
    - Based on the concept of procedures or routines that perform specific tasks.
    - Uses a step-by-step approach to problem-solving.
    - Focuses on solving problems through procedures or functions that operate on data.
    - Does not emphasize the use of objects and classes.
    
    Object-Oriented Programming (OOP):
    
    - Based on the concept of objects, which can contain data and methods to operate on that data.
    - Encapsulates data and behavior within objects, promoting modularity and code reusability.
    - Emphasizes concepts like inheritance, polymorphism, and encapsulation.
    - Allows for the creation of complex applications by breaking them down into smaller, more manageable objects.
    
    Functional Programming:
    
    - Based on the concept of functions, which are used to transform data and solve problems.
    - Treats computation as the evaluation of mathematical functions and avoids changing state and mutable data.
    - Emphasizes immutability, purity, and higher-order functions.
    - Promotes the creation of small, reusable functions that can be composed together to solve larger problems.
5. `Interpreted or JIT compiled`: JavaScript can be either interpreted, meaning that code is executed on-the-fly, or just-in-time (JIT) compiled, where code is compiled at runtime for faster execution.
6. `Dynamic`: JavaScript is a dynamically-typed language, which means that variables can change types at runtime, making it easier to write flexible code.
7. `Single-threaded`: JavaScript is single-threaded, meaning that it only has one execution thread.
8. `Garbage-collected`: JavaScript automatically manages memory using garbage collection, which frees up memory for objects that are no longer being used.
9. `First-class functions`: Functions in JavaScript are first-class citizens, which means that they can be passed around as arguments and returned from other functions like any other value.
10. `Blocking event loop concurrency model`: JavaScript uses a non-blocking event loop concurrency model, which allows for asynchronous programming using callbacks, promises, and async/await. This means that long-running tasks can be executed in the background without blocking the main thread.

### JS Engines

- `V8`: This is Google's high-performance JavaScript engine which is used in the Chrome web browser and Node.js.
- `SpiderMonkey`: This is Mozilla's JavaScript engine which is used in Firefox web browser and various other Mozilla projects, Brave browser.
- `JavaScriptCore`: This is Apple's JavaScript engine which is used in Safari web browser, as well as other Apple products like macOS and iOS.
- `Chakra`: This is Microsoft's JavaScript engine which is used in Edge web browser and various other Microsoft products.
- `Nashorn`: This is Oracle's JavaScript engine which is used in Java Virtual Machine (JVM) for executing JavaScript code.
- `Rhino`: This is an open-source JavaScript engine written in Java, developed by the Mozilla Foundation. It is used in various web application servers, such as Apache Tomcat.
- `Duktape`: This is a lightweight, embeddable JavaScript engine written in C. It is often used in embedded systems or IoT devices.
- `JerryScript`: This is another lightweight, embeddable JavaScript engine written in C. It is specifically designed for resource-constrained devices and is used in many IoT applications

### V8 Engine

- `Call Stack`: The call stack is a data structure used to keep track of function calls in a program. When a function is called, a new frame is added to the top of the call stack to represent that function's execution context. As functions return, their frames are removed from the stack.
- `Heap`: The heap is the memory area where objects are allocated and stored in a JavaScript program. The V8 engine uses a generational garbage collector to manage the heap. Objects that are no longer referenced by the program are automatically marked for garbage collection and their memory is reclaimed.
- `Function Execution`: When a function is executed in V8, a new frame is added to the call stack with the function's local variables and arguments. As the function executes, it may create new objects that are stored in the heap. When the function returns, its frame is removed from the stack and any objects it created are eligible for garbage collection if they are no longer referenced.
- `Memory Management`: V8 manages memory allocation using a combination of stack and heap memory. Stack memory is used to store primitive data types like numbers and Booleans as well as function call frames. Heap memory is used to store larger objects and data structures like arrays and objects.

</details>

<details>
<summary>JS-Day-11</summary>

### Topic:

- Scoping
- Scope chain
- Hosting
- Temporal Dead Zone(TDZ)
- This keyword
- Referencing the same memory when copying

### Scoping

Space or area or environment in which a certain variable is declared

- Global scope
- Function scope
- Block scope

Global scope

```jsx
const herName = "Tumpa"; //global scope
```

Function scope

```jsx
function doMath(x, y) {
    const sum = x + y; // function scope 
    return sum;
}
```

Function scope as block scope

If use `use strict` all function will be block scope

```jsx
"use strict"
function doMath(x, y) {
    const sum = x + y; // block scope 
    return sum;
}
console.log(doMath(2, 3));
```

Block scope

```jsx
if (herName === "Tumpa") {
    const herName = "Rebecca"; //block scope
    console.log(herName);
} else {
    console.log(herName);
}
```

### Scope chain

- `Scope` - Space or area or environment in which a certain variable is declared
- `Scope of a variable`  - Where the variable is being access, accessible area of that variable
- `var` is function scope
- Every Scope connected through chain.
- Scope chain works —> child to  parent
- Parent function can’t access child variable
- Child variable can access parent variable (inner to outer)

### Hoisting

Accessing variable right before its declaration

- function declaration
- var variable

`let`,`const` not hoisting supported , It is Temporal Dead Zone(TDZ) when trying to accessing variable right before its declaration.

Temporal Dead Zone(TDZ) Level:

TDZ level 0:

```jsx
function second() {
        const job = "Programmer";
        console.log(`${myName} is a ${age} years old ${job}.`);
    }
```

TDZ level 01:

```jsx
function second() {
        console.log(1);
        const job = "Programmer";
        console.log(`${myName} is a ${age} years old ${job}.`);
    }
```

TDZ level 02:

```jsx
function second() {
        console.log(1);
        console.log(2);
        const job = "Programmer";
        console.log(`${myName} is a ${age} years old ${job}.`);
    }
```

TDZ level n:

```jsx
function second() {
        console.log(1);
        console.log(2);
        const job = "Programmer";
        console.log(`${myName} is a ${age} years old ${job}.`);
    }
```

TDZ level when there is function:

```jsx
function second() {
        function five(){
            console.log(2n^3);
        }
        function four(){
            console.log(2n^2);
        }
        function third){
            console.log(2n^1);
        }
        const job = "Programmer";
        console.log(`${myName} is a ${age} years old ${job}.`);
    }
```

### This keyword

What ever object is calling by `calAge` , `this` will follow that

```jsx
const tumpaObj = {
    fullName :"Tumpa",
    birthYear :1996,

    calAge: function(){
        console.log(this);
       return 2023 - this.birthYear
    },

};
console.log(tumpaObj.calAge());
console.log(this);
```

### Referencing the same memory when copying

`sabrinaObj.fullName` is changed but `tumpaObj.fullName` also gonna change

```jsx
const tumpaObj = {
    fullName :"Tumpa",
    birthYear :1996,

    calAge: function(){
        
       return 2023 - this.birthYear
    },

};
const sabrinaObj = tumpaObj
sabrinaObj.fullName = "Sabrina"
console.log(sabrinaObj,tumpaObj);
```

Arrow function does not have this keyword functionalities

```jsx
const computer = {
    clockSpeed: 3.9,

    // turboFan: function () {
        // console.log(this);
    //     return this.clockSpeed * 99;
    // },
    turboFan: () => {
        console.log(this); // this will ppoint to window
        return this.clockSpeed * 99;
    },
};

console.log(computer.turboFan());
```

</details>

<details>
<summary>JS-Day-12</summary>

### Topic:

- Closures
- DOM tree
- DOM manipulation

### Closures

A closure gives a function access to all variables of its parent function, even after that fuinction has returned.

```jsx
function regrigerator() {
    let coke = 6;

    return function() {
        coke--;
        console.log(`${coke} coke`);
    };
}
const drink = regrigerator();
drink()
```

### DOM manipulation

- Selecting elements
- Styling elements
- Creating elements
- Node traversals
- Event handlers

Selecting elements 

```jsx
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
```

Styling elements 

```jsx
/ 2. styling elements 
const title3 = document.querySelector("#main-heading");
title3.style.color = "crimson";
title3.style.backgroundColor = "black";
title3.style.fontSize = "3rem";

const countries = document.querySelectorAll(".country");
for (let i = 0; i < countries.length; i++) {
    countries[i].style.color = "hotpink";
    countries[i].style.fontSize = "2rem";
}
```

Creating elements 

```jsx
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
```

Node traversals

```jsx
/ 4. node traversals 
const ul2 = document.querySelector("ul");
console.log(ul2.parentElement);
console.log(ul2.parentNode);
console.log(ul2.childNodes);
console.log(ul2.children);
```

Event handlers (it will be added on button where clicked) - higher order function (which can take callback function as argument)

```jsx
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
```

</details>

<details>
<summary>JS-Day-13</summary>

### Topic:

- DOM simple project
    - Modal window project
    - Guess my number project

</details>

<details>
<summary>JS-Day-14</summary>

### Topic:

- Data Structures & EXNEXT & Modern operators
- Destructuring arrays
- Switching variable
- Store return value
- Nested destructuring
- Default values
- Destructuring object
- Changing object name
- Object default value
- Mutating variables
- Nested object
- Spread operators
- Copying object

### Notes

- Iterables: `arrays`,`strings`,`maps`,`sets`
- Not iterable : `objects`
- Map : There are two map, map it self is data structure and map array method

### Destructuring arrays

```jsx
// destructuring arrays 
// old way
const arr = [1, 2, 3];
const a = arr[0];
const b = arr[1];
const c = arr[2];

// new way 
const [x, y, z] = arr;
console.log(x, y, z);

const arr2 = [5, 6, 7];
const [m, n, o] = arr2;
console.log(m,n,o);
```

### Switching variable

```jsx
// Switching variable 
// old way 
let first = 10;
let second = 20;
let temp = first;
first = second;
second = temp;
console.log(first, second);

// new way 
[first,second]=[second,first]
console.log(first, second);
```

### Store return value

```jsx
const resturant = {
    name: "Burger House 420",
    location: "Puran Dhaka,Dhaka,Bangladesh",
    categories: ["Italian", "Vegeterian", "Local", "Organic"],
    starterMenu: [
        "Chicken Cheese Burger",
        "Beef Burger",
        "Garlic Bread",
        "Italian Spicy Pasta",
        "Bagdadi Shahi Biriyani",
        "Mexican Chilli Chicken",
    ],
    mainMenu: ["Burger", "Pizza", "Fajita", "French Fries"],
    openingHours: {
        sun: {
            open: 10,
            close: 22
        },
        fri: {
            open: 9,
            close: 23
        },
        wed: {
            open: 11,
            close: 22
        },
    },

    order:function(starterIndex,mainIndex){
        return [this.starterMenu[starterIndex],this.mainMenu[mainIndex]]
    }
};

// Store return value
const [firstOrder,secondOrder]=resturant.order(2,0)
console.log(firstOrder,secondOrder);
```

### Nested destructuring

```jsx
//nested destructuring
const nested = [2,4,[5,6]]
const [i,j,[k,l]]=nested
console.log(i,j,k,l);
```

### Default values

```
//default values
const arrNew = [10,30]
const[p=1,q=1,r=1,s=1]=arrNew
console.log(p,q,r,s);
```

### Destructuring object

```jsx
//destructuring object
const { categories, mainMenu, starterMenu } = resturant;
console.log(categories, mainMenu, starterMenu);
```

### Changing object name

```jsx
// changing object name 
const { name: resturantName, location, openingHours } = resturant;
console.log(resturantName, location, openingHours);

const { sun: sunday, wed: wednesday, fri: friday } = resturant.openingHours;
console.log(sunday, wednesday, friday);
```

### Object default value

```jsx
// object default value 
const { mainNai = [] } = resturant;
console.log(mainNai);
```

### Mutating variables

```jsx
// mutating variables 
let f = 100;
let g = 200;

const obj = { f: 20, g: 30 };
({ f, g } = obj);
console.log(f, g);
```

### Nested object

```jsx
// nested object
const tumpa = {
    friends:{
        first2:"Sabrina",
        second2:"Shohan",
    },
}
// const {first2,second2} = tumpa.friends
const {friends:{first2,second2}} = tumpa
console.log(first2,second2);
```

### Destructuring object 2

```jsx
// destructuring object 2
resturant.orderDelivery({
    starterIndex:2,
    mainIndex:0,
    time: "06:20 PM",
    address: "Uttara,Dhaka",

})

resturant.orderDelivery({
    starterIndex:1,
    address:"Dhanmondi 27"
})
```

### Spread operators

```jsx
// spread operators(...arr)
const arr3 = [33, 44, 55, 66];
const badArrCopy = [11, 22, arr3[0], arr3[1], arr3[2], arr3[3]];
console.log(badArrCopy);

const goodArrCopy = [11, 22, ...arr3];
console.log(goodArrCopy);

const newMenu = [...resturant.mainMenu, "Noodles", "Ramen"];
console.log(newMenu);

// copy array 
const mainMenuCopy = [...resturant.mainMenu];
console.log(mainMenuCopy);

// join array 
const allFoods = [...resturant.mainMenu, ...resturant.starterMenu];
console.log(allFoods);

// iterables: arrays,strings,maps,sets 
// object not iterable

const gameName = "Callof Duty: Modern Warfare";
console.log(...gameName, " ", "2022");
const str = "Tansen";
console.log(...str);
// console.log(`My name is ${...str}`); //error

const ingredients = ["Tomato", "Chicken", "Letture"];
resturant.orderBurger(...ingredients);
```

### Copying object

```jsx
// copying objects 
// old way (both will share same memory location)
const newRestaurant = resturant;
newRestaurant.name = "Burger Remix"
console.log(resturant);
console.log(newRestaurant);

// new way 
const newRestaurant = { ...resturant, founder: "Amzad" };
newRestaurant.name = "Burger Remix";
console.log(resturant);
console.log(newRestaurant);
```

</details>

<details>
<summary>JS-Day-15</summary>

### Topic:

- Rest pattern and parameters
- Short circuiting
- Nullish coalescing operator
- Logical assignment operators
- For of
- Optional chaining
- Looping object
- Sets
- Object in new way
- Enhanced object literals

### Rest pattern and parameters

- Rest pattern and parameters - left side of = sign
- Spread - right side of = sign

Destructuring

```jsx
"use strict";

const resturant = {
    name: "Burger House 420",
    location: "Puran Dhaka,Dhaka,Bangladesh",
    categories: ["Italian", "Vegeterian", "Local", "Organic"],
    starterMenu: [
        "Chicken Cheese Burger",
        "Beef Burger",
        "Garlic Bread",
        "Italian Spicy Pasta",
        "Bagdadi Shahi Biriyani",
        "Mexican Chilli Chicken",
    ],
    mainMenu: ["Burger", "Pizza", "Fajita", "French Fries"],
    openingHours: {
        sun: {
            open: 10,
            close: 22
        },
        fri: {
            open: 9,
            close: 23
        },
        wed: {
            open: 11,
            close: 22
        },
    },

    order: function (starterIndex, mainIndex) {
        return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
    },
    orderDelivery: function ({ starterIndex = 0, mainIndex = 0, time = "10:00 PM", address = "Unknown" }) {
        console.log(`${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`);

    },
    orderBurger: function (ing1, ing2, ing3) {
        console.log(`Here is your delicious burger with ${ing1},${ing1},${ing2} and ${ing3}.`);
    },
    orderPizza: function (mainIng, ...otherIng) {
        console.log(mainIng);
        console.log(otherIng);
    },
};
// spread 
const arr = [1, 2, ...[3, 4]];
console.log(arr);

// rest 
const [a, b, ...others] = [1, 2, 3, 4, 5, 6, 7, 8, 9];
console.log(a, b);
console.log(others);

const [x, , y, ...friends] = ["Rahat", "Shohan", "Tumpa", "Sabrina", "faysal"];
console.log(x, y, friends);

// rest - spread 
const [burger, , pasta, ...otherFood] = [...resturant.mainMenu, ...resturant.starterMenu];
console.log(burger, pasta, otherFood);
```

Rest on object 

```jsx
// object 
const { fri, ...otherDay } = resturant.openingHours;
console.log(fri, otherDay);
```

Function

```jsx
// 2. function (rest perameter)
const add = function (...numbers) {
    let sum = 0;
    for (let i = 0; i < numbers.length; i++) {
        sum += numbers[i];
    }
    console.log(sum);
};
add(4, 5, 2, 3);

const arr2 = [33, 2, 4, 5];
add(...arr2);

resturant.orderPizza("Mushrooms", "Onions", "Spinach")
```

### Short circuiting

```jsx
// Short circuiting 
// OR || if all true first true will be the output ; otherwise last false will be output
console.log(3 || "Tansen");
console.log("" || "Shohan");
console.log(false || 0);
console.log(undefined || null);
console.log(undefined || 0 || "" || "Tansen" || 23 || null);
console.log(false || true);
console.log(0 || "");

const guests = resturant.guests ? resturant.guests : 20;
console.log(guests);

const guests2 = resturant.guests || 30;
console.log(guests2);

const founder = resturant.founder || "Amzad";
console.log(founder);

// And && - if all true last one will be output ; otherwise last false will be output
console.log(0 && "Tansen");
console.log(7 && "Spiderman");
console.log("TT" && "Spidey" && null && 0 && " ");
console.log(false && true);
console.log("Fahim" && 12 && " " && 22 && true && undefined);

// practical example 
if (resturant.orderPizza) {
    resturant.orderPizza("Mashrooms", "Onions", "Tomatoes");
}
// similarly using && short circuit
resturant.orderPizza && resturant.orderPizza("Mashrooms", "Onions", "Tomatoes");
```

### Nullish coalescing operator

nullish value ⇒ null,undefined

```jsx
// Nullish coalescing operator
// nullish value = null,undefined  (0,'' not nullish value)
resturant.guests = 0;
const guests3 = resturant.guests ?? 20;
console.log(guests3);
```

### Logical assignment operators

```jsx
// Logical assignment operators
const rest1 = {
    name:"Pizza Club",
    guests: 20,
}
const rest2 = {
    name:"Food Club",
    owner: "Tansen",
}

// OR 
rest1.guests = rest1.guests||10
rest2.guests = rest2.guests||30

// more shortly (Logical assignment operators):
rest1.guests||=10
rest2.guests||=10

console.log(rest1.guests);
console.log(rest2.guests);
```

### For of

```jsx
// For of
const arr3 = [1, 2, 3, 4, 5, 6, 7, 8, 9];

for (let i = 0; i < arr3.length; i++) {
    console.log(arr3[i]);
}
console.log("/////////////");
for (const number of arr3) {
    console.log(number);
}

const menu = [...resturant.mainMenu, ...resturant.starterMenu];

for (const [index,food] of menu.entries()) {
    console.log(`${index+1} : ${food}`);
}
```

### Optional chaining

```jsx
// Optional chaining 
// console.log(resturant.openingHours.sat.open); //error
console.log(resturant?.openingHours?.sat?.open);
console.log(resturant.openingHours.fri.open);

const days = ["mon", "tue", "wed", "thu", "fri", "sat", "sun"];

for (const day of days) {
    const open = resturant.openingHours[day]?.open ?? "off-day";
    console.log(open);
}
```

### Looping object

```jsx
// looping objects 
// - property names
// - property values
// - property entries

// - property names

const properties = Object.keys(resturant.openingHours);
console.log(properties);

for (const day of properties) {
    console.log(day);
}
// - property values
const values = Object.values(resturant.openingHours);
console.log(values);
for (const value of values) {
    console.log(value.open, value.close);
}

// - property  entries
const entries = Object.entries(resturant.openingHours);
console.log(entries);

for (const [key, value] of entries) {
    console.log(key);
    console.log(value);
}
```

### Sets

```jsx
// Sets - unique values, can't access by index

// Sets (advanced version of array/faster than array)
// object advanced version maps 
const foods = new Set(["Pizza","Burger","Pizza","Pizza","Pizza","Noodles"])
console.log(foods);
console.log(foods.size);
console.log(foods.has("Pizza"));
foods.add("Pasta")
console.log(foods);
foods.delete("Pasta")
console.log(foods);
for(const food of foods){
    console.log(food);
}

const arr4 = [20,20,11,20,11,32,33,43,33,32,11,10,1,20,42,22,42,22]
const uniqueArr = [...new Set(arr4)]
console.log(uniqueArr);
```

### Object in new way

```jsx
//old way
orderPizza: function (mainIng, ...otherIng) {
        console.log(mainIng);
        console.log(otherIng);
    }

//new way
orderPizza(mainIng, ...otherIng) {
        console.log(mainIng);
        console.log(otherIng);
    }
```

### Enhanced object literals

```jsx
const openingHours = {
    sun: {
        open: 10,
        close: 22
    },
    fri: {
        open: 9,
        close: 23
    },
    wed: {
        open: 11,
        close: 22
    },
};

const resturant = {
    name: "Burger House 420",
    location: "Puran Dhaka,Dhaka,Bangladesh",
    categories: ["Italian", "Vegeterian", "Local", "Organic"],
    starterMenu: [
        "Chicken Cheese Burger",
        "Beef Burger",
        "Garlic Bread",
        "Italian Spicy Pasta",
        "Bagdadi Shahi Biriyani",
        "Mexican Chilli Chicken",
    ],
    openingHours, //here enhanced object literals
    mainMenu: ["Burger", "Pizza", "Fajita", "French Fries"],
    openingHours: {
        sun: {
            open: 10,
            close: 22
        },
        fri: {
            open: 9,
            close: 23
        },
        wed: {
            open: 11,
            close: 22
        },
    },

    order: function (starterIndex, mainIndex) {
        return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
    },
    orderDelivery: function ({ starterIndex = 0, mainIndex = 0, time = "10:00 PM", address = "Unknown" }) {
        console.log(`${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`);

    },
    orderBurger: function (ing1, ing2, ing3) {
        console.log(`Here is your delicious burger with ${ing1},${ing1},${ing2} and ${ing3}.`);
    },
    orderPizza: function (mainIng, ...otherIng) {
        console.log(mainIng);
        console.log(otherIng);
    },
};
```

</details>

<details>
<summary>JS-Day-16</summary>

### Topic:

- Maps
- String method

### Maps

```jsx
"use strict";
// Maps
const rest = new Map();
rest.set("name", "Pizza Hutt");
rest.set(1, "Dhaka");
rest.set(2, "Chittagong");
rest.set("categories", ["Italian", "Pizzeria", "Vgetarian", "Organic"]).set("open", 10).set("close", 22).set(true, "we are open").set(false, "we are close");
console.log(rest);
console.log(rest.get("name"));

const time = 21;
console.log(rest.get(time > rest.get("open") && time < rest.get("close")));

console.log(rest.has("categories"));

rest.delete(2);
console.log(rest);
// rest.set([1,2],"array") // in order to get this we need to store it

const arr = [1, 2];
rest.set(arr, "array");
console.log(rest.get(arr));

console.log(rest);

const lang = new Map([
    [1, "C"],
    [2, "C++"],
    [3, "java"],
    [4, "JavaScript"],
    [5, "Python"],
    [6, "C#"],
]);
console.log(lang);

for(const [key,value] of lang){
    console.log(`${key}: ${value}`);
}

const openingHours = {
    sun: {
        open: 10,
        close: 22
    },
    fri: {
        open: 9,
        close: 23
    },
    wed: {
        open: 11,
        close: 22
    },
};

const resturant = {
    name: "Burger House 420",
    location: "Puran Dhaka,Dhaka,Bangladesh",
    categories: ["Italian", "Vegeterian", "Local", "Organic"],
    starterMenu: [
        "Chicken Cheese Burger",
        "Beef Burger",
        "Garlic Bread",
        "Italian Spicy Pasta",
        "Bagdadi Shahi Biriyani",
        "Mexican Chilli Chicken",
    ],
    openingHours,
    mainMenu: ["Burger", "Pizza", "Fajita", "French Fries"],
    openingHours: {
        sun: {
            open: 10,
            close: 22
        },
        fri: {
            open: 9,
            close: 23
        },
        wed: {
            open: 11,
            close: 22
        },
    },

    order: function (starterIndex, mainIndex) {
        return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
    },
    orderDelivery: function ({ starterIndex = 0, mainIndex = 0, time = "10:00 PM", address = "Unknown" }) {
        console.log(`${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`);

    },
    orderBurger: function (ing1, ing2, ing3) {
        console.log(`Here is your delicious burger with ${ing1},${ing1},${ing2} and ${ing3}.`);
    },
    orderPizza: function (mainIng, ...otherIng) {
        console.log(mainIng);
        console.log(otherIng);
    },
};

// object to map 
const hours = new Map(Object.entries(openingHours))
console.log(hours);

console.log(...lang);
console.log(...lang.keys());
console.log(...lang.values());
```

### String method

```jsx
// String method
const station = "Pahartoli Station";
const train = "T678 Provati";

console.log(train[0]);
console.log(train[1]);
console.log("Tansen"[0]);
console.log(station.length);

console.log(station.indexOf("P"));
console.log(station.lastIndexOf("a"));

// slice  - ending index not included
console.log(station.slice(10));
console.log(station.slice(0, 9));

console.log(station.slice(0, station.indexOf(" ")));
console.log(station.slice(station.indexOf(" ") + 1));

console.log(station.slice(1, -1));

// last elemet 
console.log(station[station.length - 1]);
console.log(station.at(-1));
console.log(station.slice(-1));

const checkWindowSeat = function (seatNumber) {
    // W = window seat
    // M = Middle seat
    // C = Cabin seat
    // const slicedSeatNum = seatNumber.slice(-1)
    const slicedSeatNum = seatNumber.slice(2, 3);
    console.log(slicedSeatNum);
};

// checkWindowSeat("22W")
// checkWindowSeat("23M")
// checkWindowSeat("24C")
// checkWindowSeat("76W")
// checkWindowSeat("44M")
checkWindowSeat("22W11");
checkWindowSeat("23M22");
checkWindowSeat("24C33");
checkWindowSeat("76W44");
checkWindowSeat("44M55");

// object - string
console.log(typeof ("Tansen")); //string
console.log(typeof new String("Tansen")); //object
console.log(typeof new String("Tansen").slice(0)); //string

console.log(station.toLowerCase());
console.log(station.toUpperCase());

// trim 
function normalizedemail(email) {
    const normalizedemail = email.toLowerCase().trim();
    return normalizedemail;
}

console.log(normalizedemail("     Tansen@gmail.com    "));

// replace 
const jutaPriceBD = "500TK";
const jutaPriceUSD = jutaPriceBD.replace("TK", "$");
console.log(jutaPriceBD);
console.log(jutaPriceUSD);

// regular expression (replace all)
const warningMsg = "Beware of Trojan.99! Trojan.99! Trojan.99!";
// const warningMsgCorrent = warningMsg.replaceAll(".", " v")
const warningMsgCorrent = warningMsg.replace(/.99/g, " v99")

console.log(warningMsgCorrent);

const message ="bad weather!"
console.log(message.repeat(10));

function planeInLine(num){
    console.log(`There are ${num} planes in line! ${"✈".repeat(num)}`);
}
planeInLine(10)
planeInLine(5)
planeInLine(6)
planeInLine(3)

// split and join 
console.log("it+is+a+very+warm+day".split("+"));

const splitedName = "Md Alahi Almin Tansen".split(" ")
const joinName = splitedName.join(" ")
console.log(joinName);
```

</details>

<details>
<summary>JS-Day-17</summary>

### Topic:

- Close look at the function
- Functions accepting callback function
- Currying - Arrow - Lambda  function
- Call Apply Bind
- Immediately invoked function expression (IIFE) & Private

### Close look at the function

JS does not have passing by reference, only passing by value (for object  - pass object reference as a value)

```jsx
"use strict";

// Creates a booking and adds it to the bookings array.
const bookings = [];
const creatBooking = function (roomNum, numGuest = 1, price = 500 * numGuest) {
    const booking = {
        roomNum,
        numGuest,
        price,
    };
    bookings.push(booking);
};

creatBooking("A202", 2, 1000);
creatBooking("B702", 4, 2000);
creatBooking("D502", 10);
creatBooking("E555", undefined, 2500);
console.log(bookings);

// value vs reference 
const flight = "B233";

const tansen = {
    name: "Tansen",
    passport: 56543225,
};

const checkIn = function (flightNum, passenger) {
    flightNum = "L345";
    passenger.name = "Mr. " + passenger.name;
    if (passenger.passport === 56543225) {
        console.log("Checked In");
    } else {
        console.log("Wrong Passport");
    }
    console.log(passenger);
};

checkIn(flight, tansen)
// JS does not have passing by reference, only passing by value (for object  - pass object reference as a value)
```

### Functions accepting callback function

```jsx
// Functions accepting callback function
// 1. first class function 
// 2. higher order function 
// 3. callback function

// Sawmill
// 1. first class function 
function logCutter(logs) {
    let logPieces = 0;
    for (const log of logs) {
        logPieces += log;
    }
    return logPieces;
}

function logCounter(logs){
    return logs.length
}

// 2 higher order function 
function sawmil(logs,fn){
    console.log(`Operated by: ${fn.name}`);
    return fn(logs)

}
console.log(sawmil([12,15,21,33,4,6,7,3,7,14],logCounter));
console.log(sawmil([12,15,21,33,4,6,7,3,7,14],logCutter));
```

### Currying - Arrow - Lambda  function

```jsx
// Currying function (function returning functions)
function greet(greeting){
    return function(name){
        console.log(`${greeting}, ${name}`);
    }
}
greet("Good night")("Tansen")

// Lambda function 
function calcVat(rate){
    return function(price){
        return price+(price*rate)
    }
}

console.log(calcVat(.10)(250));

const calcVatArrow = rate=>price=>price+(price*rate)

console.log(calcVatArrow(0.10)(250));
```

### Call Apply Bind

```jsx
// calling other function 
const tansenT = {
    airline: "Tansen T",
    code: "TT",
    bookings: [],
    book: function (flightNum, name) {
        console.log(`${name} booked a seat on ${this.airline}, flight ${this.code}${flightNum}`);
        this.bookings.push({
            flight: `${this.code}${flightNum}`,
            passengerName: `${name}`
        });
    },
};

const sadrilExpressAir = {
    airline: "Sadril Express Air",
    code: "SEA",
    bookings: [],
};

const tanishaWings = {
    airline: "Tanisha Wings",
    code: "TW",
    bookings: [],
};

tansenT.book.call(sadrilExpressAir, 332, "Shohan");
tansenT.book.call(tanishaWings, 765, "Kajal");

tansenT.book(432, "Nesnat");
tansenT.book(543, "Fahim");
console.log(tansenT.bookings);
console.log(sadrilExpressAir.bookings);
console.log(tanishaWings.bookings);

// apply (less used)
tansenT.book.apply(tanishaWings, [789, "Tanvir"]);
console.log(tanishaWings.bookings);

// bind 
const bookSadril = tansenT.book.bind(sadrilExpressAir);
const bookTanisha = tansenT.book.bind(tanishaWings);
const bookTansen = tansenT.book.bind(tansenT);

bookSadril(999, "Lima");
bookSadril(237, "Lama");
bookTansen(678, "Ayesha");
console.log(sadrilExpressAir.bookings);
console.log(tanishaWings.bookings);
console.log(tansenT.bookings);

// restaurant
const rest1 = {
    name: "Burger Villa",
    code: "BV",
    orders: [],
    foods: ["Burger", "Pizza", "Pasta", "Noodles", "French Fries"],
    orderFood: function (foodIndex = 0, foodCount = 1, name, address, time, price = 100 * foodCount) {
        console.log(`${name} ordered ${foodCount} ${this.foods[foodIndex]}s from ${address} at ${time} Price: ${price}`);

        this.orders.push({
            name: `${name}`,
            food: `${this.foods[foodIndex]}`,
            pieces: `${foodCount}`,
            price: `${price}`,
            address: `${address}`,
            time: `${time}`
        });
    }
};

rest1.orderFood(2, 5, "Tansen", "Dhaka", "10:00AM");

const rest2 = {
    name: "Pasta King",
    code: "BV",
    orders: [],
    foods: ["Burger", "Chilli Chicken Fries", "Pizza", "Pasta", "Noodles", "French Fries"],
};

const orderRest2 = rest1.orderFood.bind(rest2);
orderRest2(3, 7, "Tanisha", "Gazipur", "12:00AM");

console.log(rest2.orders);
```

### Immediately invoked function expression (IIFE) & Private

```jsx
// Immediately invoked function expression (IIFE)

const runOnce = function () {
    console.log("This won't run once");
};
runOnce();
runOnce();
runOnce();
runOnce();

// (function () {
//     console.log("This only run once");
// }())

(() => {
    console.log("This also run once");
})();

// private 
{
    const privateNumber =200
}
console.log(privateNumber);
```

</details>