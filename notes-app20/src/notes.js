import { v4 as uuidv4 } from 'uuid'
import moment from 'moment'

let notes = []

// Retrieve the notes object from localStorage
function loadNotes() {
    const notesJSON = localStorage.getItem('notes')

    // Check for invalid JSON input
    try {
        return notesJSON !== null ? JSON.parse(notesJSON) : []
    } catch {
        return []
    }

}

// Save notes
const saveNotes = () => {
    localStorage.setItem('notes', JSON.stringify(notes))
}

// Expose Notes to other files
let getNotes = () => notes

// Create a note object/element for the array
const createNote = () => {
    const noteID = uuidv4()
    const timeStamp = moment().valueOf()
    
    notes.push({
        id: noteID,
        title: ``,
        body: '',
        createdAt: timeStamp,
        updatedAt: timeStamp
    })    
    saveNotes()
}    

const removeNote = id => {
    const noteIndex = notes.findIndex(note => {
        return note.id === id
    })
    
    if (noteIndex > -1) {
        notes.splice(noteIndex, 1)
        saveNotes()
    }
}

const sortNotes = (sortBy) => {
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
    } else if (sortBy = 'alphabetical') {
        return notes.sort((a, b) => {
            if (a.title.toLowerCase() < b.title.toLowerCase()) {
                return -1
            } else if (a.title.toLowerCase() > b.title.toLowerCase()) {
                return 1
            } else {
                return 0
            }
        })
    } else {
        return notes
    }
}

const updateNote = (id, updates) => {
    // 1. Verify the ID paramater - find the correct note element
    const note = notes.find((note) => note.id == id)
    const timeStamp = moment().valueOf()

    // 2. Make sure the note is found
    if (!note) {
        return
    }

    if (typeof updates.title == 'string' && updates.title != note.title) {
        note.title = updates.title
        note.updateAt = timeStamp
    }
    if (typeof updates.body == 'string' && updates.body != note.body) {
        note.body = updates.body
        note.updateAt = timeStamp
    }
    saveNotes()
}

notes = loadNotes()

export { getNotes, createNote, removeNote, sortNotes, updateNote }