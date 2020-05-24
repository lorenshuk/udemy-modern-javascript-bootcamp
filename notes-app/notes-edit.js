    /* Populate the variables */
const titleElement = document.querySelector('#note-title')
const bodyElement = document.querySelector('#note-body')
const editElement = document.querySelector('#note-edited')
const removeButton = document.querySelector('#remove-note')

let noteId = location.hash.substring(1)
let notes = getSavedNotes()
let note = notes.find(eNote => eNote.id === noteId)

    /* Populate the Elements */
if (!note) {
    location.assign('/index.html')
}

titleElement.value = note.title
bodyElement.value = note.body
editElement.textContent = textLastEdited(note.updatedAt)

/* Event Listeners for the Elements */
titleElement.addEventListener('input', e => {
    note.title = e.target.value
    note.updatedAt = moment().valueOf()
    editElement.textContent = textLastEdited(note.updatedAt)
    saveNotes(notes)
})

bodyElement.addEventListener('input', e => {
    note.body = e.target.value
    note.updatedAt = moment().valueOf()
    editElement.textContent = textLastEdited(note.updatedAt)
    saveNotes(notes)
})

removeButton.addEventListener('click', e => {
    removeNote(note.id)
    saveNotes(notes)
    location.assign('/index.html')
})

window.addEventListener('storage', e => {
    if (e.key === 'notes') {
        notes = JSON.parse(e.newValue)
        note = notes.find(eNote => eNote.id === noteId)
    
        /* Populate the Elements */
        if (!note) {
            location.assign('/index.html')
        }
    
        titleElement.value = note.title
        bodyElement.value = note.body
        editElement.textContent = textLastEdited(note.updatedAt)
  }
})