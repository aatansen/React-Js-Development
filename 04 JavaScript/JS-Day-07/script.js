// without array
const friend1 = "Shohan";
const friend2 = "Badhon";
const friend3 = "Eklas";
const friend4 = "Nasim";

// array (literal systax)
const friend = ['Shohan', 'Badhon', 'Eklas', 'Nasim'];

const years = [1991, 1993, 1995, 1999];

// array (array function)
const years2 = new Array(2001, 2003, 2005, 2009);

console.log(friend);
console.log(years);
console.log(years2);

console.log(friend[3]);

// array length 
console.log(friend.length);

// exercise 
const ageCalc = function (birthYear) {
    return 2023 - birthYear;
};

const age1 = ageCalc(years[0]);
console.log(age1);

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

if (lastBenchers.includes('Fahim')) {
    console.log("Fahim present in array");
} else {
    console.log("Not present");
}

// Exercise 
/*
2 teams : lionsClub, dragonClub
team members : 5 per team
lionsClub(14,13,17,15,16)
dragonClub(18,13,10,8,12)

conditions:
winning --> average jump distance >=15
draw --> lions === dragon, both team has >=15
*/

const scoreLions = (14 + 13 + 17 + 15 + 16) / 5;
// const scoreDragon = (18+13+10+8+12)/5
const scoreDragon = (14 + 13 + 17 + 15 + 16) / 5;

if (scoreLions === scoreDragon && scoreLions >= 15 && scoreDragon >= 15) {
    console.log("draw!!");
} else if (scoreLions > scoreDragon && scoreLions >= 15) {
    console.log("lionsClub Winner");
} else if (scoreDragon > scoreLions && scoreDragon >= 15) {
    console.log("dragonClub Winner");
} else {
    console.log("Nothing happens");
}
console.log(scoreDragon);
console.log(scoreLions);

// nested if 
if (scoreLions >= 15 && scoreDragon >= 15) {
    if (scoreLions === scoreDragon) {
        console.log("Draw!!");
    } else if (scoreLions > scoreDragon) {
        console.log("Lions winner");
    } else {
        console.log("Dragon winner");
    }
} else {
    console.log("Nothing happens");
}


// functions 
// function declaration 
function addTwo(a, b) {
    console.log(a + b);
}

// function expression
const addTwo2 = function (a, b) {
    console.log(a + b);
};

//arrow function
const addTwo3 = (a, b) => {
    console.log(a + b);
};

addTwo(1, 4);
addTwo2(2, 5);
addTwo3(3, 6);

// function calling function 

const foodCutter = (fruit) => fruit * 4;

const juiceMaker = (apples, bananas, oranges) => {
    const applePieces = foodCutter(apples);
    const bananaPieces = foodCutter(bananas);
    const orangePieces = foodCutter(oranges);
    const juice = (applePieces + bananaPieces + orangePieces) / 3;
    return `${juice}`;
};

const myJuice = juiceMaker(10, 24, 18);
const myJuiceInt = Math.trunc(myJuice);
console.log(myJuice);
console.log(myJuiceInt);

// currying function
function multi(a) {
    return function (b) {
        return function (c) {
            return function (d) {
                return function (e) {
                    return a * b * c * d * e;
                };
            };
        };
    };
}

console.log(multi(5)(4)(3)(2)(1));

// lamda calculus or lamda function declarations
const multiPro = (a) => (b) => (c) => (d) => (e) => a * b * c * d * e;
console.log(multiPro(5)(4)(3)(2)(1));

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










