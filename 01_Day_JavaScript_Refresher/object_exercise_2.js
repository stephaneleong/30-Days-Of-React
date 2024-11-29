const users = {
    Alex: {
        email: 'alex@alex.com',
        skills: ['HTML', 'CSS', 'JavaScript'],
        age: 20,
        isLoggedIn: false,
        points: 30
    },
    Asab: {
        email: 'asab@asab.com',
        skills: ['HTML', 'CSS', 'JavaScript', 'Redux', 'MongoDB', 'Express', 'React', 'Node'],
        age: 25,
        isLoggedIn: false,
        points: 50
    },
    Brook: {
        email: 'daniel@daniel.com',
        skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux'],
        age: 30,
        isLoggedIn: true,
        points: 50
    },
    Daniel: {
        email: 'daniel@alex.com',
        skills: ['HTML', 'CSS', 'JavaScript', 'Python'],
        age: 20,
        isLoggedIn: false,
        points: 40
    },
    John: {
        email: 'john@john.com',
        skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux', 'Node.js'],
        age: 20,
        isLoggedIn: true,
        points: 50
    },
    Thomas: {
        email: 'thomas@thomas.com',
        skills: ['HTML', 'CSS', 'JavaScript', 'React'],
        age: 20,
        isLoggedIn: false,
        points: 40
    },
    Paul: {
        email: 'paul@paul.com',
        skills: ['HTML', 'CSS', 'JavaScript', 'MongoDB', 'Express', 'React', 'Node'],
        age: 20,
        isLoggedIn: false,
        points: 40
    }
}

let userWithMostSkills = null

for (const user in users) {
    if (userWithMostSkills == null) {
        userWithMostSkills = user
        continue
    }
    if (users[userWithMostSkills].skills.length < users[user].skills.length) {
        userWithMostSkills = user
    }
}

console.log(userWithMostSkills)

let count = 0
for (const user of Object.values(users)) {
    if (50 <= user.points) {
        count++
    }
}

console.log(count)

// TODO
console.log(Object.entries(users))
let mernDevelopers = Object.entries(users).filter((name, user) => {
    let hasMongoDb = user.skills.includes("MongoDB")
    let hasExpress = user.skills.includes("Express")
    let hasReact = user.skills.includes("React")
    let hasNode = user.skills.includes("Node")
    return hasMongoDb && hasExpress && hasReact && hasNode
})

console.log(mernDevelopers)