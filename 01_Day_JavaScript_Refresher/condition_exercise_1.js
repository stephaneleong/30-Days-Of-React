const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// 1
function isOldEnoughToDrive(age) {
    if (18 <= age) {
        console.log("You are old enough to drive.")
    } else {
        console.log(`You are left with ${18 - age} years to drive.`)
    }
}

// 2

const MY_AGE = 23
function compareAge(age) {
    let ageDifference = Math.abs(age - MY_AGE)
    if (age == MY_AGE) {
        console.log("We are the same age.")
    } else if (age > MY_AGE) {
        console.log(`You are ${ageDifference} year older than me.`)
    } else {
        console.log(`You are ${ageDifference} year younger than me.`)
    }
}

// 3
let a = 4
let b = 3

let result3 = (a > b) ? `${a} is greater than ${b}` : `${a} is less than or equal to ${b}`

// 4
function isOddOrEven(number) {
    if (number % 2 == 0) {
        console.log(`${number} is an even number`)
    } else {
        console.log(`${number} is an odd number`)
    }
}

// Prompts
function askFirstQuestion() {
    rl.question('Enter your age: ', (input) => {
        let age = parseInt(input, 10);
        isOldEnoughToDrive(age);
        askSecondQuestion();
    });
}

function askSecondQuestion() {
    rl.question('Enter your age again: ', (input) => {
        let age = parseInt(input, 10);
        compareAge(age);
        askThirdQuestion();
    });
}

function askThirdQuestion() {
    rl.question('Enter a number: ', (input) => {
        let number = parseInt(input, 10);
        isOddOrEven(number);
        rl.close();
    });
}

// Start by asking the first question
console.log(result3)
askFirstQuestion();