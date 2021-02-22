import { initializeEditPage, generateLastEdited } from './views'
import { updateNote, removeNote } from './notes'

/*** Initlialize the constants & properties */
const titleElement = document.querySelector('#note-title')
const bodyElement = document.querySelector('#note-body')
const editElement = document.querySelector('#note-edited')
const removeButton = document.querySelector('#remove-note')
const dateElement = document.querySelector('#last-edited')
const noteId = location.hash.substring(1)

/* 2/21/21 Initialize Edit Page */
initializeEditPage(noteId)

/* Event Listeners for the Elements */
titleElement.addEventListener('input', e => {
    // 2/21/21 Use updateNote in notes.js
    // 2/21/21 Edit uddateNote(id, noteObject) to return the updated note object, so you can reference in the functions below the code
    const note = updateNote(noteId, {
        title: e.target.value
    })
    dateElement.textContent = generateLastEdited(note.updatedAt)
})

bodyElement.addEventListener('input', e => {
    // 2/21/21 Use updateNote in notes.js
    // 2/21/21 Edit uddateNote(id, noteObject) to return the updated note object, so you can reference in the functions below the code
    const note = updateNote(noteId, {
       body: e.target.value
    })
    dateElement.textContent = generateLastEdited(note.updatedAt)
})

removeButton.addEventListener('click', e => {
    removeNote(noteId)
    location.assign('/index.html')
})

window.addEventListener('storage', e => {
    if (e.key === 'notes') {
        // 2/21/21 Call the new function in views.js
        initializeEditPage(noteId)
    }
})
