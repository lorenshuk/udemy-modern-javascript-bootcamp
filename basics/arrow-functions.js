/* const square = (num) => {
    return num * num
}

const people = [{
    name: 'Andrew',
    age: 27
}, {
    name: 'Vinnie',
    age: 31
}, {
    name: `Stevie`,
    age: 3
}, {
    name: `Audrey`,
    age: 21
}]

const under30 = people.filter((person) => person.age < 30)
const over30 = people.filter((person) => person.age > 30)
const under22 = people.filter((person) => person.age < 22)


console.log(under30)
console.log(over30)

under22.forEach(person => console.log(person.name)) */

/* 
const add = function (a, b) {
    console.log(arguments)
}

add(10, 20, 30, 40)
 */

 const car = {
    color: 'Red',
    interior: 'Leather',
    engine: 'V8',
    getColor: function () {
        return `The color is ${this.color}.`
    },
    getInterior: () => {
        return `The interior is ${this.interior}`
    },
    getEngine() {
        return `The engine is a ${this.engine}`
    }
}
console.log(car.getColor())
console.log(car.getInterior())
console.log(car.getEngine())