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