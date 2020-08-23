class Person {
    constructor(firstName, lastName, age) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age
    }

    getBio () {
        return `${this.firstName} is ${this.age}.`
    }

    setName (fullName) {
        // Use the <string>.split() method 
        const names = fullName.split(' ')
        this.firstName = names[0]
        this.lastName = names[1]
    }
}

class Student extends Person {
    constructor(firstName, lastName, age, grade) {
        // Have to call the Parent's constructor "super()"
        super(firstName, lastName, age)
        // Add the property doesn't exist in the Parent's class
        this.grade = grade
    }

    getBio() {
        return `${this.firstName} ${this.lastName} is ${this.grade < 70 ? 'failing' : 'passing'} the class.`
    }

    updateGrade(grade) {
        this.grade += grade
    }
}

const student1 = new Student('John', 'Mealey', 29, 79)
console.log(student1.getBio())

student1.updateGrade(-10)
console.log(student1.getBio())
