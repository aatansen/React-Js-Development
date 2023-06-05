// math operations
const currentYear = 2023;
const ageTumpa = currentYear - 1998;
const ageRahat = currentYear - 1996;
console.log(ageTumpa, ageRahat);

// string operation
const first_name = "Alahi";
const last_name = "Tansen";
console.log(first_name + " " + last_name);

const bikeBrand = "Yamaha";
const bikeModel = "MT5";
const fullBikeName = bikeBrand + " " + bikeModel;
console.log(fullBikeName);

// Assignment operators

let number = 20 + 10;
number = number + 5;
number -= 10;
console.log(number);

// Operator precedence
console.log(2023 > 2002 + 16);

// template literals
const name = "Tansen";
const age = 21;
const job = "student";
const bio = "My name is " + name + "." + " I am " + age + " years old." + "I am a " + job + ".";
console.log(bio);

//now with template literals
const bio2 = `My name is ${name}. I am ${age} years old.I am a ${job}.`;
console.log(bio2);

console.log(`I
    am 
Tansen`);

// conditionals or control structure
const birthYear=1995;
if(birthYear<=1999){
    console.log("You are a 90's kid");
}else{
    console.log("You are not a 90's kid");
}

//type conversion(manually) and coercion(automatically)
const inputYear=1995
console.log(inputYear+10);

const inputYear2="1995"
console.log(inputYear2+10); //coercion(automatically) 10 will become string

console.log(inputYear2-10); //coercion(automatically) 10 will become number

//Game
let a="1"+1
a-=1
console.log(a);