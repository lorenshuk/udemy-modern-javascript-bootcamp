// Lesson 38: Challenge To DO's
/* let arr1 = []

for (x = 1; x <= 5; x++) {
    arr1.push('Task ' + x.toString())
}
 */
/* 
console.log(`You have ${arr1.length} Tasks.`)
console.log(`First Task: ${arr1[0]}`)
console.log(`Second-to-last Task: ${arr1[arr1.length - 2]}`)
*/
/* console.log(`Tasks: ${arr1}`)
console.log(arr1.shift())
console.log(`Tasks: ${arr1}`)
 */

        // Lesson 40: looping through arrays
let notes = ['Notes1', 'Notes2', 'Notes3', 'Notes4']

notes.forEach(function (x, index) {
    // console.log(index+1 + '. ' + x)
})

    // Lesson 41: FOR loop
for (x=0; x < notes.length; x++) {
    // console.log(notes[x])
}
// Count in reverse
for (let count = notes.length - 1; count >= 0; count--) {
    console.log(`${count}. ${notes[count]}`)
}