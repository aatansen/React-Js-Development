// slice array method

const arr = ["a", "b", "c", "d", "e"];
console.log(arr.slice(2, 4)); // end parameter which is 4 not included
console.log(arr.slice(1, -1));

console.log(arr.slice()); //copying whole array using slice
console.log(...arr); //copying whole array using spread

console.log(arr.slice(-1)); //last element in array in array format
console.log(arr[arr.length - 1]); // value of last element
console.log(arr.at(-1)); // value of last element

//Splice
const arr2 = ["j", "k", "l", "m", "n"];
console.log(arr2.splice(3)); // does mutate the original array
console.log(arr2);
console.log(arr2.splice(1, 1)); //second perams is the number of element
console.log(arr2);

const arr3 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
console.log(arr3.splice(2, 8));

// Reverse
const arr4 = [11, 22, 33, 44, 55, 66, 77, 88, 99];
console.log(arr4.reverse()); //mutate original array
console.log(arr4);

// Concat
console.log(arr3);
console.log(arr4);
const joinedArr = arr3.concat(arr4);
console.log(joinedArr);
console.log(...arr3, ...arr4); //using spread

// Join
const words = ["This", "is", "a", "join", "Medthod"];
console.log(words);
console.log(words.join(" "));
console.log(words);

// Basic methods :
// push - add element at end  ,
// Unshift - add element at first,
// Pop - remove element from end ,
// Shift - remove element from first,
// IndexOf - return index number of that element,
// Includes - return true false if the element present

// At
const arrNew = [1990, 1992, 1983, 1999];
console.log(arrNew[3]);
console.log(arrNew.at(0));
console.log(arrNew.at(-1)); // easily get the last element

// foreach - does not produce new array
// it does not support continue,break
const numbers = [334, 455, 654, 432, 223, 222, 435, 722];

for (let i = 0; i < numbers.length; i++) {
  console.log(numbers[i]);
}

numbers.forEach(function (element, index, entire_arr) {
  if (element > 500) {
    console.log(element);
  }
});

numbers.forEach(function (el, i, arr) {
  console.log(`${i + 1}: ${el}`);
});

numbers.forEach((el, i, arr) => console.log(`${i + 1}: ${el}`));

const friends = ["Tumpa", "Tansen", "Ahsan", "Zamil", "Shohan"];

friends.forEach((el) => console.log(el));

// foreach with map and set
const currencies = new Map([
  ["BDT", "Bangladeshi Taka"],
  ["USD", "United States Dollar"],
  ["EUR", "Euro"],
]);

currencies.forEach((value, key, map) => console.log(`${key}: ${value}`));

// Set
const friendsUnique = new Set(["Shohan", "Tumpa", "Tansen", "Sabrina", "Tansen"]);
console.log(friendsUnique);

friendsUnique.forEach((value, _, set) => console.log(value)); // _ unnecessary variable

// Map method (returns a new array)
// (value,index,arr)

const transactions = [5000, -2000, 500, -500, 6000, -1500];
const furtherTransactions = transactions.map((transaction, i, arr) => {
    return transaction*0.1;
});

console.log(furtherTransactions);

const fourRobbers = [15000,10000,20000,30000]

const remainingMoney = fourRobbers.map((money,i,arr)=>money/2)

console.log(remainingMoney);


// filter method 
const transactionMoney = [1200,2000,-200,-9000,3000,6000,8000]

const deposit = transactionMoney.filter((transaction,i,arr)=>{
  if(transaction>0){
    return transaction
  }
})

console.log(deposit);