// forEach take annon function as argument (element,index,entire_arr)
const movements = [1500, -500, 2000, -1200, 250, -500, 1000];
movements.forEach(function (move) {
  console.log(move / 2);
});

const footballPlayers = [
  "Neymar",
  "Messi",
  "Ronaldo",
  "Coutinho",
  "Rooney",
  "Casemiro",
];

footballPlayers.forEach((player, i) => {
  console.log(`${i + 1}: ${player}`);
});

// Map - have to return

const favColors = ["black", "crimson", "tomato", "white", "purple", "pink"];
const favColorsUpperCase = favColors.map((color) => {
  return color[0].toUpperCase() + color.slice(1);
});
console.log(favColorsUpperCase);

const numbers = [44, 66, 32, 64, 12, 76, 88, 43, 22];

const newNumbers = numbers.map((num) => {
  return (num = num - 10);
});
console.log(newNumbers);

// filter
const favColors2 = ["black", "crimson", "tomato", "white", "purple", "pink"];

const favColorsP = favColors2.filter(function (color) {
  return color.startsWith("p");
});
console.log(favColorsP);

const transactions = [500, 200, -300, -200, 800, -150, 900];

const withdrawals = transactions.filter((transactions) => transactions < 0);
console.log(withdrawals);

// Reduce callback function take argument as (accumulator,value,i,arr) and accumulator default value

// normal sum
const movements2 = [500, 200, -300, -200, 800, -150, 900];
let sum = 0;
for (let i = 0; i < movements2.length; i++) {
  sum = sum + movements2[i];
}
console.log(sum);

// Reduce sum
const balance = movements2.reduce(function (accumulator, value, i, arr) {
  return accumulator + value;
}, 0);
console.log(balance);

// Reduce multi
const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const multi = arr.reduce((acc, el) => acc * el, 1);
console.log(multi);

// Reduce maximum
const arr2 = [32, 54, 11, 23, 78, 43, 61, 77, 12, 32, 44, 1];
const max = arr2.reduce((acc, value) => (acc > value ? acc : value), arr2[0]);
console.log(max);

// Reduce minimum
const min = arr2.reduce((acc, value) => (acc < value ? acc : value), arr2[0]);
console.log(min);

const min2 = arr2.reduce(function (acc, value) {
  if (acc < value) {
    return acc;
  } else {
    return value;
  }
}, arr2.at(0));

console.log(min2);

// Data transformation pipeline - combine multiple methods
const movements3 = [500, 200, -100, -400, 600, -50, 1000];
const totalDeposit = movements3
  .filter((move) => move > 0)
  .map((deposit) => deposit * 1.2)
  .reduce((acc, deposit) => acc + deposit, 0);
console.log(totalDeposit);

const moneyRobbed = [15000, 25000, 35000, 14000, 25000, 7500];
const totalMoney = moneyRobbed
  .filter((money) => money >= 10000)
  .map((money) => money / 2)
  .filter((money) => money > 10000)
  .reduce((acc, money) => (acc = acc + money), 0);
console.log(totalMoney);

// find
const movements4 = [500, 200, -300, 500, 200, -50];
// console.log(movements4.at(-1));
const firstWithdrawal = movements4.find((move) => move < 0);
console.log(firstWithdrawal);

const students = [
  { name: "Tansen", id: 11 },
  { name: "Shohan", id: 43 },
  { name: "Shakil", id: 12 },
  { name: "Lelin", id: 21 },
  { name: "Ridoy", id: 14 },
  { name: "Fahim", id: 64 },
];
const id21 = students.find((student) => student.id === 21);
console.log(id21);

const nameWithS = students.find((student) => student.name.startsWith("S"));
console.log(nameWithS);

// Some - checks any element
const arr3 = [14, 22, 45, 11, 23, 18, 15];
const anyNumberGreater40 = arr3.some((number) => number > 40);
console.log(anyNumberGreater40);

// every - checks every element
const everyNumberGreater10 = arr3.every((number) => number > 10);
console.log(everyNumberGreater10);

// flat - default is 1, and flatmap
const arr4 = [11, 22, [45, 65], 43, [33, 54], 94];
console.log(arr4.flat(1)); // default 1 level deep

const arr5 = [
  11,
  22,
  [45, 65],
  [
    [43, 3, 3],
    [33, 54],
  ],
  94,
];
console.log(arr5.flat(2)); // 2 level deep

const accounts = [
  {
    owner: "Tansen",
    movement: [500, 200, -300, 400, 200, -400],
  },
  {
    owner: "Shakil",
    movement: [300, 500, -600, 100, 200, -100],
  },
  {
    owner: "Lelin",
    movement: [5000, 300, -100, 200, 500, -100],
  },
];

// flatMap
const overalMovements = accounts.map((account) => account.movement).flat(1);
console.log(overalMovements);

// no need to use flat individually , only for 1 level deep
const overalMovements2 = accounts.flatMap((account) => account.movement);
console.log(overalMovements2);

// sorting method - use less ; mutate the original array
const students2 = ["Tansen", "Shakil", "Lelin", "Ridoy", "Canada", "Bafufe"];
console.log(students2.sort()); //mutate the original array

const arr6 = [3, 4, 62, 111, 2, 71, 15, 6];
console.log(arr6.sort());

const sortedArr = arr6.sort(function (a, b) {
  return a > b ? 1 : -1; //ascending
});
console.log(sortedArr);

const sortedArr2 = arr6.sort(function (a, b) {
  return a > b ? -1 : 1; //decending
});
console.log(sortedArr2);

// simplified
const sortedArr3 = arr6.sort(function (a, b) {
  return a - b; //ascending
  //   return b - a; //decending
});
console.log(sortedArr3);
