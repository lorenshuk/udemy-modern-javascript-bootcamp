// Retrieve the stored notes
let notes = getSavedNotes()

let filters = {
   searchText: '',
   sortBy: 'byEdited'
}


// Display each Note element to the DOM in a <p> element
renderNotes(notes, filters)

document.querySelector('#create-note').addEventListener('click', e => {
   const noteID = uuidv4()
   const timeStamp = moment().valueOf()

   notes.push({
      id:noteID,
      title: ``,
      body: '',
      createdAt: timeStamp,
      updatedAt: timeStamp
   })

   saveNotes(notes)
   location.assign(`/edit.html#${noteID}`)
})
   
// Listen for the input filter handler
document.querySelector('#search-text').addEventListener('input', e => {
   filters.searchText = e.target.value
   renderNotes(notes, filters)
})

document.querySelector('#filter-by').addEventListener('change', e => {
   filters.sortBy = e.target.value
   renderNotes(notes, filters)
})

window.addEventListener('storage', e => {
   if (e.key === 'notes') {
      notes = JSON.parse(e.newValue)
      renderNotes(notes, filters)
   }
})


/**********************************
      Lesson 74: Date Manipulation 
***********************************/
// let now = new Date()
/* console.log(`Today's Date: ${now.toString()}`)
let now = new Date()
console.log(`Year: ${now.getFullYear()}`)
console.log(`Month: ${now.getMonth()}`)
console.log(`Day: ${now.getDate()}`)

console.log(`Hour: ${now.getHours()}`)
console.log(`Minute: ${now.getMinutes()}`)
console.log(`Second: ${now.getSeconds()}`)
 console.log(`# Unix Epoch: ${now.getTime()}`) 

let newDate = new Date(`January 1 1970 12:00:00`)
let timeStamp = newDate.getTime()

console.log(`newDate: ${newDate}`)
console.log(`timeStamp: ${timeStamp}`)
console.log(`Year: ${newDate.getFullYear()}`)
 

 // Challenge: Sorting 2 Dates
const date1 = new Date(`February 1 1969 12:31:25`)
const date2 = new Date(`February 1 2019 00:00:01`)

const timeStamp1 = date1.getTime()
const timeStamp2 = date2.getTime()

console.log(`First Date: ${date1}`)
console.log(`Second Date: ${date2}`)

if (timeStamp1 < timeStamp2) {
   console.log(`Sorted Date: ${date1}`)
} else {
	console.log(`Sorted Date: ${ date2 }`)
}
*/

/* Lesson 75: MOMENT Library
//let momDate = moment([1967, 0, 25])
let momDate = moment().year(1925).month(11).date(25)
console.log(momDate.format('MMM D, YYYY'))
 */