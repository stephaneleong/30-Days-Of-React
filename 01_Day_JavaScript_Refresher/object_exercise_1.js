const dog = {}
console.log(dog)

dog.name = "boi"
dog.legs = "4"
dog.colour = "white"
dog.bark = () => "Woof, Woof"

console.log(dog.name)
console.log(dog.legs)
console.log(dog.colour)
console.log(dog.bark())

dog["breed"] = "chiwawa"
dog.getDogInfo = function () {
    return this.breed
}
console.log(dog.getDogInfo())
