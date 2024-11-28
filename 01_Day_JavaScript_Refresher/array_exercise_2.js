// 2
let text = "I love teaching and empowering people. I teach HTML, CSS, JS, React, Python."
const PUNCTUATIONS_REGEX = /[.,\/#!$%\^&\*;:{}=\-_`~()]/g
let words = text.replace(PUNCTUATIONS_REGEX, "").split(' ')
console.log(words)
console.log(words.length) 

// 3
const shoppingCart = ['Milk', 'Coffee', 'Tea', 'Honey']
if (shoppingCart.indexOf("Meat") == -1) {
    shoppingCart.unshift("Meat")
}

if (shoppingCart.indexOf("Sugar") == -1) {
    shoppingCart.push("Sugar")
}

let isAllergicToHoney = true
let indexOfHoney = shoppingCart.indexOf("Honey")

if (isAllergicToHoney && indexOfHoney > -1) {
    shoppingCart.splice(indexOfHoney, 1)
}

let indexOfTea = shoppingCart.indexOf("Tea")

shoppingCart.splice(indexOfTea, 1, "Green Tea")
console.log(shoppingCart)

// 4
import { countries } from "./countries.js"
if (countries.indexOf("Ethiopia") > -1) {
    console.log("ETHIOPIA")
} else {
    countries.push("Ethiopia")
    console.log(countries)
}

// 5
import { webTechs } from "./web_techs.js"
if (webTechs.indexOf("Sass") > -1) {
    console.log("Sass is a CSS preprocess")
} else {
    webTechs.push("Sass")
    console.log(webTechs)
}

// 6
const frontEnd = ['HTML', 'CSS', 'JS', 'React', 'Redux']
const backEnd = ['Node', 'Express', 'MongoDB']

const fullStack = frontEnd.concat(backEnd)
console.log(fullStack)