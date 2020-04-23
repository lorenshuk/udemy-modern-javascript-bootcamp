    /* Populate the variables */
const titleElement = document.querySelector('#note-title')
const bodyElement = document.querySelector('#note-body')
const removeButton = document.querySelector('#remove-note')

const noteId = location.hash.substring(1)
const notes = getSavedNotes()
const note = notes.find(eNote => {
    return eNote.id === noteId
})

    /* Populate the Elements */
if (note === undefined) {
    location.assign('/index.html')
}

titleElement.value = note.title
bodyElement.value = note.body

    /* Event Listeners for the Elements */
titleElement.addEventListener('input', e => {
    note.title = e.target.value
    saveNotes(notes)
})

bodyElement.addEventListener('input', e => {
    note.body = e.target.value
    saveNotes(notes)
})

removeButton.addEventListener('click', e => {
    removeNote(note.id)
    saveNotes(notes)
    location.assign('/index.html')
})