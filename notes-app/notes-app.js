const notes = [{
   title: 'My next fishing trip',
   body: 'I would like to hike my float tube to an alpine lake'
}, {
   title: 'Habit to work on',
   body: 'Eat more plant-based diet'
}, {
   title: 'Career',
   body: 'GET ONE!!!'
}]

const filters = {
   searchText: ''
}

const renderNotes = function (notes, filters) {
   const filteredNotes = notes.filter(function (note) {
      return note.title.toLowerCase().includes(filters.searchText.toLowerCase())
   })

   document.querySelector('#notes').innerHTML = ''

   filteredNotes.forEach(function (note) {
      const noteElement = document.createElement('p')
      noteElement.textContent = note.title
      document.querySelector('#notes').appendChild(noteElement)
   })
}

renderNotes(notes, filters)

document.querySelector('#create-note').addEventListener('click', function (e) {
   e.target.textContent = 'Create Note Clicked'
})
   
document.querySelector('#remove-all-notes').addEventListener('click', function (e) {
   console.log('Remove All button clicked.')
   document.querySelectorAll('.note').forEach(function(note) {
      note.remove()
   })
})

// Listen for the input filter handler
document.querySelector('#search-text').addEventListener('input', function (e) {
   filters.searchText = e.target.value
   renderNotes(notes, filters)
})

