const emptyArray = new Array() // 1
const numberArray = [1, 2, 3, 4, 5, 6].reverse() // 2

// 3
console.log(emptyArray.length)
console.log(numberArray.length)

// 4
let firstItem = numberArray[0]
let middleIndex = Math.floor(numberArray.length / 2)
let middleItem = numberArray[middleIndex]
let lastItem = numberArray[numberArray.length - 1]

console.log(firstItem)
console.log(middleItem)
console.log(lastItem)

// 5
let mixedDataTypes = [1, "Hello", 3, false, "World", 6]

// 6
let itCompanies = ["Facebook", "Google", "Microsoft", "Apple", "IBM", "Oracle", "Amazon"]

console.log(itCompanies) // 7

console.log(itCompanies.length) // 8

// 9
let firstCompany = itCompanies[0]
let middleCompanyIndex = Math.floor(itCompanies.length / 2)
let middleCompany = itCompanies[middleCompanyIndex]
let lastCompany = itCompanies[itCompanies.length - 1]


console.log(firstCompany)
console.log(middleCompany)
console.log(lastCompany)


itCompanies.forEach(company => console.log(company)) // 10

itCompanies.forEach(company => console.log(company.toUpperCase())) // 11

// 12
let sentence = itCompanies.slice(0, itCompanies.length - 1).join(', ')
sentence = sentence.concat(" and " + lastCompany + " are big IT companies.")

console.log(sentence)

// 13
// let userInput = prompt("Enter Company Name: ")
userInput = "IBM"

if (itCompanies.indexOf(userInput) != -1) {
    console.log(userInput)
} else {
    console.log("company is not found")
}

// 14
itCompanies.forEach(company => {
    if (company.split("o").length <= 2) {
        console.log(company)
    } 
})

itCompanies.sort() // 15

itCompanies.reverse() // 16

let firstThreeCompanies = itCompanies.slice(0, 3) // 17
console.log(firstThreeCompanies)
let lastThreeCompanies = itCompanies.slice(itCompanies.length - 3, itCompanies.length) // 18
console.log(lastThreeCompanies)

// 19
let lowerbound = Math.floor((itCompanies.length - 1) / 2)
let upperbound = Math.ceil((itCompanies.length + 1) / 2)

console.log(itCompanies.slice(lowerbound, upperbound))

// 20
console.log(itCompanies.shift())
console.log(itCompanies)

// 21
middleIndex = Math.floor((itCompanies.length - 1) / 2)
let numberOfMiddleItems = (itCompanies.length % 2) == 0 ? 2 : 1
console.log(itCompanies.splice(middleIndex, numberOfMiddleItems))
console.log(itCompanies)

// 22
console.log(itCompanies.pop())
console.log(itCompanies)

//23
itCompanies.splice(0, itCompanies.length)
console.log(itCompanies)