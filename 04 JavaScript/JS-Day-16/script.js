"use strict";
// Maps
const rest = new Map();
rest.set("name", "Pizza Hutt");
rest.set(1, "Dhaka");
rest.set(2, "Chittagong");
rest.set("categories", ["Italian", "Pizzeria", "Vgetarian", "Organic"]).set("open", 10).set("close", 22).set(true, "we are open").set(false, "we are close");
console.log(rest);
console.log(rest.get("name"));

const time = 21;
console.log(rest.get(time > rest.get("open") && time < rest.get("close")));

console.log(rest.has("categories"));

rest.delete(2);
console.log(rest);
// rest.set([1,2],"array") // in order to get this we need to store it

const arr = [1, 2];
rest.set(arr, "array");
console.log(rest.get(arr));

console.log(rest);

const lang = new Map([
    [1, "C"],
    [2, "C++"],
    [3, "java"],
    [4, "JavaScript"],
    [5, "Python"],
    [6, "C#"],
]);
console.log(lang);

for (const [key, value] of lang) {
    console.log(`${key}: ${value}`);
}



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

// object to map 
const hours = new Map(Object.entries(openingHours));
console.log(hours);

console.log(...lang);
console.log(...lang.keys());
console.log(...lang.values());

// String method
const station = "Pahartoli Station";
const train = "T678 Provati";

console.log(train[0]);
console.log(train[1]);
console.log("Tansen"[0]);
console.log(station.length);

console.log(station.indexOf("P"));
console.log(station.lastIndexOf("a"));

// slice  - ending index not included
console.log(station.slice(10));
console.log(station.slice(0, 9));

console.log(station.slice(0, station.indexOf(" ")));
console.log(station.slice(station.indexOf(" ") + 1));

console.log(station.slice(1, -1));

// last elemet 
console.log(station[station.length - 1]);
console.log(station.at(-1));
console.log(station.slice(-1));

const checkWindowSeat = function (seatNumber) {
    // W = window seat
    // M = Middle seat
    // C = Cabin seat
    // const slicedSeatNum = seatNumber.slice(-1)
    const slicedSeatNum = seatNumber.slice(2, 3);
    console.log(slicedSeatNum);
};

// checkWindowSeat("22W")
// checkWindowSeat("23M")
// checkWindowSeat("24C")
// checkWindowSeat("76W")
// checkWindowSeat("44M")
checkWindowSeat("22W11");
checkWindowSeat("23M22");
checkWindowSeat("24C33");
checkWindowSeat("76W44");
checkWindowSeat("44M55");

// object - string
console.log(typeof ("Tansen")); //string
console.log(typeof new String("Tansen")); //object
console.log(typeof new String("Tansen").slice(0)); //string

console.log(station.toLowerCase());
console.log(station.toUpperCase());

// trim 
function normalizedemail(email) {
    const normalizedemail = email.toLowerCase().trim();
    return normalizedemail;
}

console.log(normalizedemail("     Tansen@gmail.com    "));

// replace 
const jutaPriceBD = "500TK";
const jutaPriceUSD = jutaPriceBD.replace("TK", "$");
console.log(jutaPriceBD);
console.log(jutaPriceUSD);

// regular expression (replace all)
const warningMsg = "Beware of Trojan.99! Trojan.99! Trojan.99!";
// const warningMsgCorrent = warningMsg.replaceAll(".", " v")
const warningMsgCorrent = warningMsg.replace(/.99/g, " v99")

console.log(warningMsgCorrent);

const message ="bad weather!"
console.log(message.repeat(10));

function planeInLine(num){
    console.log(`There are ${num} planes in line! ${"✈".repeat(num)}`);
}
planeInLine(10)
planeInLine(5)
planeInLine(6)
planeInLine(3)

// split and join 
console.log("it+is+a+very+warm+day".split("+"));

const splitedName = "Md Alahi Almin Tansen".split(" ")
const joinName = splitedName.join(" ")
console.log(joinName);