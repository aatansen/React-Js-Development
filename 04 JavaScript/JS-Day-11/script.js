// Scoping 
// lexical scoping 
// scope: space or area or environment in which a certain variable is declared
// type of scope :  1.global scope, 2. function scope , 3. block scope 

const herName = "Tumpa"; //global scope

function doMath(x, y) {
    const sum = x + y; // function scope 
    return sum;
}

console.log(doMath(2, 3));


if (herName === "Tumpa") {
    const herName = "Rebecca"; //block scope
    console.log(herName);
} else {
    console.log(herName);
}

// scope chain 
const myName = "Tansen";
function first() {
    const age = 22;
    // console.log(job); // trying to access child variale
    if (age >= 18) {
        const NID = true;
        var password = true;
    }
    function second() {
        function five() {
            console.log(2n ^ 3);
        }
        function four() {
            console.log(2n ^ 2);
        }
        function third() {
            console.log(2n);
        }
        // console.log(1);
        // console.log(2);
        // console.log(n);
        const job = "Programmer";
        console.log(`${myName} is a ${age} years old ${job}.`);
    }
    second();
}
first();

// this 
const tumpaObj = {
    fullName: "Tumpa",
    birthYear: 1996,

    calAge: function () {
        console.log(this);
        return 2023 - this.birthYear;
    },

};
console.log(tumpaObj.calAge());
console.log(this);

const sabrinaObj = tumpaObj;
sabrinaObj.fullName = "Sabrina";
console.log(sabrinaObj, tumpaObj);

const computer = {
    clockSpeed: 3.9,

    // turboFan: function () {
        // console.log(this);
    //     return this.clockSpeed * 99;
    // },
    turboFan: () => {
        console.log(this); // this will point to window
        return this.clockSpeed * 99;
    },
};


console.log(computer.turboFan());