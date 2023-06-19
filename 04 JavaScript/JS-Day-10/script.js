// given an array of positive numbers "arr", find total sum of all elements

// strategy:
//input array / posivite integer >0 / arr 
//output : sum / all elements from the array
//1. declare a container
//2. read all element for loop
//3. container that will hold the sum


function summation(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    return sum;
}

const arr = [5,2,4,1,3,5,6,9]

console.log(summation(arr));

// JavaScript is a high level object oriented interpreted multi paradigm programming language.

// JavaScript is a high level, prototype, object oriented, multi-paradigm, interpreted or just-in-time (JIT) compiled, dynamic, single threaded, garbage collected, programming language with first class functions and blocking event loop concurrency model. 