// Retrieve the notes object from localStorage
const getSavedNotes = function() {
    const notesJSON = localStorage.getItem('notes')
    
    if (notesJSON !== null) {
        return JSON.parse(notesJSON)
    } else {
        return []
    }
}

// Save notes
const saveNotes = function(notes) {
    localStorage.setItem('notes', JSON.stringify(notes))
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
    const textElement = document.createElement('a')
    const button = document.createElement('button')

    // REMOVE Note button
    button.textContent = 'x'
    noteElement.appendChild(button)
    button.addEventListener('click', function () {
        removeNote(note.id)
        saveNotes(notes)
        renderNotes(notes, filters)
    })
    
    // Note\Anchor Text/Title
    if (note.title.length > 0) {
        textElement.innerHTML = note.title
    } else {
        textElement.innerHTML = 'Untitled Note'
    }
    
    // Add Title Text to the <div>
    textElement.setAttribute('href', `/edit.html#${note.id}`)
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