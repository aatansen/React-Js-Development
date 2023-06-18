// array literal
const odd = [1, 3, 5, 7, 9];
console.log(odd);

// array function
const even = new Array(2, 4, 6, 8);
console.log(even);

console.log(odd[3]);
console.log(even[3]);

console.log(odd.length);
console.log(odd[odd.length - 1]);

// mutate
odd[2] = 55;
console.log(odd);

// object creating
const student = {
    firstName: "Nesnat",
    lastName: "Ahmad",
    birthYear: 2001,

    calcAge: function () {
        return 2023 - student.birthYear; //what if student name changed? so this can be used to solve that problem
    },
};
console.log(student.calcAge());

const student2 = {
    firstName: "Nesnat",
    lastName: "Ahmad",
    birthYear: 2005,

    calcAge: function () {
        return 2023 - this.birthYear; //using this
    },
    greetings: function () {
        return `Hello, ${this.firstName}`;
    },
};
console.log(student2.calcAge());
console.log(student2.greetings());

const student3 = student2;

console.log(student3);

student2.firstName = "Tansen";

console.log(student2);
console.log(student3);

console.log(student3.greetings());

// for loop
for (let i = 1; i <= 20; i++) {
    console.log(`Step ${i}`);
}

const namesArray = ["Alice", "Bob", "Charlie", "David", "Emma", "Frank", "Grace",
    ["Mina", "Tina", "Rina", "Parina"],
    true,
    "Dancer"
];
for (let i = 0; i < namesArray.length; i++) {
    console.log(namesArray[i]);
}

const evenNumbers = [2, 4, 6, 8, 10, 12, 14, 16, 18, 20];
let sum = 0;
for (let i = 0; i < evenNumbers.length; i++) {
    sum += evenNumbers[i];
}
console.log(sum);

const arr = [10, true, 21, "a", "b", false, 55, true, "x"];
const arr2 = [];

for (let i = 0; i < arr.length; i++) {
    arr2.push(arr[i]);
}
console.log(arr2);

const years = [1994, 1996, 1998, 2001, 1993, 1995];

const ages = [];

for (let i = 0; i < years.length; i++) {
    ages.push(2023 - years[i]);
}
console.log(ages);

// continue and break 
console.log("Continue");
for (let i = 0; i < arr.length; i++) {
    if (typeof arr[i] === "string") {
        continue;
    }
    console.log(arr[i], typeof arr[i]);
}

console.log("Break");
for (let i = 0; i < arr.length; i++) {
    if (typeof arr[i] === "string") {
        break;
    }
    console.log(arr[i], typeof arr[i]);
}

// loop inside a loop 
for (let i = 1; i <= 10; i++) {
    console.log(`Step ----------- ${i}`);
    for (let j = 1; j <= i; j++) {
        console.log(`Run --${j}`);
    }
}

// Star pattern 
let n = 5;
let star = "";
for (let row = 1; row <= n; row++) {
    for (let col = 1; col <= n; col++) {

        star += "*";
    }
    star += "\n";
}
console.log(star);


// while loop 
let i=0
const arr3 = [10,20,30,40,50]
while(i<arr3.length){
    console.log(arr3[i]);
    i++
}