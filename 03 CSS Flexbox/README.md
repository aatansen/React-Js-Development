<details>
<summary>Flexbox-Day-01</summary>

### Topic:

- Flexbox
- Project - 01: Create Your First Full Project Using Flexbox
- Media Queries

### Flexbox

Parent Property :

```css
display: flex;
```

### Flex direction:

- `flex-direction: row;`  (default)
- Flex Main Axis ➡
- Flex Cross Axis ⬇
- But when direction is mentioned
    - `flex-direction: column;`
    - Flex Main Axis ⬇
    - Flex Cross Axis ➡
    - `flex-direction: row-reverse;`
    - Flex Main Axis ⬅
    - Flex Cross Axis ⬇
    - `flex-direction: column-reverse;`
    - Flex Main Axis ⬆
    - Flex Cross Axis ➡

### Justify content

- it work on main axis
- how parent will hold the child in main axis:
    - `justify-content: flex-start; (default)`
    - `justify-content: flex-end;`
    - `justify-content: space-between;`
    - `justify-content: space-around;`
    - `justify-content: space-evenly;`

### Align items

- works on single row/column
- it work on cross axis
    - `align-items: stretch; (default)`
    - `align-items: flex-start;`
    - `align-items: flex-end;`
    - `align-items: center;`
    - `align-items: baseline;` (works on line , align different shape of box on line)

### Flex-wrap

- it will go to new line if there is no space for child
    - `flex-wrap: wrap;`

### Align content

- Works on multiple row/column
    - `align-content: space-around;`
    - `align-content: space-between;`
    - `align-content: flex-start;`
    - `align-content: flex-end;`
    - `align-content: center;`

### Child Property

```html
<body>
    <div class="container">
        <div class="item one">1</div>
        <div class="item two">2</div>
        <div class="item three">3</div>
        <div class="item four">4</div>
    </div>
</body>
```

```css
*{
    margin: 0;
    padding: 0;
    box-sizing: 0;
}
body{
    background-color: azure;
}
.container{
    width: 900px;
    height: 500px;
    background-color: midnightblue;
    margin: 100px auto 0;
    border-radius: 5px;
    display: flex;
    /* flex-wrap: wrap; */

}
.item{
    flex-basis: 500px;
    width: 100px;
    height: 100px;
    background-color: lightskyblue;
    border-radius: 5px;
    border: 2px solid black;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 2rem;
   /* flex : grow shrink basic */
    /* flex : 1 0 250px; */
}
.one{
    order: 0;
    flex-grow: 0;
    flex-shrink: 1;
}
.two{
    order: 0;
    flex-grow: 0;
    flex-shrink: 1;
}
.three{
    order: 0;
    flex-grow: 0;
    flex-shrink: 1;
}
.four{
    order: 0;
    flex-grow: 0;
    flex-shrink: 1;
}
```

### Order

- highest order will be on last position
    - `order: 0;`

### Flex grow

- how much space will be taken in other division order
    - `flex-grow: 2;`

### Flex shrink

- more like manual wrapping but shrink (more value means that child will be shrink more)
- if flex wrap is in parent, flex shrink wont work
    - `flex-shrink: 1;` (default)

### Flex basis

- every child will get same space
- parent flex wrap,child max-width will impact
    - `flex-basis: 500px;`

### Flex property (short hand property) :

- useful in child common class
- flex wrap & width off
    - `flex : grow shrink basic`
    - `flex : 1 0 250px;`

</details>

<details>
<summary>Flexbox-Day-02</summary>

### Topic:

- Photography Website (flexbox, grid,positions,root css etc)

### Iconscount CDN:

```css
https://unicons.iconscout.com/release/v4.0.0/css/line.css
```

### Font (Poppins)

```css
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@100;200;300;400;500;600;700;800;900&display=swap');
body{
    font-family: 'Poppins', sans-serif;
}
```

### Custom variable:

- Most useful to change whole website color,style etc

### targeting root css:

```css
:root{
    --name : value;
}
```

### example:

```css
:root{
    --my-color:red;
    --my-border-radius:10px;
}
.test{
    background-color: var(--my-color);
    width: 100px;
    height: 100px;
    border-radius: var(--my-border-radius);
}
```

### flex vs grid :

- centering:
    - in flex we need to have x, y direction which is justify-content(x) & align-items(y)
    - but in grid we have only one property place-items(x,y both)

```css
nav{
    width: 100vh;
    height: 5rem;
    /* display: flex;
    justify-content: center;
    align-items: center; */
    
    /* same thing but in two line */
    display: grid;
    place-items: center;
}
```

</details>