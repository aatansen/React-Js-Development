// Type conversion - Manual conversion
const myNumber = "10"
console.log(Number(myNumber));

// Type coercion -  Automatic conversion
const myNumber2 = "10"
console.log(myNumber2 / 2);

// if.. else if.. else.. --> single condition execute
// if.. if.. else.. --> multiple condition execute

// Room temparature calculation
const roomTempC = 32;
const roomTempF = roomTempC*1.8+32;
console.log(roomTempF);

if (roomTempF>=86){
    console.log(`The temparature value is ${roomTempF}F, and Turn On the AC`);
}else{
    console.log(`The temparature value is ${roomTempF}F, and nothing to do.`);
}

// BMI calculation
const rafiqMass = 80;
const rafiqHeight = 5.5;
const karimMass = 72;
const karimHeight = 5.4;

const rafiqBMI = rafiqMass/(rafiqHeight**2);
const karimBMI = karimMass/(karimHeight**2);


console.log(`Rafiq's BMI = ${rafiqBMI}`);
console.log(`Karim's BMI = ${karimBMI}`);

const rafiqHigherBMI = rafiqBMI>karimBMI;
console.log(rafiqHigherBMI);



