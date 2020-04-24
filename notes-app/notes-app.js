// Retrieve the stored notes
const notes = getSavedNotes()

let filters = {
   searchText: ''
}

// Display each Note element to the DOM in a <p> element
renderNotes(notes, filters)

document.querySelector('#create-note').addEventListener('click', function (e) {
   const noteID = uuidv4()
   
   notes.push({
      id:noteID,
      title: `(Untitled Note)`,
      body: ''
   })

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
