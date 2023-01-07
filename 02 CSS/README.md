<details>
<summary>CSS-Day-01</summary>

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
