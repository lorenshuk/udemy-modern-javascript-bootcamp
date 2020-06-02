/*
console.log('5' + 5100)
console.log('5555' == '555')
let type = typeof 123
console.log(type)
type = typeof '123'
console.log(type)

const getTip = (amount) => {
    if (typeof amount === 'number') {
        return amount * .25
    } else {
        throw Error(`'Amount' is not a valid argument`)
    }
}

const result = getTip(true)
console.log(result)
*/

/* Lesson 85: Catch Try Challenge */
let gradeCalc = function (score, totalScore) {
    if (typeof score !== 'number' || typeof totalScore !== 'number') {
        throw Error('Score not a valid number')
    }
     
    let grade = 'F'
    let percent = (score/totalScore) * 100

    if (percent < 60)
        grade = 'F'
    else if (percent < 70)
        grade = 'D'
    else if (percent < 80)
        grade = 'C'
    else if (percent < 90)
        grade = 'B'
    else
        grade = 'A'

    return `Score: ${percent}% --> Grade: ${grade}`
}

try {
    console.log(gradeCalc(150, 'Max'))
} catch {
    console.log('Grade could not be calculated!')
}