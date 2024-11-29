const personAccount = {
    firstName: "Alex",
    lastName: "Yeoh",
    incomes: [100, 200, 300, 400],
    expenses: [10, 20, 30, 40],
    addIncome: function (newIncome) {
        this.incomes.push(newIncome)
    },
    totalIncome: function () {
        let total = 0
        this.incomes.forEach(income => total += income)
        return total
    },
    addExpense: function (expense) {
        this.expenses.push(expense)
    },
    totalExpenses: function () {
        let total = 0
        this.expenses.forEach(expense => total += expense)
        return total
    },
    accountBalance: function () {
        return this.totalIncome() - this.totalExpenses()
    },
    accountInfo: function () {
        const properties = {};
        for (const key in obj) {
            if (typeof obj[key] !== 'function') {
                properties[key] = obj[key];
            }
        }
        return properties;
    }
}

const users = [
    {
        _id: 'ab12ex',
        username: 'Alex',
        email: 'alex@alex.com',
        password: '123123',
        createdAt: '08/01/2020 9:00 AM',
        isLoggedIn: false,
    },
    {
        _id: 'fg12cy',
        username: 'Asab',
        email: 'asab@asab.com',
        password: '123456',
        createdAt: '08/01/2020 9:30 AM',
        isLoggedIn: true,
    },
    {
        _id: 'zwf8md',
        username: 'Brook',
        email: 'brook@brook.com',
        password: '123111',
        createdAt: '08/01/2020 9:45 AM',
        isLoggedIn: true,
    },
    {
        _id: 'eefamr',
        username: 'Martha',
        email: 'martha@martha.com',
        password: '123222',
        createdAt: '08/01/2020 9:50 AM',
        isLoggedIn: false,
    },
    {
        _id: 'ghderc',
        username: 'Thomas',
        email: 'thomas@thomas.com',
        password: '123333',
        createdAt: '08/01/2020 10:00 AM',
        isLoggedIn: false,
    },
]

const products = [
    {
        _id: 'eedfcf',
        name: 'mobile phone',
        description: 'Huawei Honor',
        price: 200,
        ratings: [
            { userId: 'fg12cy', rate: 5 },
            { userId: 'zwf8md', rate: 4.5 },
        ],
        likes: [],
    },
    {
        _id: 'aegfal',
        name: 'Laptop',
        description: 'MacPro: System Darwin',
        price: 2500,
        ratings: [],
        likes: ['fg12cy'],
    },
    {
        _id: 'hedfcg',
        name: 'TV',
        description: 'Smart TV:Procaster',
        price: 400,
        ratings: [{ userId: 'fg12cy', rate: 5 }],
        likes: ['fg12cy'],
    },
]

function signUp(newUser) {
    let hasAnAccount = false
    for (user of users) {
        if (user.username === newUser.username) {
            hasAnAccount = true
            break
        }
    }

    if (!hasAnAccount) {
        users.push(newUser)
    } else {
        console.log("User Already Exists")
    }
}

function signIn(username, password) {
    const loggedInUser = users.filter(user => user.username === username && user.password === password)

    if (loggedInUser.length === 1) {
        return loggedInUser[0]
    } else {
        return null
    }
}

function rateProduct(productName, userId, rate) {
    const searchedProduct = products.find(product => product.name === productName)
    searchedProduct.ratings.push({userId: userId, rate: rate})
}

function averageRating(productName) {
    const searchedProduct = products.find(product => product.name === productName)
    let total = 0
    searchedProduct.ratings.forEach(rating => total += rating.rate)

    return total / searchedProduct.ratings.length
}

function likeProduct(productId, userId) {
    const searchedProduct = products.find(product => product._id === productId)
    if (searchedProduct.likes.includes(userId)) {
        let index = searchedProduct.likes.indexOf(userId)
        searchedProduct.likes.splice(index, 1)
    } else {
        searchedProduct.likes.push(userId)
    }

}


