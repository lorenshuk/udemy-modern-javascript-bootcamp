const Person = function(firstName, lastName, age) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age
}

Person.prototype.getBio = function () {
    return `${this.firstName} is ${this.age}.`
}

Person.prototype.setName = function (fullName) {
    // Use the <string>.split() method 
    const names = fullName.split(' ')
    this.firstName = names[0]
    this.lastName = names[1]
}

const me = new Person('John', 'Mealey', 29)
console.log(me.getBio())

const me2 = new Person('Tom', 'Jone', 33)
console.log(me2.getBio())

Person.prototype.getBio = function () {
    return 'getBio 2'
}

console.log(me2.getBio())

