// console.log('Hello World!')

// let name = 'Hello JackAss!'
// console.log(name)

// let firstName = 'Jack'
// let lastName = 'Ass'
// let fullName = firstName + (lastName != '' ? ' ' + lastName: '')
// console.log(fullName)

// lastName = ''
// fullName = firstName + (lastName != '' ? ' ' + lastName : '')
// console.log(fullName)

// let city = ' Boise '
// console.log(location)
// let location = city.trim() + (city.trim()!='' ? ', ' + state.trim() : state.trim())
// let state = '  ID  '

// Lesson 13 - Temperature Converter Challenge
/* let farenheit = 69
let kelvinConst = 273.15
let celsiusCalc = (farenheit - 32) * (5/9)
let kelvinCalc = celsiusCalc + kelvinConst 

console.log("Farenheit:" + farenheit)
console.log("Celsius:" + celsiusCalc)
console.log("Kelvin:" + kelvinCalc)
//  */
// let senior = age >= 65

// console.log('AGE: ' + age)
// console.log(child ? "Is Child" : 'Not a Child')
// console.log(senior ? 'You are OLD! Ha ha ha ha!' : "Good job you haven't aged!")

// if (true) {
//     let name = 'Jac'
// }

/* let name = 'John'
console.log(`My name is ${name}.`)
 */
// let gradeCalc = function (score) {
//     let grade = 'F'

//     if (score === undefined)
//         grade = 'undefined'
//     else if (score < 60)
//         grade = 'F'
//     else if (score < 70)
//         grade = 'D'
//     else if (score < 80)
//         grade = 'C'
//     else if (score < 90)
//         grade = 'B'
//     else
//         grade = 'A'

//     return `Score: ${score} --> Grade: ${grade}`
    
// }

// console.log(gradeCalc(89))
let book1 = {
    title: 'Azar',
    author: 'Tim Dainly',
    pages: 100
}

/* // Function that returns an object: (1) Book Summary, (2) Page Count
let getObject = function (objName) {
    return {
        summary: `Book: ${objName.title} by ${objName.author}`,
		pageCount: `Pages: ${objName.pages} `
	}
}

console.log(getObject(book1).pageCount)

let x = getObject(book1)
book1.title = 'Tile Change Pending'
console.log(x.summary)

x = getObject(book1)
console.log(x.summary) */


/* // Lesson 30: Object References - passing Objects to functions - always a REFERENCE, not value
let myAccount = {
    name: 'Andy Mead',
    expenses: 0,
    income: 0
}

let addExpense = function (account, amount) {
    // addAccount = account
    // console.log('In addExpense() account: ')
    account.expenses = account.expenses + amount
    // addAccount.expenses = addAccount.expenses + amount
    // console.log(addAccount)

}

// Lesson 31: Add Functions
let addIncome = function (account, amount=0) {
    account.income = account.income + amount
}
let resetAccount = function (account) {
    account.income = 0
    account.expenses = 0
}
let accountSummary = function (account) {
    return `**** Account Summary: ${account.name} ****\n` +
    `Expenses: $${account.expenses}\n` +
    `Income: $${account.income}\n` +
    `******************************`
}

addExpense(myAccount, 40)
addIncome(myAccount, 123000)
console.log(accountSummary(myAccount))

console.log('* Reset Account *')
resetAccount(myAccount)
console.log(accountSummary(myAccount))
 */

        // Lesson 32: Methods
/* let restaurant = {
    name: 'ASB',
    guestCapacity: 75,
    guestCount: 0,
    checkAvailability: function (partySize) {
        // Code to compare guestCapacity to guestCount
        let seatsLeft = this.guestCapacity - this.guestCount
        return partySize <= seatsLeft
    },
    seatParty: function(partySize) {
        this.guestCount += partySize
        console.log(`Guests Seated: ${partySize}, Guest Count: ${this.guestCount}`)
    },
    removeParty: function(partySize) {
        this.guestCount -= partySize
        console.log(`Guests Removed: ${partySize}, Guest Count: ${this.guestCount}`)
    }
}

party = 5
restaurant.guestCount = 65

if (restaurant.checkAvailability(party)) {
    restaurant.seatParty(party)
} else console.log('No Tables Available. Guests: ${restaurant.guestCount}')

party = 6
if (restaurant.checkAvailability(party)) {
    restaurant.seatParty(party)
} else {
    console.log(`No Tables Available for ${party} guests. Guest Count: ${restaurant.guestCount}`) 
}

restaurant.removeParty(10)
party = 6

if (restaurant.checkAvailability(party)) {
    restaurant.seatParty(party)
} else {
    console.log(`No Tables Available for ${party} guests. Guest Count: ${restaurant.guestCount}`)
}
 */

    // Lesson 33: Exploring String Methods
/* let name = 'Muddy Wimplestein'
console.log(name.includes('Wxmpl'))
 */
// Challenge: Password Validation
// let isValidPassword = function(password) {
//     /* Must be
//          1) > 8 Chars
//          2) Does not contain the string 'password'
//     */
    
//   // Refactor to
//   return (password.length >= 8) && !password.toLowerCase().includes('password')
// }
// console.log(isValidPassword('1234567'))
// console.log(isValidPassword('thisisagood'))
// console.log(isValidPassword(' PassWord ')) */
/* console.log(10.333.toFixed(3))
console.log(Math.round(1.33))
console.log(Math.floor(1.33))
console.log(Math.ceil(1.33))
 */    

         // Lesson 34: Math Methods
// Random # between Min & Max digits

/* 
let min = 3
let max = 25

for (i=0; i<10; i++) {
    let randomNum = Math.floor(Math.random() * (max - min + 1)) + min
    console.log(randomNum)
}
 */
// CHALLENGE: Simple Guessing Fx
let makeGuess = function(guess) {
    let min = 1
    let max = 10
    return guess === (Math.floor(Math.random() * (max - min + 1)) + min)
}

//for (i=0; i<5; i++) console.log(makeGuess(5))

console.log('1234' === 1234)