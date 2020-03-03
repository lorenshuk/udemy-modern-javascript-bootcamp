// Lesson 38: Challenge To DO's
let arr1 = []

for (x = 1; x <= 5; x++) {
    arr1.push('Task ' + x.toString())
}

/* 
console.log(`You have ${arr1.length} Tasks.`)
console.log(`First Task: ${arr1[0]}`)
console.log(`Second-to-last Task: ${arr1[arr1.length - 2]}`)
*/
console.log(`Tasks: ${arr1}`)
console.log(arr1.shift())
console.log(`Tasks: ${arr1}`)
