<details>
<summary>CSS-Day-01</summary>

### Topic:

- Introduction to CSS and Syntax Explanations
- Different Ways to Add Styles
- Comments
- Colors (Named Colors, RGB, HEX, HSL, RGBA and HSLA)
- Background Colors
- Margins
- Padding
- Units
- Height and Width
- Borders
- CSS Box Model

### CSS(**Cascading Style Sheets**) Introduction:

inline css:

```html
<body>
    <!-- * inline way -->
    <h1 style="color:red">Lorem ipsum dolor sit amet consectetur Voluptate</h1>
</body>
```

### internal css:

```html
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>CSS Introduction</title>
    <!-- * internal way -->
    <style>
        p {
            color: aquamarine;
        }
    </style>
</head>

<body>

    <p>Author: Reporter A | Published: 03 March 2026</p>

</body>

</html>
```

### external css:

```html
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>CSS Introduction</title>
    <!-- * external way  -->
    <link rel="stylesheet" href="style.css">
</head>

<body>
    <h2>Similique Dolore Sint</h2
</body>

</html>
```

### color scheme:

```html
rgb(red,green,blue)
rgba(red,green,blue,alpha)

Hex Color #rrggbb
Double hex can be used once:
#aaffbb --> #afb

hls(hue,lightness,saturation)
```

### coloring tag:

```css
h2{
    color: rgb(21, 255, 0);
    background-color:antiquewhite;
}
```

### coloring id:

```css
#author-date{
    color: rgb(128, 0, 43);
    background-color: black;
}
```

### coloring class:

```css
.color-paragraph {
    color: crimson;
}
```

### styling specific text from a big paragraph <span> is used:

decending selector:

```css
p span {
    color: blueviolet;
}
```

```html
<p >Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium optio exercitationem eius, inventore
        asperiores rerum perferendis, voluptate aspernatur, molestiae consectetur voluptates architecto nam animi dicta
        excepturi similique dolore sint. <span>"Nostrum?."</span> 
</p>
```

### Margin in css:

```css
/*CSS box Model from Inspect*/
margin: 100px; /*four sides*/ 
margin: 100px 10px; /*top-bottom left-right; */
margin: 200px 100px 300px 50px; /*top-right-bottom-left  */
```
</details>

<details>
<summary>CSS-Day-02</summary>

### Topic:

- Outline
- Typography (Color, Background Color, Alignment, Decoration, Transformation and Spacing)
- Fonts (Font Family, Font Style, Font Size and Google Fonts)
- Font Awesome Icons
- Links
- Buttons
- Homework - 04: Create 10 Awesome Buttons and A List
- Lists
- Display and Visibility

### Outline:

it is used outside design of the border:

```css
.container{
    width: 75%;
    background-color: hotpink;
    padding: 25px;
    margin: 50px;
    border: 5px solid black;
    border-radius: 20px 0 20px 0;
    outline: 5px dashed blue;
    outline-offset: 10px;
}
```

### Default font size:

```css
.wrapper p{
    font-size: 1rem; or 16px
}
/* 1rem == 16px */
```

### Pixel vs rem vs em

- 16px = 1rem
- but for em it works different relatively to that selected tag:
example 
for p , 1em = 16px
for h1 it is different.

### Block vs Inline element:

- A block-level element always takes up the full width available.
example : <p>
- An inline element only takes up as much width as necessary.
example : <a>
- Margin works only left-right

### inline behave as block element—>inline-block element:

```css
display: inline-block
```

### Importing google font:

```css
/* select font and copy import code */
<style> @import url('https://fonts.googleapis.com/css2?family=Lato:wght@400;700;900&display=swap'); </style>
```

### Link State:

- Link
- Visited
- Active
- Hover

### pseudo class:

```css
a:link{
    
}
```
</details>

<details>
<summary>CSS-Day-03</summary>

### Topic:

- Max-Width, Min-Width, Max-Height and Min-Height
- Backgrounds (Image, Repeat, Size, Attachment and Position)
- Homework - 05: Create A Parallax Website
- Navigation Bar
- Homework - 06: Create 5 Navigation Bars

### images:

- When an image is style with width it will auto resize height

### view port height:

```css
.car-bg-container{
    background-image: url(https://images.unsplash.com/photo-1552176625-e47ff529b595?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=869&q=80);
    width: 100%;
    height: 100vh; /* <--- */
}
```

### parallax effect:

```css
/*in parallax effect background image is fixed*/
.car-bg-container{
    width: 100%;
    height: 70vh;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    /* background-size: contain; */
    background-attachment: fixed;  /*<---*/
}
```
</details>

<details>
<summary>CSS-Day-04</summary>

### Topic:

- Shadow Effects
- Text Effects
- Homework - 07: Create 3 Cards
- Tables
- Homework - 08: Create 2 Tables

### Shadows:

- Mostly used for box
- `box-shadow: x y blur colour;`

```css
.box{
    width: 300px;
    height: 300px;
    background-color: aliceblue;
    box-shadow: 1px 1px 1px rgba(0,0,0,0.1);
    margin: 100px auto;
    border-radius: 10px;
}
```

### neumorphism shadow:

```css
.neo-box{
    width: 300px;
    height: 300px;
    background-color: #e2ecee;
    margin: 100px auto;
    border-radius: 10px;
    box-shadow: 5px 5px 15px #e2ecee , -5px -5px 15px #e2ecee; /*note*/
}
/*first one will be darker , 2nd one will be lighter*/
```

### Targeting nth child:

```css
tr{
    border-bottom: 1px solid rgba(0,0,0,0.1);
    cursor: pointer;
}
tr:nth-child(even){
    background-color: whitesmoke;
}
```

### github:

```bash
#first time
git init
git add .
git commit -m "first commit"
git branch -M main
git remote add origin https....../name.git
git push -u origin main

#update time
git add .
git commit -m "update commit"
git push
```
</details>

<details>
<summary>CSS-Day-05</summary>

### Topic:

- Border Images
- Position and Z-Index
- Overflow
- Homework - 08: Create 2 Movie Cards

Position:

- Static - It is a default position of anything
- Relative - position stay as it is
- Absolute - it changes its position

### position change using position:

```css
.relative{
    width: 500px;
    height: 500px;
    background-color: crimson;
    position: relative;
}
.absolute{
    width: 100px;
    height: 100px;
    background-color: mediumturquoise;
    position: absolute;
    top: 50px;
}
```

### Z index:

```css
/*it is used to make sure that the absolute element is on top of the relative element */
.relative{
    width: 500px;
    height: 500px;
    background-color: crimson;
    position: relative;
}
.absolute{
    width: 100px;
    height: 100px;
    background-color: mediumturquoise;
    position: absolute;
    top: 100px;
    left: 100px;
    z-index: 1; 
}
.absolute-2{
    width: 100px;
    height: 100px;
    background-color: purple;
    position: absolute;
    top: 150px;
    left: 150px;
}
```

### Sticky Position:

```css
.logo h1{
    position: sticky;
    top: 0;
}
```

### Box shadow:

```css
/* here box shadow contain {x} {y} {blur} {sprading area} {colour} */
.box-1{
    width: 500px;
    height: 500px;
    border-radius: 10px;
    background-color: rgb(0,174,214);
    margin: 100px auto;
    box-shadow: 5px 5px 20px 50px rgba(0,0,0,0.5);
}
```

### neumorphism shadow inset:

```css
/*Shadow will look like inside*/
.box-2{
    width: 200px;
    height: 200px;
    border-radius: 10px;
    background-color: rgb(0,174,214);
    margin: auto;
    box-shadow: inset 5px 5px 20px rgb(2, 143, 175) , inset -5px -5px 20px rgb(9, 204, 248);
}
```

### Zoom effect and Color change on hover:

```css
.card-image img:hover{
    transform: scale(1.1);
    filter: grayscale(1);
}
```

### Transition:

```css
/* Transition effect declared in main class */
.card-details a{
    text-decoration: none;
    background-color: rgba(0,174,214,0.2);
    color: rgb(0,174,214);
    border-radius: 3px;
    font-size: 1.3em;
    text-transform: uppercase;
    font-weight: 600;
    letter-spacing: 3px;
    display: block;
    text-align: center;
    padding: 3px 0;
    margin-bottom: 30px;
    transition: 0.3s;  /* <-------- */
}
.card-details a:hover{
    background-color: rgb(0,174,214);
    color: white;
    letter-spacing: 8px;
}
.card-details a:active{
    background-color: rgba(0,174,214,0.8);
}
```

### Font Awesome:

```bash
#font-awesome cdn:
https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.1/css/all.min.css
```

</details>

<details>
<summary>CSS-Day-06</summary>

### Topic:

- Combinators
- Pseudo-Classes
- Pseudo-Elements
- Transitions
- Homework - 09: Create 2 Navigation Bars Using Line Hover Effects

### Positions revise:

```css
/*Sticky:*/
header{
    width: 100%;
    height: 100px;
    background-color: crimson;
    position: sticky;
    top: 0;
}
header h1{
    color: white;
    text-align: center;
}

/*Fixed - work on viewport*/
button{
    font-size: 2rem;
    padding: 10px;
    background-color: aqua;
    position: fixed;
}
```

### Combinators:

```bash
#Descendant Combinator (.classname p) select every p
#Child combinator(.classname > p) select only direct child p
#General sibling combinator(.classname ~ p) select every sibling p
#Adjacent sibling combinator(.classname + p) select exactly p child **if other tag come first then won't work
```

### Descendant Combinator:

```html
<body>
    <div class="container">
        <p>Direct Child</p>
        <h2>Direct Child</h2>
        <p>Direct Child</p>
        <p>Direct Child</p>

        <div class="banana">
            <h1>Not Direct Child</h1>
            <p>Not Direct Child</p>
        </div>

        <div class="orange">
            <h1>Not Direct Child</h1>
            <p>Not Direct Child</p>
        </div>

    </div>
</body>
```

Here I target p of container class but every non-direct child is effected which is called Descendant Combinator

```css
/* Descendant Combinator  */
.container p{
color: orange;
}
```

### Child combinator targeting Direct child only (>):

```css
/* child combinator  */
.container > p {
  color: crimson;
}
```

### General sibling combinator:

```css
/* General sibling combinator*/
h2 ~ p{
    color: blue;
}
```

### Adjacent sibling combinator:

```css
h2 + p {
  color: green;
}
```

### Link Psuedo Class:

- Link
- Visited
- Hover
- Active

### Transition:

- Transition must be define in main psuedo class element
- but if it is define in hover then only hover will get the effect

```css
.container a:link ,a:visited{
    text-decoration: none;
    font-family: sans-serif;
    color: white;
    background-color: rgb(0, 174, 214);
    font-size: 2rem;
    text-transform: uppercase;
    padding: 10px 30px;
    margin: 100px;
    border-radius: 5px;
    display: inline-block;
    transition: 0.5s; /* <-------HERE----- */
}
.container a:hover{
    background-color: tomato;

}
```

### Input psuedo class:

```css
input {
  font-family: sans-serif;
  font-size: 2rem;
  background-color: rgba(0, 174, 214, 0.1);
  outline: none;
  border: 3px solid rgb(0, 174, 214);
  padding: 10px;
  border-radius: 5px;
  transition: 0.5s;
}
input:focus{
border-color: tomato;
}
```

### nth-child:

- every child is counted unter a parent

```html
<div class="container">
        <h2>Names:</h2>
        <p>Lorem</p>
        <p>Naruto</p>
        <p>Kira</p>
        <p>Nami</p>
        <p>TT</p>
    </div>
```

### Here Naruto will be effected by nth-child(3) though it is 2nd p:

```css
.container p:nth-child(3){
    color: crimson;
}
.container p:last-child{
    color: blue;
}
```

### nth-child(even):

```html
<body>
    <div class="container">
        <h2>Names:</h2>
        <p>Lorem</p>
        <p>Naruto</p>
        <p>Kira</p>
        <p>Nami</p>
        <p>TT</p>
    </div>
</body>
```

```css
.container p:nth-child(even){
    color: crimson;
}
```

### nth-child(odd):

```html
<body>
    <div class="container">
        <h2>Names:</h2>
        <p>Lorem</p>
        <p>Naruto</p>
        <p>Kira</p>
        <p>Nami</p>
        <p>TT</p>
    </div>
</body>
```

```css
.container p:nth-child(odd){
    color: crimson;
}
```

### nth-child(2n):

```html
<body>
    <div class="container">
        <h2>Names:</h2>
        <p>Lorem</p>
        <p>Naruto</p>
        <p>Kira</p>
        <p>Nami</p>
        <p>TT</p>
    </div>
</body>
```

```css
.container p:nth-child(2n){
    color: crimson;
}
```

### Transition:

- transition: property-name duration timing-function delay;
- ease - slow then fast then slow
- ease-in - slow then fast
- ease-out - fast then slow
- linear same speed
- cubic-bezier(n,n,n,n) - custom speed
- default transition is ease

```html
<body>
    <div class="container">
        <div class="box"></div>
    </div>
</body>
```

```css
*{
    margin: 0;
    padding: 0;
}
.container{
    width: 100%;
    height: 50vh;
    background-color: crimson;
    padding: 50px;
    
}
.container:hover .box{
transform: translateX(500px);

}
.box{
    width: 100px;
    height: 100px;
    background-color: mediumturquoise;
    padding: 10px;
    /* transition: property-name duration timing-function delay; */
    transition: transform 5s cubic-bezier(1,0.5,0.5,1) 2s;
    /* ease - slow then fast then slow */
    /* ease-in - slow then fast */
    /* ease-out - fast then slow */
    /* linear same speed */
    /* cubic-bezier(n,n,n,n) - custom speed  */
}
```

### Psuedo element (::)

understanding:

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>psuedo element test</title>
    <style>
        h1::after{
        content: " World";
        }
        h1::before{
            content: "Big ";
        }
    </style>
</head>
<body>
    <h1>Hello</h1>
</body>
</html>
```

### psuedo element transform:

```html
<nav>
        <ul>
            <a href="">Home</a>
            <a href="">Product</a>
            <a href="">Order</a>
            <a href="">About</a>
            <a href="">Contact</a>
        </ul>
    </nav>
```

```css
*{
margin: 0;
padding: 0;
}
nav{
    background-color: #222;
}
ul{
    text-align: center;
    padding: 20px;
}
ul a{
    text-decoration: none;
    color: white;
    font-family: sans-serif;
    font-size: 1.3rem;
    margin: 20px;
    position: relative;
    transition: color 0.2s linear;
    position: relative;
}
ul a:hover{
    color: rgb(0, 174, 214);
}
ul a::after{
position: absolute;
content: "";
width: 0%;
height: 3px;
background-color: rgb(0, 174, 214);
bottom: -5px;
left: 0;
transition: width 0.5s cubic-bezier(0.65,-1.13,0.3,2.18),transform 0.5s cubic-bezier(0.65,-1.13,0.3,2.18);
transform: translateX(-100px);
visibility: hidden;
}
ul a:hover::after{
    width: 100%;
    transform: translateX(0px);
    visibility: visible;
}
```

### in transform we can use “all” :

```css
ul a::after{
position: absolute;
content: "";
width: 0%;
height: 3px;
background-color: rgb(0, 174, 214);
bottom: -5px;
left: 0;
transition: width 0.5s cubic-bezier(0.65,-1.13,0.3,2.18),transform 0.5s cubic-bezier(0.65,-1.13,0.3,2.18);
/* also it can be written as: */
transition: all 0.5s cubic-bezier(0.65,-1.13,0.3,2.18);
transform: translateX(-100px);
visibility: hidden;
}
ul a:hover::after{
    width: 100%;
    transform: translateX(0px);
    visibility: visible;
}
```

### Whenever we need element for animation content property must there :

```css
ul a::after{
    content: ""; /*empty but still need to be written*/
}
```

### Here when hover “after” element will be effected:

```css
ul a::after{
    content: "";
    position: absolute;
    width: 0%;
    height: 3px;
    background-color: rgb(0,174,214);
    bottom: -5px;
    left: 0;
    border-radius: 1.5px;
    transition: width 0.2s linear;
}
ul a:hover::after{
    width: 100%;
}
```

### Special note on transition:

- Don't write transition property on pseudo class
- It should be written in pseudo element and main element

### psuedo element navbar animation:

```html
<body>
    <nav>
        <ul>
            <a href="#">Home</a>
            <a href="#">Product</a>
            <a href="#">Order</a>
            <a href="#">About</a>
            <a href="#">Contact</a>
        </ul>
    </nav>
</body>
```

```css
*{
    margin: 0;
    padding: 0;
}
nav{
    background-color: #222;
}
ul{
    text-align: center;
    padding: 20px;
}
ul a{
    text-decoration: none;
    font-family: sans-serif;
    color: white;
    font-size: 1.5rem;
    margin: 0 20px;
    position: relative;
    transition: all 0.2s linear;
    position: relative;
}
ul a:hover{
    color: rgb(0, 174, 214);
}
ul a::after{
    content: "";
    position: absolute;
    width: 100%;
    height: 3px;
    background-color: rgb(0,174,214);
    bottom: -5px;
    left: 0;
    border-radius: 1.5px;
    transition: transform 0.3s cubic-bezier(0.39, -0.5, 0.65, 1.61);
    transform: translateX(-50px);
    visibility: hidden;
}
ul a:hover::after{
    visibility: visible;
    transform: translateX(0px);
}
```

### Triangle design with border

```css
.box{
    width: 0px;
    height: 0px;
    /* background-color: crimson; */
    /* border: 50px solid black; */
    border-top: 300px solid black;
    /* border-bottom: 300px solid crimson; */
    border-left: 300px solid white;
    border-right: 300px solid white;
}
```

### Triangle design with border (right indicate arrow):

```css
/*if arrow indicate rightside , leftside will have solor other two (top,bottom) transparent*/
.tooltip::before{
    content: "";
    width: 0;
    height: 0;
    border-top: 5px solid transparent;
    border-left: 8px solid #222;
    border-bottom: 5px solid transparent;
    margin-right: 7px;
}
```

### Note on coordinate system:

```bash
#We use svg coordinate system
```

### Tooltip:

```css
<body>
    <h1 title="Cascading Style Sheet" >CSS</h1>
</body>
```

### Showing attribute content in psuedo element:

```html
<body>
    <p><abbr data-tooltip="JavaScript" class="tooltip">JS</abbr></p>
</body>
```

```css
.tooltip{
    cursor: grab;
    position: relative;
}
.tooltip::after{
    position: absolute;    
    content: attr(data-tooltip);
}
```

### Custom Attribute:

```html
<body>
    <p><abbr data-tooltip ="JavaScript">JS</abbr></p>
</body>
```

### Custom Tooltip (left position)

```html
<body>
    <p><abbr data-tooltip="JavaScript" class="tooltip">JS</abbr></p>
</body>
```

```css
* {
  margin: 0;
  padding: 0;
}
body {
  background-color: aliceblue;
  color: rgb(0, 174, 214);
  font-family: sans-serif;
  font-size: 3rem;
  font-weight: bold;
  text-align: center;
  margin: 100px 0;
}
.tooltip{
    cursor: grab;
    position: relative;
}

.tooltip::after, .tooltip::before{
    position: absolute;
    top: 50%;
    right: 100%;
    transform: translate(0,-50%);
    margin-right: 15px;
    opacity: 0;
    visibility: hidden;
    transition: opacity 1s;
}
.tooltip:hover::after, .tooltip:hover::before{
    opacity: 1;
    visibility: visible;
}
.tooltip::after{    
    content: attr(data-tooltip);
    color: #fff;
    background-color: #222;
    font-size: 0.3em;
    font-weight: normal;
    padding: 10px;
    border-radius: 3px;
}
.tooltip::before{
    content: "";
    width: 0;
    height: 0;
    border-top: 5px solid transparent;
    border-left: 8px solid #222;
    border-bottom: 5px solid transparent;
    margin-right: 7px;
}
```

### Custom Tooltip (top position)

```css
* {
  margin: 0;
  padding: 0;
}
body {
  background-color: aliceblue;
  color: rgb(0, 174, 214);
  font-family: sans-serif;
  font-size: 3rem;
  font-weight: bold;
  text-align: center;
  margin: 100px 0;
}
.tooltip {
  cursor: grab;
  position: relative;
}

.tooltip::after,
.tooltip::before {
  position: absolute;
  /* left tooltip */
  /* top: 50%;
  right: 100%;
  transform: translate(0, -50%); 
  margin-right: 15px;*/
/* top tooltip  */
  bottom: 100%;
  left: 50%;
  transform: translate(-50%, 0);
  margin-bottom: 15px;
  opacity: 0;
  visibility: hidden;
  transition: opacity 1s;
}
.tooltip:hover::after,
.tooltip:hover::before {
  opacity: 1;
  visibility: visible;
}
.tooltip::after {
  content: attr(data-tooltip);
  color: #fff;
  background-color: #222;
  font-size: 0.3em;
  font-weight: normal;
  padding: 10px;
  border-radius: 3px;
}
.tooltip::before {
  content: "";
  width: 0;
  height: 0;
   /* left tooltip */
  /* border-top: 5px solid transparent;
  border-left: 8px solid #222;
  border-bottom: 5px solid transparent; 
  margin-right: 7px;*/
  /* top tooltip  */
  border-top: 8px solid #222;
  border-left: 5px solid transparent;
  border-right: 5px solid transparent;
  margin-bottom: 7px;
}
```

### Custom Tooltip (bottom position)

```css
* {
  margin: 0;
  padding: 0;
}
body {
  background-color: aliceblue;
  color: rgb(0, 174, 214);
  font-family: sans-serif;
  font-size: 3rem;
  font-weight: bold;
  text-align: center;
  margin: 100px 0;
}
.tooltip {
  cursor: grab;
  position: relative;
}

.tooltip::after,
.tooltip::before {
  position: absolute;
  /* left tooltip */
  /* top: 50%;
  right: 100%;
  transform: translate(0, -50%); 
  margin-right: 15px;*/
  /* top tooltip  */
  /* bottom: 100%;
  left: 50%;
  transform: translate(-50%, 0);
  margin-bottom: 15px; */
  /* bottom tooltip  */
  top: 100%;
  left: 50%;
  transform: translate(-50%, 0);
  margin-top: 15px;
  opacity: 0;
  visibility: hidden;
  transition: opacity 1s;
}
.tooltip:hover::after,
.tooltip:hover::before {
  opacity: 1;
  visibility: visible;
}
.tooltip::after {
  content: attr(data-tooltip);
  color: #fff;
  background-color: #222;
  font-size: 0.3em;
  font-weight: normal;
  padding: 10px;
  border-radius: 3px;
}
.tooltip::before {
  content: "";
  width: 0;
  height: 0;
  /* left tooltip */
  /* border-top: 5px solid transparent;
  border-left: 8px solid #222;
  border-bottom: 5px solid transparent; 
  margin-right: 7px;*/
  /* top tooltip  */
  /* border-top: 8px solid #222;
  border-left: 5px solid transparent;
  border-right: 5px solid transparent; */
  /* bottom tooltip  */
  border-bottom: 8px solid #222;
  border-left: 5px solid transparent;
  border-right: 5px solid transparent;
  margin-top: 7px;
}
```
</details>

<details>
<summary>CSS-Day-07</summary>

### Topic:

- Opacity
- Dropdowns
- Box Sizing
- Gradients
- Transforms
- Homework - 10: Create 1 Navigation Bar Including Dropdowns
- Homework - 11: Create 1 Product Card Using Gradients

### box size problem:

```css
.box-1{
    width:300px;
    height:400px;
    background-color:crimson;
    /* padding: 20px; */
    /* border: 10px solid black; */
}
.box-2{
    width:300px;
    height:400px;
    background-color:crimson;
}
```

### solution is to use box sizing property

```css
.box-1{
    width:300px;
    height:400px;
    background-color:crimson;
    /* padding: 20px; */
    border: 10px solid black;
    /*box sizing default is content-box */
    box-sizing: border-box;
}
.box-2{
    width:300px;
    height:400px;
    background-color:crimson;
}
```

### Universal selector :

```css
*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}
```

### Column:

```css
p{
    font-family: sans-serif;
    font: 1.3em;
    line-height: 1.3;
    text-align: justify;
    padding: 25px;
    column-count: 3;
    column-gap: 30px;
    column-rule: 1px solid rgba(0 0 0 /0.3);
}
```

### Filter:

```css
.image-container{
    width:350px;
    height:500px;
    overflow: hidden;
    margin: 100px auto;
    filter: drop-shadow(5px 5px 10px black);
}
.image-container img{
    width:100%;
    /* filter: blur(5px); */
    /* filter: brightness(3); */
    /* filter: contrast(2); */
    /* filter: grayscale(0.5); */
    /* filter: hue-rotate(30deg); */
    /* filter: invert(2); */
    /* filter: opacity(0.3); */
    /* filter: saturate(2); */
    filter: sepia(3);

}
```

### Middle position :

```css
div {
  width: 400px;
  height: 400px;
  background-color: crimson;
  /* middle position  */
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
```

### Transform :

```css
div {
  width: 400px;
  height: 400px;
  background-color: crimson;
  /* middle position  */
  /* position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%); */
  /* transform: rotate(50deg); */
  /* transform: scale(1.5); */
  /* transform: scale(1.5); */
  /* transform: skew(30deg); */
  /* transform: translateX(100px); */
  /* transform: translateY(100px); */
  transform: translate(100px,100px);
}
```

### Gradient:

- Linear Gradient (min 2 color)
Radial gradient

### Linear Gradient different ways :

```css
/* background-image: linear-gradient(deeppink, purple);
		background-image: linear-gradient(to left , deeppink, purple);
    background-image: linear-gradient(to right , deeppink, purple);
    background-image: linear-gradient(to top , deeppink, purple);
    background-image: linear-gradient(to bottom , deeppink, purple); 
		background-image: linear-gradient(to left top , deeppink, purple);*/
    background-image: linear-gradient(35deg , deeppink, purple);
```

### Linear Gradient different ways :

```css
/* background-image: radial-gradient(closest-side at 200px 100px, tomato , crimson); */
    background-image: radial-gradient(farthest-corner at 0px 400px, tomato , crimson);
```

### Gradient:

```html

<body>
    <div></div>
</body>
```

```css
div {
  width: 400px;
  height: 400px;
  /* background-color: deeppink; */
  border: 1px solid lightgray;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  /* background-image: linear-gradient(deeppink, purple);
	background-image: linear-gradient(to left , deeppink, purple);
    background-image: linear-gradient(to right , deeppink, purple);
    background-image: linear-gradient(to top , deeppink, purple);
    background-image: linear-gradient(to bottom , deeppink, purple); 
	background-image: linear-gradient(to left top , deeppink, purple);
    background-image: linear-gradient(35deg, deeppink, purple);
    background-image: linear-gradient(35deg, deeppink 60%, purple 80%);
    background-image: repeating-linear-gradient(35deg, deeppink 60%, purple 80%);*/
    
    /* background-image: radial-gradient(closest-side at 200px 100px, tomato , crimson); 
    background-image: radial-gradient(farthest-corner at 0px 400px, tomato , crimson);*/
}
```

### Simple animation (using transition):

```html
<body>
    <div class="parent">
        <div class="child"></div>
    </div>
</body>
```

```css
.parent{
    width: 100%;
    height: 75vh;
    background-color: crimson;
}
.child{
    width: 50px;
    height: 50px;
    background-color: mediumaquamarine;
    transition: transform 0.5s linear;
}
.parent:hover .child{
    transform: translateX(800px);
}
```

### Animation:

- `animation: name duration timing-function delay iteration-count direction fill-mode;`

Keyframe Animation :

```html
<body>
    <div class="parent">
        <div class="child"></div>
    </div>
</body>
```

```css
.parent{
    width: 100%;
    height: 500px;
    background-color: crimson;
    position: relative;
}
.child{
    width: 50px;
    height: 50px;
    border-radius: 50%;
    background-color: mediumaquamarine;
    animation: kick 5s linear  0s infinite;
    position: absolute;
    bottom: 0;
}
/* @keyframes kick {
    from {
        transform: translate(0,0);
    }
    to {
        transform: translate(500px,0);
    }
} */
/*----------also it can be written like this--------------*/
@keyframes kick {
    0% {
        transform: translate(0,0);
    }
    50% {
        transform: translate(500px,0);
    }
    75% {
        transform: translate(500px,-400px);
    }
    100%{
        transform: translate(0,0);
    }
}
```

### Typewriter animation using animation steps() forwards

```html
<body>
    <h1>Typewriter animation go.....!</h1>
</body>
```

```css
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  scroll-behavior: smooth;
}
body {
  font-family: "Courier New", Courier, monospace;
  text-align: center;
  background-color: antiquewhite;
}
h1 {
  color: #444;
  position: relative;
  display: inline-block;
  margin-top: 300px;
}
h1::before,
h1::after {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
}
h1::before {
  background-color: antiquewhite;
  animation: typewriter 6s steps(29) forwards 1s;
}
h1::after{
    width: 0.1em;
    background-color: #444;
    animation: typewriter 6s steps(29) forwards 1s,
    blink 0.75s steps(29) forwards 1s infinite;
}
@keyframes typewriter {
  to {
    left: 100%;
  }
}
@keyframes blink {
    to{
        background-color: transparent;
    }
}
```
</details>