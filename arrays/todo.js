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
/* let notes = ['Notes1', 'Notes2', 'Notes3', 'Notes4']

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
*/
 
/***** Lesson 42: Searching Arrays pt 1 ****/

    // const notes = [{
//     title: 'My Next Trip',
//     body: 'Fishing in the Sierras. Packing my float tube to Alpine Lakes'
// }, {
//     title: 'Improve My Habits',
//     body: 'Waste less time watching TV, eat more veggie based meals, less processed stuff, excercise harder'
// }, {
//     title: 'Career Goals',
//     body:'Get a software developer job in Colorado or Northern California'
// }]

// let myTitle = 'Career Goals'
// let findTitle = element => element.title === myTitle;
// //const index = notes.findIndex( (note, index) => note.title === 'My Next Trip')
// const index = notes.findIndex(findTitle)
// console.log(notes[index])


/***** Lesson 43: Searching Arrays pt 2 ****/
// Change functionality to find a variable Note.title
// const findNote = function (notes, noteTitle) {
    //     const index = notes.findIndex(note => note.title.toLowerCase() === noteTitle.toLowerCase())
    
    //     if (index != -1)
    //         return notes[index]
    //     return {title: `'${noteTitle}' not found`, body:''}
    // }
    // Funciton to .find() method instead
    // const findNote2 = function (notes, noteTitle) {
        //     const note = notes.find(note => note.title.toLowerCase() === noteTitle.toLowerCase())
        
        //     if (note != undefined)
        //         return note
        //     return {title: `'${noteTitle}' not found`, body:''}
        // }
        // // Call the new function using findIndex()
        // const note = findNote(notes, 'Career Goals')
        // console.log(`note => ${note.title}: ${note.body}`)
        
        // const note2 = findNote2(notes, 'My Next Trips')
        // console.log(`note2 => ${note2.title}: ${note2.body}`)
        
        // Lesson 43 Challenge: Create a function to delete elements from an array based upon a text string match
        // const todos = [{
            //     text: 'Order cat food',
//     completed: false 
// }, {
    //     text: 'Clean kitchen',
    //     completed: false
    // }, {
//     text: 'Buy Food',
//     completed: false
// }, {
//     text: 'Do work',
//     completed: false
// }, {
    //     text: 'Exercise more',
    //     completed: false
    // }]
    
    // const deleteTodo = function (todos, text) {
        //     const index = todos.findIndex(element => element.text.toLowerCase() === text.toLowerCase())
        //     if (index != -1) return todos.splice(index, 1)
        //     else return 0
        // }
        
        // console.log(`Before`)
        // console.log(todos)
        
        // let todoVar = 'do work'
        // let delVal = deleteTodo(todos, todoVar)
        // console.log(`Run deleteTodo(todos, "${todoVar}"): ${delVal}`)
        
        // console.log(`After deletetodos`)
        // console.log(todos)
        
/***** Lesson 44: FILTERING Arrays ****/
const notes = [{
    title: 'My Next Trip',
    body: 'Fishing in the Sierras. Packing my float tube to Alpine Lakes'
}, {
    title: 'Improve My Habits',
    body: 'Waste less time watching TV, eat more veggie based meals, less processed stuff, excercise harder'
}, {
    title: 'Career Goals',
    body: 'Get a software developer job in Colorado or Northern California'
}]

const findNotes = function (notes, query) {
    return notes.filter(function(note, index) {
        const isTitleMatch = note.title.toLowerCase().includes(query.toLowerCase())
        const isBodyMatch = note.body.toLowerCase().includes(query.toLowerCase())
        return isTitleMatch || isBodyMatch
    })
}

//console.log(notes)
//console.log(findNotes(notes, 'tv'))

// CHALLENGE: Filter "todo" array for incomplete tasks
const todos = [{
    text: 'Order cat food',
    completed: true
}, {
    text: 'Clean kitchen',
    completed: false
}, {
    text: 'Buy human food',
    completed: true
}, {
    text: 'Do work',
    completed: false
}, {
    text: 'Exercise more',
    completed: true
}]

const findIncompleted = function (todos) {
    return todos.filter(todo => {
        return !todo.completed
    })
}
console.log(findIncompleted(todos))