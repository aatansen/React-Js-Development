// Truthy & Falsy Value
console.log(Boolean(0));
console.log(Boolean(""));
console.log(Boolean(undefined));
console.log(Boolean(null));
console.log(Boolean(NaN));
console.log(Boolean(1));

// Equality operators
const age = "20";
if (age === 20) {
    console.log("You are adult"); //when "=="
} else {
    console.log("You are too young"); //when "==="
}

// Nested Condition
const testAge = "17";
const testNID = false;
// const testBirthReg = true;
const testBirthReg = false;
const testPassport = false;

if (testAge === 18) {
    if (testNID) {
        if (testPassport) {
            console.log(`your age: ${testAge}, applicable for this job.`);
        }
    } else {
        console.log(`Absent!`);
    }

} else if (testAge !== 18) {
    if (testBirthReg) {
        console.log(`your age: ${testAge}, and you're note applicable. `);
    } else {
        console.log(`Absent!`);
    }
} else {
    console.log(`Absent!`);
}

// and , or (&&,||)
const pocketMoney = 200;
const timeLeft = 5;

if (pocketMoney >= 100 || timeLeft >= 6) {
    console.log("Eat Burger");

} else {
    console.log("No Burger");
}

// Leap year 
/*
year%400===0
year%4===0 &&year%100!==0
*/
let year = 2024;
if (year % 400 === 0 || (year % 4 === 0 && year % 100 !== 0)) {
    console.log(`${year} is a leap year.`);
} else {
    console.log(`${year} is not a leap year.`);
}

// switch case
const day = "sunday";

switch (day) {
    case "saturday":
        console.log("No Class!");
        break;
    case "sunday":
        console.log("Class!!");
        break;
    case "monday":
        console.log("No Class");
        break;
    case "tuesday":
    case "wednesday":
        console.log("No Class!!");
        break;
    case "thursday":
    case "friday":
        console.log("Class!!");
        break;
    default:
        console.log("Not a valid day");
        break;
}

// ternary operator
const a=2;
const b=3;
let c;

a>b?c=a+b : c=b-a;
console.log(c);