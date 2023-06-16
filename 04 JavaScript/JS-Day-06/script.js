// function calling function
// p1
function fruitCutter(fruit) {
    return fruit * 4;
}

function juiceMaker(apples, oranges) {
    const applesPieces = fruitCutter(apples);
    const orangesPieces = fruitCutter(oranges);

    const juice = (applesPieces + orangesPieces) / 2;
    return `${juice} litter juice is ready using ${applesPieces} apple pieces and ${orangesPieces} orange pieces.🥤`;
}
console.log(juiceMaker(15, 10));

// p2 
function technicalTest(ramF, cpuC) {
    const dramState = ramFreqTest(ramF);
    const cpuState = cpuTurbo(cpuC);
    return `${dramState} and ${cpuState}`;

}

console.log(technicalTest(2400, 1.8));

function ramFreqTest(ramFreq) {
    return ramFreq >= 2620 ? "DDR4" : "DDR3";
}


function cpuTurbo(cpuClock) {
    return cpuClock >= 3.1 ? "1800rpm" : "1400rpm";
}

// p3
// brick calculation
/*
underground = 50000
1st to 10th = 10000 per floor
11th floor = 12000
12th to 21th = 10000 per floor
22th floor =12000
total brick for 73th floor ?
*/

function brickCalculation(totalFloors) {
    let totalBricks;
    const undergroundBricks = 50000;
    let bricksForAllFloors = totalFloors * 10000;
    if (totalFloors >= 11) {
        const extrafloors = Math.trunc(totalFloors / 11);
        const extrabricks = extrafloors * 2000;
        bricksForAllFloors += extrabricks;
        totalBricks = undergroundBricks + bricksForAllFloors;
    } else {
        totalBricks = undergroundBricks + bricksForAllFloors;

    }

    return `Total brick needed ${totalBricks}`;

}

console.log(brickCalculation(10));
