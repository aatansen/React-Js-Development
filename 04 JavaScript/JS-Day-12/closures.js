// closures
// A closure gives a function access to all variables of its parent function, even after that fuinction has returned.
function regrigerator() {
    let coke = 6;

    return function () {
        coke--;
        console.log(`${coke} coke`);
    };
}
const drink = regrigerator();
drink();
drink();

const drink2 = regrigerator();

drink2();

function computer() {
    let ramCount = 4;
    return function () {
        ramCount--;
        console.log(ramCount);
    };
}

const service1 = computer();
console.log(service1);
service1();

const service2 = computer();
service2();