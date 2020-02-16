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
let getObject = function (objName) {
    return {
        summary: `Book: ${objName.title} by ${objName.author}`,
		pageCount: `Pages: ${objName.pages} `
	}
}

console.log(getObject(book1).pageCount)
