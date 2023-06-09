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

### Truthy & Falsy Value

- There are 5 falsy value
    - 0
    - ””
    - undefined
    - null
    - NaN

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

</details>