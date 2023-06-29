"use strict";

const openingHours = {
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
};

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
    openingHours,
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
    orderPizza: function (mainIng, ...otherIng) {
        console.log(mainIng);
        console.log(otherIng);
    },
};
// rest pattern and parameters - left side of = sign
// Spread - right side of = sign
// 1. destructuring 

// spread 
const arr = [1, 2, ...[3, 4]];
console.log(arr);

// rest 
const [a, b, ...others] = [1, 2, 3, 4, 5, 6, 7, 8, 9];
console.log(a, b);
console.log(others);

const [x, , y, ...friends] = ["Rahat", "Shohan", "Tumpa", "Sabrina", "faysal"];
console.log(x, y, friends);

// rest - spread 
const [burger, , pasta, ...otherFood] = [...resturant.mainMenu, ...resturant.starterMenu];
console.log(burger, pasta, otherFood);

// object 
const { fri, ...otherDay } = resturant.openingHours;
console.log(fri, otherDay);

// 2. function (rest perameter)
const add = function (...numbers) {
    let sum = 0;
    for (let i = 0; i < numbers.length; i++) {
        sum += numbers[i];
    }
    console.log(sum);
};
add(4, 5, 2, 3);

const arr2 = [33, 2, 4, 5];
add(...arr2);

resturant.orderPizza("Mushrooms", "Onions", "Spinach");


// Short circuiting 
// OR || if all true first true will be the output ; otherwise last false will be output
console.log(3 || "Tansen");
console.log("" || "Shohan");
console.log(false || 0);
console.log(undefined || null);
console.log(undefined || 0 || "" || "Tansen" || 23 || null);
console.log(false || true);
console.log(0 || "");

const guests = resturant.guests ? resturant.guests : 20;
console.log(guests);

const guests2 = resturant.guests || 30;
console.log(guests2);

const founder = resturant.founder || "Amzad";
console.log(founder);

// And && - if all true last one will be output ; otherwise last false will be output
console.log(0 && "Tansen");
console.log(7 && "Spiderman");
console.log("TT" && "Spidey" && null && 0 && " ");
console.log(false && true);
console.log("Fahim" && 12 && " " && 22 && true && undefined);

// practical example 
if (resturant.orderPizza) {
    resturant.orderPizza("Mashrooms", "Onions", "Tomatoes");
}
// similarly using && short circuit
resturant.orderPizza && resturant.orderPizza("Mashrooms", "Onions", "Tomatoes");

// Nullish coalescing operator
// nullish value = null,undefined  (0,'' not nullish value)
resturant.guests = 0;
const guests3 = resturant.guests ?? 20;
console.log(guests3);

// Logical assignment operators
const rest1 = {
    name: "Pizza Club",
    guests: 20,
};
const rest2 = {
    name: "Food Club",
    owner: "Tansen",
};

// OR 
rest1.guests = rest1.guests || 10;
rest2.guests = rest2.guests || 30;

// more shortly(Logical assignment operators):
rest1.guests ||= 10;
rest2.guests ||= 10;

console.log(rest1.guests);
console.log(rest2.guests);

// For of
const arr3 = [1, 2, 3, 4, 5, 6, 7, 8, 9];

for (let i = 0; i < arr3.length; i++) {
    console.log(arr3[i]);
}
console.log("/////////////");
for (const number of arr3) {
    console.log(number);
}

const menu = [...resturant.mainMenu, ...resturant.starterMenu];

for (const [index, food] of menu.entries()) {
    console.log(`${index + 1} : ${food}`);
}

// Optional chaining 
// console.log(resturant.openingHours.sat.open); //error
console.log(resturant?.openingHours?.sat?.open);
console.log(resturant.openingHours.fri.open);

const days = ["mon", "tue", "wed", "thu", "fri", "sat", "sun"];

for (const day of days) {
    const open = resturant.openingHours[day]?.open ?? "off-day";
    console.log(open);
}

// looping objects 
// - property names
// - property values
// - property entries

// - property names

const properties = Object.keys(resturant.openingHours);
console.log(properties);

for (const day of properties) {
    console.log(day);
}
// - property values
const values = Object.values(resturant.openingHours);
console.log(values);
for (const value of values) {
    console.log(value.open, value.close);
}

// - property  entries
const entries = Object.entries(resturant.openingHours);
console.log(entries);

for (const [key, value] of entries) {
    console.log(key);
    console.log(value);
}

// Sets - unique values, can't access by index

// Sets (advanced version of array/faster than array)
// object advanced version maps 
const foods = new Set(["Pizza", "Burger", "Pizza", "Pizza", "Pizza", "Noodles"]);
console.log(foods);
console.log(foods.size);
console.log(foods.has("Pizza"));
foods.add("Pasta");
console.log(foods);
foods.delete("Pasta");
console.log(foods);
for (const food of foods) {
    console.log(food);
}

const arr4 = [20, 20, 11, 20, 11, 32, 33, 43, 33, 32, 11, 10, 1, 20, 42, 22, 42, 22];
const uniqueArr = [...new Set(arr4)];
console.log(uniqueArr);