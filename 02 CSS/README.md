<details>
<summary>CSS-Day-01</summary>

### Topic:
01.	Introduction to CSS and Syntax Explanations
02.	Different Ways to Add Styles
03.	Comments
04.	Colors (Named Colors, RGB, HEX, HSL, RGBA and HSLA)
05.	Background Colors
06.	Margins
07.	Padding
08.	Units
09.	Height and Width
10.	Borders
11.	CSS Box Model

CSS(**Cascading Style Sheets**) Introduction:

inline css:

```html
<body>
    <!-- * inline way -->
    <h1 style="color:red">Lorem ipsum dolor sit amet consectetur Voluptate</h1>
</body>
```

internal css:

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

external css:

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

color scheme:

```
rgb(red,green,blue)
rgba(red,green,blue,alpha)

Hex Color #rrggbb
Double hex can be used once:
#aaffbb --> #afb

hls(hue,lightness,saturation)
```

coloring tag:

```css
h2{
    color: rgb(21, 255, 0);
    background-color:antiquewhite;
}
```

coloring id:

```css
#author-date{
    color: rgb(128, 0, 43);
    background-color: black;
}
```

coloring class:

```css
.color-paragraph {
    color: crimson;
}
```

styling specific text from a big paragraph <span> is used:

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

Margin in css:

```css
margin: 100px; /*four sides*/ 
margin: 100px 10px; /*top-bottom left-right; */
margin: 200px 100px 300px 50px; /*top-right-bottom-left  */
```

CSS box Model from Inspect
</details>

<details>
<summary>CSS-Day-02</summary>

### Topic:
12.	Outline
13.	Typography (Color, Background Color, Alignment, Decoration, Transformation and Spacing)
14.	Fonts (Font Family, Font Style, Font Size and Google Fonts)
15.	Font Awesome Icons
16.	Links
17.	Buttons
18.	Homework - 04: Create 10 Awesome Buttons and A List
19.	Lists
20.	Display and Visibility 

Outline:

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

Default font size:

```css
.wrapper p{
    font-size: 1rem; or 16px
}
/* 1rem == 16px */
```

Pixel vs rem vs em

```
16px = 1rem
but for em it works different relatively to that selected tag:
example 
for p , 1em = 16px
for h1 it is different.
```

Block vs Inline element:

```
A block-level element always takes up the full width available.
example : <p>

An inline element only takes up as much width as necessary.
example : <a>
***margin works only left-right***
```

inline behave as block element—>inline-block element:

```css
display: inline-block
```

Importing google font:

```css
/* select font and copy import code */
<style> @import url('https://fonts.googleapis.com/css2?family=Lato:wght@400;700;900&display=swap'); </style>
```

Link State:

```
1. Link
2. Visited
3. Active
4. Hover
```

pseudo class:

```css
a:link{
    
}
```
</details>

<details>
<summary>CSS-Day-03</summary>

### Topic:
21.	Max-Width, Min-Width, Max-Height and Min-Height
22.	Backgrounds (Image, Repeat, Size, Attachment and Position)
23.	Homework - 05: Create A Parallax Website
24.	Navigation Bar
25.	Homework - 06: Create 5 Navigation Bars

images:

```
*When an image is style with width it will auto resize height

```

view port height:

```css
.car-bg-container{
    background-image: url(https://images.unsplash.com/photo-1552176625-e47ff529b595?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=869&q=80);
    width: 100%;
    height: 100vh; /* <--- */
}
```

parallax effect:

```css
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
26.	Shadow Effects
27.	Text Effects
28.	Homework - 07: Create 3 Cards
29.	Tables
30.	Homework - 08: Create 2 Tables

Shadows:

```css
/* Mostly used for box */
/* box-shadow: x y blur colour; */
.box{
    width: 300px;
    height: 300px;
    background-color: aliceblue;
    box-shadow: 1px 1px 1px rgba(0,0,0,0.1);
    margin: 100px auto;
    border-radius: 10px;
}
```

neumorphism shadow:

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

Targeting nth child:

```css
tr{
    border-bottom: 1px solid rgba(0,0,0,0.1);
    cursor: pointer;
}
tr:nth-child(even){
    background-color: whitesmoke;
}
```

github:

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
31.	Border Images
32.	Position and Z-Index
33.	Overflow
34.	Homework - 08: Create 2 Movie Cards

Position:

```css
1. Static - It is a default position of anything
2. Relative - position stay as it is
3. Absolute - it change its position
```

position change using position:

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

Z index:

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

Sticky Position:

```css
.logo h1{
    position: sticky;
    top: 0;
}
```

Box shadow:

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

neumorphism shadow inset:

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

Zoom effect and Color change on hover:

```css
.card-image img:hover{
    transform: scale(1.1);
    filter: grayscale(1);
}
```

Transition:

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

Font Awesome:

```bash
#font-awesome cdn:
https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.1/css/all.min.css
```

</details>
