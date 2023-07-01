"use strict";

// Creates a booking and adds it to the bookings array.
const bookings = [];
const creatBooking = function (roomNum, numGuest = 1, price = 500 * numGuest) {
    const booking = {
        roomNum,
        numGuest,
        price,
    };
    bookings.push(booking);
};

creatBooking("A202", 2, 1000);
creatBooking("B702", 4, 2000);
creatBooking("D502", 10);
creatBooking("E555", undefined, 2500);
console.log(bookings);

// value vs reference 
const flight = "B233";

const tansen = {
    name: "Tansen",
    passport: 56543225,
};

const checkIn = function (flightNum, passenger) {
    flightNum = "L345";
    passenger.name = "Mr. " + passenger.name;
    if (passenger.passport === 56543225) {
        console.log("Checked In");
    } else {
        console.log("Wrong Passport");
    }
    console.log(passenger);
};

checkIn(flight, tansen);
// JS does not have passing by reference, only passing by value (for object  - pass object reference as a value)

// Functions accepting callback function
// 1. first class function 
// 2. higher order function 
// 3. callback function

// Sawmill
// 1. first class function 
function logCutter(logs) {
    let logPieces = 0;
    for (const log of logs) {
        logPieces += log;
    }
    return logPieces;
}

function logCounter(logs) {
    return logs.length;
}

// 2 higher order function 
function sawmil(logs, fn) {
    console.log(`Operated by: ${fn.name}`);
    return fn(logs);

}
console.log(sawmil([12, 15, 21, 33, 4, 6, 7, 3, 7, 14], logCounter));
console.log(sawmil([12, 15, 21, 33, 4, 6, 7, 3, 7, 14], logCutter));

// Currying function (function returning functions)
function greet(greeting) {
    return function (name) {
        console.log(`${greeting}, ${name}`);
    };
}
greet("Good night")("Tansen");


// Lambda function 
function calcVat(rate) {
    return function (price) {
        return price + (price * rate);
    };
}

console.log(calcVat(.10)(250));

const calcVatArrow = rate => price => price + (price * rate);


console.log(calcVatArrow(0.10)(250));

// calling other function 
const tansenT = {
    airline: "Tansen T",
    code: "TT",
    bookings: [],
    book: function (flightNum, name) {
        console.log(`${name} booked a seat on ${this.airline}, flight ${this.code}${flightNum}`);
        this.bookings.push({
            flight: `${this.code}${flightNum}`,
            passengerName: `${name}`
        });
    },
};

const sadrilExpressAir = {
    airline: "Sadril Express Air",
    code: "SEA",
    bookings: [],
};

const tanishaWings = {
    airline: "Tanisha Wings",
    code: "TW",
    bookings: [],
};

tansenT.book.call(sadrilExpressAir, 332, "Shohan");
tansenT.book.call(tanishaWings, 765, "Kajal");

tansenT.book(432, "Nesnat");
tansenT.book(543, "Fahim");
console.log(tansenT.bookings);
console.log(sadrilExpressAir.bookings);
console.log(tanishaWings.bookings);

// apply (less used)
tansenT.book.apply(tanishaWings, [789, "Tanvir"]);
console.log(tanishaWings.bookings);

// bind 
const bookSadril = tansenT.book.bind(sadrilExpressAir);
const bookTanisha = tansenT.book.bind(tanishaWings);
const bookTansen = tansenT.book.bind(tansenT);

bookSadril(999, "Lima");
bookSadril(237, "Lama");
bookTansen(678, "Ayesha");
console.log(sadrilExpressAir.bookings);
console.log(tanishaWings.bookings);
console.log(tansenT.bookings);

// restaurant
const rest1 = {
    name: "Burger Villa",
    code: "BV",
    orders: [],
    foods: ["Burger", "Pizza", "Pasta", "Noodles", "French Fries"],
    orderFood: function (foodIndex = 0, foodCount = 1, name, address, time, price = 100 * foodCount) {
        console.log(`${name} ordered ${foodCount} ${this.foods[foodIndex]}s from ${address} at ${time} Price: ${price}`);

        this.orders.push({
            name: `${name}`,
            food: `${this.foods[foodIndex]}`,
            pieces: `${foodCount}`,
            price: `${price}`,
            address: `${address}`,
            time: `${time}`
        });
    }
};

rest1.orderFood(2, 5, "Tansen", "Dhaka", "10:00AM");

const rest2 = {
    name: "Pasta King",
    code: "BV",
    orders: [],
    foods: ["Burger", "Chilli Chicken Fries", "Pizza", "Pasta", "Noodles", "French Fries"],
};

const orderRest2 = rest1.orderFood.bind(rest2);
orderRest2(3, 7, "Tanisha", "Gazipur", "12:00AM");

console.log(rest2.orders);


// Immediately invoked function expression (IIFE)

const runOnce = function () {
    console.log("This won't run once");
};
runOnce();
runOnce();
runOnce();
runOnce();

// (function () {
//     console.log("This only run once");
// }())

(() => {
    console.log("This also run once");
})();

// private 
{
    const privateNumber =200
}
console.log(privateNumber);






