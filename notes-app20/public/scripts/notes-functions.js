'use strict'

const processData = () => {
    let data = '134324234'
}

// processData()
//console.log(data)

// Retrieve the notes object from localStorage
function getSavedNotes() {
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
    const noteElement = document.createElement('a')
    const textElement = document.createElement('p')
    const statusElement = document.createElement('p')
    /* Remove the button element, because the whole note entry can be clicked
    const button = document.createElement('button')

    // REMOVE Note button
    button.textContent = 'x'
    noteElement.appendChild(button)
    button.addEventListener('click', () => {
        removeNote(note.id)
        saveNotes(notes)
        renderNotes(notes, filters)
    })
    */

    // Note\Anchor Text/Title
    if (note.title.length) {
        textElement.innerHTML = note.title
    } else {
        textElement.innerHTML = 'Untitled Note'
    }
    
    // 12/10/20 - Resume L124 - add CSS Classes to the elements - noteElement, textElement, statusElement
    textElement.classList.add('list-item__title')
    // Add Title Text to the <div>
    noteElement.appendChild(textElement)
    // 11/18/20 - The text element was changed to a <p> element, and noteELement was changed
    // to an <a>, so set the href to the noteElement instead
    noteElement.setAttribute('href', `/edit.html#${note.id}`)
    // 12/10/20 - Resume L124 - add CSS Classes to the elements - noteElement, textElement, statusElement
    noteElement.classList.add('list-item')
    // b.6 Populate the Edited Status message
    statusElement.textContent = textLastEdited(note.updateAt)
    // 12/10/20 - Resume L124 - add CSS Classes to the elements - noteElement, textElement, statusElement
    statusElement.classList.add('list-item__subtitle')
    noteElement.appendChild(statusElement)

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
    const notesEl = document.querySelector('#notes')
    notes = sortNotes(notes, filters.sortBy)
   
    const filteredNotes = notes.filter(note => 
        note.title.toLowerCase().includes(filters.searchText.toLowerCase())
    )

    notesEl.innerHTML = ''

    if (filteredNotes.length > 0) {
        filteredNotes.forEach(note => {
            const noteElement = generateNoteDOM(note)
            notesEl.appendChild(noteElement)
        })
    } else {
        const emptyMessage = document.createElement('p')
        emptyMessage.textContent = 'No notes entered'
        emptyMessage.classList.add('empty-message')
        notesEl.appendChild(emptyMessage)
    }

}

const textLastEdited = (timeStamp) => `Last edited ${moment(timeStamp).fromNow()}`