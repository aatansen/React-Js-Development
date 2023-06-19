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