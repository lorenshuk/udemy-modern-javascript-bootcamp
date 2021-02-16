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

// Expose Notes to other files
const getNotes = () => notes

notes = loadNotes()

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

export { getNotes }