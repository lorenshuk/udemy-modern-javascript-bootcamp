
// Save notes
const saveNotes = function(notes) {
    localStorage.setItem('notes', JSON.stringify(notes))
}

// Retrieve the notes object from localStorage
const getSavedNotes = function() {
    const notesJSON = localStorage.getItem('notes')

    if (notesJSON !== null) {
        return JSON.parse(notesJSON)
    } else {
        return []
    }
}

// Create the individual NOTE <p> element for the main page
const getNoteDOM = function(note) {
    const noteElement = document.createElement('p')
    
    if (note.title.length > 0) {
        noteElement.textContent = note.title
    } else {
        noteElement.textContent = '(Untitled Note)'
    }
    return noteElement
}

// Render the Note entries
const renderNotes = function (notes, filters) {
    const filteredNotes = notes.filter(function (note) {
        return note.title.toLowerCase().includes(filters.searchText.toLowerCase())
    })

    document.querySelector('#notes').innerHTML = ''

    filteredNotes.forEach(function (note) {
        const noteElement = getNoteDOM(note)
        document.querySelector('#notes').appendChild(noteElement)
    })
}
