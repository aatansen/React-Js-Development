<details>
<summary>HTML-Day-01</summary>

html simple template:

```html
<html>

<head> </head>

<body> </body>

</html>
```

Heading(h1) ,Paragraph(p) ,Break(br), Horizontal Rule(hr) tag:

```html
<html>

<head>

</head>

<body>
    <h1>This is first heading</h1>
    <h2>This heading 2</h2>
    <h2>This heading 3</h2>

    <p>This is a paragraph tag</p>
    <p>This is another paragraph</p>
    <hr>
    <p>I am a student <br> I am also a web developer.</p>
</body>

</html>
```

Preformatted text(pre) tag:

```html
<html>

<head>

</head>

<body>
<pre>
    Deep into that darkness peering,

    Long I stood there, wondering, fearing,
    
    Doubting, dreaming dreams no mortals
    
    Ever dared to dream before;
    
    But the silence was unbroken,

</pre>
</body>

</html>
```

Bold(b,Strong), italic(i,em),small,subscript()sub ,superscript(sup) tag:

```html
<html>

<head>

</head>

<body>
    <b> Bold tag</b>
    <br>
    <strong>Strong tag</strong> <!--semantic tag -->
    <br>
    <i>This is italic tag</i>
    <br>
    <em>This is emphasized tag</em> <!--semantic tag -->
    <br>
    <small>this is small tag</small>
    <p>CO<sub>2</sub></p> <!--subscript tag -->
    <p>a<sup>2</sup>+2ab+b<sup>2</sup></p> <!-- superscript tag -->
</body>

</html>
```

Underline(u,ins) , Delete(del), Abbreviation(abbr),Address tag:

```html
<html>

<head>

</head>

<body>

    <u>underline tag</u>
    <br>
    <ins>This is an inserted tag</ins> <!--semantic tag -->
    <br>
    <del>delete tag</del>

    <p> <abbr title="Javascript">JS</abbr></p>

    <address>
        Street Address - 834 Rockford Road <br>
        City - Bedford <br>
        State - MA <br>
        State - Massachusetts
    </address>

</body>

</html>
```

Blockquote,Inline quote(q),cite(tag & attribute) tag and comment,a(href) tag :

```html
<html>

<head>

</head>

<body>

    <blockquote cite="https://en.wikipedia.org/wiki/Spider-Man">
        Spider-Man is a superhero appearing in American comic books published by Marvel Comics. Created by writer-editor
        Stan Lee and artist Steve Ditko, he first appeared in the anthology comic book Amazing Fantasy #15 (August 1962)
        in the Silver Age of Comic Books.
    </blockquote>

    <p>
        <cite>Spiderman</cite> is Created by Stan Lee.
    </p>

    <p><q>What a beautiful day</q></p>
    <!-- comment  -->
    <br>
    <a href="https://en.wikipedia.org/wiki/Main_Page" target="_blank">Wikipedia</a>

</body>

</html>
```
</details>

<details>
<summary>HTML-Day-02</summary>

Bookmark (id,href):

```html
<html>

<head>

</head>

<body>
    <a href="#bottom">Go to bottom</a>
    <h1 id="top">An easy on something</h1>
    <p>Thousands of text</p>
    <h1>An easy on another</h1>
    <p>Thousands of text</p>
    <p id="bottom">This is bottom</p>
    <a href="#top">Go to top</a>
</body>

</html>

```

Image and image with link:

```html
<html>
    <head>

    </head>
    <body>
        <img src="https://www.humanesociety.org/sites/default/files/2022-10/cat-583009.jpg" width="500px" alt="cat">

        <a href="https://www.google.com">
            <img src="https://www.google.com/images/srpr/logo4w.png" alt="Google">
        </a>
    </body>
</html>
```

Heading:

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
    
</body>
</html>
```

Blog with menu:

```html
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>My Blog</title>
</head>

<body>
    <h1>Welcome to my blog</h1>
<h3>Blog Menu</h3>
<a href="#first">Read First Blog</a>
<a href="#second">Read Second Blog</a>
<a href="#third">Read Third Blog</a>
<a href="#fourth">Read Fourth Blog</a>
    <h2 id="first">A New Programming Language</h2>
    <p><small>Author - Ali | Published - 20-12-2022</small></p>
    <p>details.......</p>
    <a href="#">Read full blog</a>
    <h2 id="second">A New Programming Language</h2>
    <p><small>Author - Ali | Published - 20-12-2022</small></p>
    <p>details.......</p>
    <a href="#">Read full blog</a>
    <h2 id="third">A New Programming Language</h2>
    <p><small>Author - Ali | Published - 20-12-2022</small></p>
    <p>details.......</p>
    <a href="#">Read full blog</a>
    <h2 id="fourth">A New Programming Language</h2>
    <p><small>Author - Ali | Published - 20-12-2022</small></p>
    <p>details.......</p>
    <a href="#">Read full blog</a>
</body>

</html>
```

List:

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
    <!-- list -->
    <!-- order list  -->
    <ol>
        <li>Arceus</li>
        <li>Mewtwo</li>
        <li>Giratina</li>
        <li>Dialga</li>
        <li>Palkia</li>
    </ol>
    <!-- unrorder list  -->
    <ul>
        <li>Pikachu</li>
        <li>Suicune</li>
        <li>Charizard</li>
        <li>Rayquaza</li>
        <li>Gengar</li>
    </ul>
</body>
</html>
```

Table:

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
    <table border = 1px style = "border-collapse: collapse;">
        <caption>Marks</caption>
        <thead>
        <tr>
            <th>Name</th>
            <th>Roll</th>
            <th>Marks</th>
        </tr>
        </thead> 
        <tbody>
        <tr> <!-- row data 1 -->
            <td>Almiz</td>
            <td>23</td>
            <td>33</td>
        </tr>
        <tr> <!-- row data 2 -->
            <td>Almiz</td>
            <td>23</td>
            <td>33</td>
        </tr>
        <tr> <!-- row data 3 -->
            <td>Almiz</td>
            <td>23</td>
            <td>33</td>
        </tr>
        <tr> <!-- row data 4 -->
            <td>Almiz</td>
            <td>23</td>
            <td>33</td>
        </tr>
        </tbody>
        <tfoot></tfoot>
    </table>
</body>
</html>
```

Nested-Table:

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
    <table border="1px" style="border-collapse: collapse;">
    <caption>Football Team</caption>
        <thead>
        <tr>
            <th rowspan="2">Serial No.</th>
            <th colspan="2">Name</th>
            <th colspan="2">club</th>
            <th rowspan="2">Fees</th>
            <th rowspan="2">Skills</th>
        </tr>
        <tr>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Previous Club</th>
            <th>Current Club</th>
        </tr>
    </thead>
    <tbody>
        <td>01</td>
        <td>Lionel</td>
        <td>Messi</td>
        <td>FCB</td>
        <td>PSG</td>
        <td>£94m</td>
        <td>FW</td>
    </tbody>
    <tbody>
        <td>02</td>
        <td>Lionel</td>
        <td>Messi</td>
        <td>FCB</td>
        <td>PSG</td>
        <td>£94m</td>
        <td>FW</td>
    </tbody>
    </table>
</body>
</html>
```
</details>

<details>
<summary>HTML-Day-03</summary>
favicon (can be used before or after title):

Shortcut--> link:favicon

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link rel="shortcut icon" href="https://img.icons8.com/dotty/80/null/pixel-cat.png" type="image/x-icon">
</head>
<body>
    
</body>
</html>
```

using icons8:

```
*search any icon
*select icon
*click on download
*select {Link (CDN)}
*now copy {Paste this fragment into your HTML} section
```

Audio tag:

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Favicon , Audio & Video</title>
    <link rel="shortcut icon" href="https://img.icons8.com/dotty/80/null/pixel-cat.png" type="image/x-icon">
</head>
<body>
    <h1>Audios & Videos....</h1>
    <audio src="./audio/retro.wav" controls autoplay loop muted>
        your browser doesn't support audio <!-- If a browser does not support audio this will show up  -->
    </audio>
</body>
</html>
```

Video Tag:

```html
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Favicon , Audio & Video</title>
    <link rel="shortcut icon" href="https://img.icons8.com/dotty/80/null/pixel-cat.png" type="image/x-icon">
</head>

<body>
    <h1>Audios & Videos....</h1>
    <video src="./video/nature.mp4" controls width="300px" autoplay loop muted>
        your browser doesn't support video <!-- If a browser does not support video this will show up  -->
    </video>
</body>

</html>
```

Iframe Tag:

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
    <iframe src="https://en.wikipedia.org/wiki/Sparrow" width="500px" height="300px" frameborder="0"></iframe>
    
    <!-- Youtube  -->
    <iframe width="560" height="315" src="https://www.youtube.com/embed/jHWKtQHXVJg" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
</body>
</html>
```

Semantic Shortcut:

```html
article*4>h2{Blog title - $}+p{Author: A-$ | Published: B-$}+p{This is blog body...}+a[href="#"]{Read more}
```

entity - copyright:

```html
<p>&copy;</p>
```

Form radio & checkbox difference:

```html
<!-- Can Choose single if name = similar -->
<p>Select your gender: 
            <input type="radio" name="gender" id="">Male
            <input type="radio" name="gender" id="">Female
</p>
<!-- Can Choose multiple if name = different -->
<p>
            Select your languages and frameworks:
            <input type="radio" name="lang" id="">JS
            <input type="radio" name="frame" id="">React
</p>

<!-- on the otherhand check box can be choose all available content -->
```

field set is used in form when there is many section using legend to organized it more

```html
<fieldset>
            <legend>Personal Informations...</legend>
            <p>First Name: <input type="text" name="first-name" id="" required></p>
            <p>Last Name: <input type="text" name="last-Name" id="" required></p>
            <p>Email: <input type="email" name="email" id="" placeholder="example@gmail.com" required></p>
            <p>Phone number: <input type="tel" name="" id=""></p>
            <p>Password: <input type="password" name="" id=""></p>
            <p>Select your gender:
                <input type="radio" name="gender" id="">Male
                <input type="radio" name="gender" id="">Female
            </p>
        </fieldset>
```
</details>