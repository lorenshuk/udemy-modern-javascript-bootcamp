let notes = []
/*
   title: 'My next fishing trip',
   body: 'I would like to hike my float tube to an alpine lake'
}, {
   title: 'Habit to work on',
   body: 'Eat more plant-based diet'
}, {
   title: 'Career',
   body: 'GET ONE!!!'
}]
*/

let filters = {
   searchText: ''
}

// Retrieve the stored notes
const notesJSON = getSavedNotes()

// Display each Note element to the DOM in a <p> element
renderNotes(notes, filters)

document.querySelector('#create-note').addEventListener('click', function (e) {
   
   console.log('create note line 26')
   
   const noteID = uuidv4()
   
   notes.push({
      id:noteID,
      title: `(Untitled Note)`,
      body: ''
   })
   
   console.log('create note line 36')
   saveNotes(notes)
   location.assign(`/edit.html#${noteID}`)
})
   
// Listen for the input filter handler
document.querySelector('#search-text').addEventListener('input', function (e) {
   filters.searchText = e.target.value
   renderNotes(notes, filters)
})

document.querySelector('#filter-by').addEventListener('change', function (e) {
   console.log(e.target.value)
})