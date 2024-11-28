// 1
const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24]
ages.sort()

let lastIndex = ages.length - 1
let min = ages[0]
let max = ages[lastIndex]
console.log(min)
console.log(max)

let lowerbound = Math.floor((ages.length - 1) / 2)
let upperbound = Math.ceil((ages.length + 1) / 2)

console.log(ages.slice(lowerbound, upperbound))

let totalAge = 0
ages.forEach(age => totalAge += age)
let average = totalAge / ages.length 
console.log(average)

console.log(max - min)

console.log(Math.abs(min - average))
console.log(Math.abs(max - average))

// 2
import { countries } from "./countries.js"
let firstTenCountries = countries.slice(0, 10)
console.log(firstTenCountries)

lowerbound = Math.floor((firstTenCountries.length - 1) / 2)
upperbound = Math.ceil((firstTenCountries.length + 1) / 2)

console.log(firstTenCountries.slice(lowerbound, upperbound))

// 3
let middleIndex = Math.ceil((firstTenCountries.length) / 2)
const firstHalf = firstTenCountries.slice(0, middleIndex)
const secondHalf = firstTenCountries.slice(middleIndex, firstTenCountries.length)

console.log(firstHalf)
console.log(secondHalf)