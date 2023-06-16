// function declarations
function addThreeNum(num1, num2, num3) {
    const sum = num1 + num2 + num3;
    console.log(sum);
}
addThreeNum(2, 3, 4);

// function expression
const juiceFactory = function (apples,oranges){
    const juice = (apples*oranges)/2
    return `${juice} Juice is ready using ${apples} apples and ${oranges} oranges. 🥤`
}
console.log(juiceFactory(10,20));

// arrow functions
const addTwoNum = (num1, num2) =>{
    const sum = num1 + num2;
    console.log(sum);
}
addTwoNum(2, 3);

const ageCalc = (birthYear)=>2023-birthYear>18 ? "You are adult":"You are not adult";
console.log(ageCalc(2001));

const heroMaker = (heroAge,heroSkill)=>{
    if (heroAge>=18 && heroSkill){
        return "You can be a hero."
    }else{
        return "You can't be a hero"
    }
}
console.log(heroMaker(21,true));

const heroMaker2 = (heroAge,heroSkill)=> heroAge>=18 && heroSkill ? "you can be a pro hero": "you can't be a pro hero"

console.log(heroMaker2(19,true));