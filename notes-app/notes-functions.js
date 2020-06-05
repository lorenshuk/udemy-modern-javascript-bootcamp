'use strict'

const processData = () => {
    data = '134324234'
}
processData()
console.log(data)

// Retrieve the notes object from localStorage
const getSavedNotes = () => {
    const notesJSON = localStorage.getItem('notes')
    
    // Check for invalid JSON input
    try {
        return notesJSON !== null ? JSON.parse(notesJSON) : []
    } catch {
        return []
    }

}

// Save notes
const saveNotes = notes => {
    localStorage.setItem('notes', JSON.stringify(notes))
}

const removeNote = id => {
    const noteIndex = notes.findIndex(note => {
        return note.id === id
    })

    if (noteIndex > -1) {
        notes.splice(noteIndex, 1)
    }
}

// Create the individual NOTE <p> element for the main page
const generateNoteDOM = note => {
    const noteElement = document.createElement('div')
    const textElement = document.createElement('a')
    const button = document.createElement('button')

    // REMOVE Note button
    button.textContent = 'x'
    noteElement.appendChild(button)
    button.addEventListener('click', () => {
        removeNote(note.id)
        saveNotes(notes)
        renderNotes(notes, filters)
    })
    
    // Note\Anchor Text/Title
    if (note.title.length) {
        textElement.innerHTML = note.title
    } else {
        textElement.innerHTML = 'Untitled Note'
    }
    
    // Add Title Text to the <div>
    textElement.setAttribute('href', `/edit.html#${note.id}`)
    noteElement.appendChild(textElement)

    return noteElement
}

const sortNotes = (notes, sortBy) => {
    if (sortBy === 'byEdited') {
        return notes.sort((a, b) => {
            if (a.updatedAt > b.updatedAt) {
                return -1
            } else if (a.updatedAt < b.updatedAt) {
                return 1
            } else {
                return 0
            }
        })
    } else if (sortBy === 'byCreated') {
        return notes.sort((a, b) => {
            if (a.createdAt > b.createdAt) {
                return -1
            } else if (a.createdAt < b.createdAt) {
                return 1
            } else {
                return 0
            }
        })
    } else {
        return notes.sort((a, b) => {
            if (a.title.toLowerCase() < b.title.toLowerCase()) {
                return -1
            } else if (a.title.toLowerCase() > b.title.toLowerCase()) {
                return 1
            } else {
                return 0
            }
        })
    }
}

// Render the Note entries
const renderNotes = (notes, filters) => {
    notes = sortNotes(notes, filters.sortBy)
   
    const filteredNotes = notes.filter(note => 
        note.title.toLowerCase().includes(filters.searchText.toLowerCase())
    )

    document.querySelector('#notes').innerHTML = ''

    filteredNotes.forEach(note => {
        const noteElement = generateNoteDOM(note)
        document.querySelector('#notes').appendChild(noteElement)
    })
}

const textLastEdited = (timeStamp) => `Last edited ${moment(timeStamp).fromNow()}`