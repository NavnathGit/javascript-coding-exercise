const num1 = 123;
const num2 = 567;

console.log(num1 + num2);

if (num1 > 100) {
    console.log("I am Super Number")
} else {
    console.log("I have Ordinary Number Card");
}

if (num1 > 100 && num2 > 100) {
    console.log("I have two super numbers")
} else if (num1 > 50 || num2 > 50) {
    console.log("at least I have one good numbers")
} else {
    console.log("I am sad, as a I dont have any good or super number")
}

//Ta
const flag = (num1 > 100 && num2 > 100) ? "Super" : "Not Good Enough"

console.log(flag);

