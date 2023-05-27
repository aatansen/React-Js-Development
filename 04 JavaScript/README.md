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