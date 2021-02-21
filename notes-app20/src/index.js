// Keep the import calls, but just the ones you need
import { createNote } from './notes'
import { setFilters } from './filters'
// 5. Import renderNotes() function
import { renderNotes } from './views'

// Display each Note element to the DOM in a <p> element
// 4.1 Rewritten renderNotes() to not take any arguments
renderNotes()

document.querySelector('#create-note').addEventListener('click', e => {
    const noteId = createNote()
    location.assign(`/edit.html#${noteID}`)
})

// Listen for the input filter handler
document.querySelector('#search-text').addEventListener('input', e => {
    setFilters({
        searchText: e.target.value
    })
    renderNotes()
})

document.querySelector('#filter-by').addEventListener('change', e => {
    setFilters({
        sortBy: e.target.value
    })
    renderNotes()
})

window.addEventListener('storage', e => {
    if (e.key === 'notes') {
        renderNotes()
    }
})
