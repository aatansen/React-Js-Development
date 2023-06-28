"use strict";

const resturant = {
    name: "Burger House 420",
    location: "Puran Dhaka,Dhaka,Bangladesh",
    categories: ["Italian", "Vegeterian", "Local", "Organic"],
    starterMenu: [
        "Chicken Cheese Burger",
        "Beef Burger",
        "Garlic Bread",
        "Italian Spicy Pasta",
        "Bagdadi Shahi Biriyani",
        "Mexican Chilli Chicken",
    ],
    mainMenu: ["Burger", "Pizza", "Fajita", "French Fries"],
    openingHours: {
        sun: {
            open: 10,
            close: 22
        },
        fri: {
            open: 9,
            close: 23
        },
        wed: {
            open: 11,
            close: 22
        },
    },

    order: function (starterIndex, mainIndex) {
        return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
    },
    orderDelivery: function ({ starterIndex = 0, mainIndex = 0, time = "10:00 PM", address = "Unknown" }) {
        console.log(`${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`);

    },
    orderBurger: function (ing1, ing2, ing3) {
        console.log(`Here is your delicious burger with ${ing1},${ing1},${ing2} and ${ing3}.`);
    },
};

// destructuring arrays 
// old way
const arr = [1, 2, 3];
const a = arr[0];
const b = arr[1];
const c = arr[2];

// new way 
const [x, y, z] = arr;
console.log(x, y, z);

const arr2 = [5, 6, 7];
const [m, n, o] = arr2;
console.log(m, n, o);

const [main, secondary] = resturant.categories;
console.log(main);


// Switching variable 
// old way 
let first = 10;
let second = 20;
let temp = first;
first = second;
second = temp;
console.log(first, second);

// new way 
[first, second] = [second, first];
console.log(first, second);

// Store return value
const [firstOrder, secondOrder] = resturant.order(2, 0);
console.log(firstOrder, secondOrder);

//nested destructuring
const nested = [2, 4, [5, 6]];
const [i, j, [k, l]] = nested;
console.log(i, j, k, l);

//default values
const arrNew = [10, 30];
const [p = 1, q = 1, r = 1, s = 1] = arrNew;
console.log(p, q, r, s);

//destructuring object
const { categories, mainMenu, starterMenu } = resturant;
console.log(categories, mainMenu, starterMenu);

// changing object name 
const { name: resturantName, location, openingHours } = resturant;
console.log(resturantName, location, openingHours);

const { sun: sunday, wed: wednesday, fri: friday } = resturant.openingHours;
console.log(sunday, wednesday, friday);

// object default value 
const { mainNai = [] } = resturant;
console.log(mainNai);

// mutating variables 
let f = 100;
let g = 200;

const obj = { f: 20, g: 30 };
({ f, g } = obj);
console.log(f, g);

// nested object
const tumpa = {
    friends: {
        first2: "Sabrina",
        second2: "Shohan",
    },
};
// const {first2,second2} = tumpa.friends
const { friends: { first2, second2 } } = tumpa;
console.log(first2, second2);

// destructuring object 2
resturant.orderDelivery({
    starterIndex: 2,
    mainIndex: 0,
    time: "06:20 PM",
    address: "Uttara,Dhaka",

});

resturant.orderDelivery({
    starterIndex: 1,
    address: "Dhanmondi 27"
});

// spread operators(...arr)
const arr3 = [33, 44, 55, 66];
const badArrCopy = [11, 22, arr3[0], arr3[1], arr3[2], arr3[3]];
console.log(badArrCopy);

const goodArrCopy = [11, 22, ...arr3];
console.log(goodArrCopy);

const newMenu = [...resturant.mainMenu, "Noodles", "Ramen"];
console.log(newMenu);

// copy array 
const mainMenuCopy = [...resturant.mainMenu];
console.log(mainMenuCopy);

// join array 
const allFoods = [...resturant.mainMenu, ...resturant.starterMenu];
console.log(allFoods);

// iterables: arrays,strings,maps,sets 
// object not iterable

const gameName = "Callof Duty: Modern Warfare";
console.log(...gameName, " ", "2022");
const str = "Tansen";
console.log(...str);
// console.log(`My name is ${...str}`); //error

const ingredients = ["Tomato", "Chicken", "Letture"];
resturant.orderBurger(...ingredients);

// copying objects 
// old way (both will share same memory location)
/*
const newRestaurant = resturant;
newRestaurant.name = "Burger Remix"
console.log(resturant);
console.log(newRestaurant);
*/

// new way 
const newRestaurant = { ...resturant, founder: "Amzad" };
newRestaurant.name = "Burger Remix";
console.log(resturant);
console.log(newRestaurant);