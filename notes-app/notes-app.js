let notes = [{
   title: 'My next fishing trip',
   body: 'I would like to hike my float tube to an alpine lake'
}, {
   title: 'Habit to work on',
   body: 'Eat more plant-based diet'
}, {
   title: 'Career',
   body: 'GET ONE!!!'
}]

let filters = {
   searchText: ''
}

// Lesson 63: Local Storage
const notesJSON = localStorage.getItem('notes')

if (notesJSON !== null) {
   notes = JSON.parse(notesJSON)
}

const renderNotes = function (notes, filters) {
   const filteredNotes = notes.filter(function (note) {
      return note.title.toLowerCase().includes(filters.searchText.toLowerCase())
   })

   document.querySelector('#notes').innerHTML = ''

   filteredNotes.forEach(function (note) {
      const noteElement = document.createElement('p')

      if (note.title.length > 0){
         noteElement.textContent = note.title
      } else {
         noteElement.textContent = '(Untitled Note)'
      }
      document.querySelector('#notes').appendChild(noteElement)
   })
}

renderNotes(notes, filters)

document.querySelector('#create-note').addEventListener('click', function (e) {
   notes.push({
      title: '',
      body: ''
   })
   localStorage.setItem('notes', JSON.stringify(notes))
   renderNotes(notes, filters)
})
   
// Listen for the input filter handler
document.querySelector('#search-text').addEventListener('input', function (e) {
   filters.searchText = e.target.value
   renderNotes(notes, filters)
})

document.querySelector('#filter-by').addEventListener('change', function (e) {
   console.log(e.target.value)
})