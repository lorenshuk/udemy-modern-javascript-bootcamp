
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

const removeNote = function (id) {
    const noteIndex = notes.findIndex(function(note) {
        return note.id === id
    })

    if (noteIndex > -1) {
        notes.splice(noteIndex, 1)
    }
}

// Create the individual NOTE <p> element for the main page
const generateNoteDOM = function(note) {
    const noteElement = document.createElement('div')
    const textElement = document.createElement('span')
    const button = document.createElement('button')

    // REMOVE Note button
    button.textContent = 'x'
    noteElement.appendChild(button)
    button.addEventListener('click', function (e) {
        removeNote(note.id)
        saveNotes(notes)
        renderNotes(notes, filters)
    })
    
    // Note Text/Title
    if (note.title.length > 0) {
        textElement.textContent = note.title
    } else {
        textElement.textContent = '(Untitled Note)'
    }
    
    // Add Title Text to the <div>
    noteElement.appendChild(textElement)

    return noteElement
}

// Render the Note entries
const renderNotes = function (notes, filters) {
    const filteredNotes = notes.filter(function (note) {
        return note.title.toLowerCase().includes(filters.searchText.toLowerCase())
    })

    document.querySelector('#notes').innerHTML = ''

    filteredNotes.forEach(function (note) {
        const noteElement = generateNoteDOM(note)
        document.querySelector('#notes').appendChild(noteElement)
    })
}
