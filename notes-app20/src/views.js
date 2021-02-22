import moment from 'moment'
// Import the filter & sortNotes function for renderNotes()
import { getFilters } from './filters'
import { getNotes, sortNotes } from './notes'

// Create the individual NOTE <p> element for the main page
const generateNoteDOM = note => {
    const noteElement = document.createElement('a')
    const textElement = document.createElement('p')
    const statusElement = document.createElement('p')

    // Note\Anchor Text/Title
    if (note.title.length) {
        textElement.innerHTML = note.title
    } else {
        textElement.innerHTML = 'Untitled Note'
    }

    // 12/10/20 - Resume L124 - add CSS Classes to the elements - noteElement, textElement, statusElement
    textElement.classList.add('list-item__title')

    // Add Title Text to the <div>
    noteElement.appendChild(textElement)

    // 11/18/20 - The text element was changed to a <p> element, and noteELement was changed
    // to an <a>, so set the href to the noteElement instead
    noteElement.setAttribute('href', `/edit.html#${note.id}`)

    // 12/10/20 - Resume L124 - add CSS Classes to the elements - noteElement, textElement, statusElement
    noteElement.classList.add('list-item')

    // b.6 Populate the Edited Status message
    statusElement.textContent = generateLastEdited(note.updatedAt)

    // 12/10/20 - Resume L124 - add CSS Classes to the elements - noteElement, textElement, statusElement
    statusElement.classList.add('list-item__subtitle')
    noteElement.appendChild(statusElement)

    return noteElement
}

// 2. renderNotes() from notes-functions.js
const renderNotes = () => {
    const notesEl = document.querySelector('#notes')
    const filters = getFilters()
    const notes = sortNotes(filters.sortBy)

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
        emptyMessage.textContent = 'No notes entered'
        emptyMessage.classList.add('empty-message')
        notesEl.appendChild(emptyMessage)
    }
}

const initializeEditPage = (noteID) => {
    // DOM Elements
    const titleElement = document.querySelector('#note-title')
    const bodyElement = document.querySelector('#note-body')
    const editElement = document.querySelector('#note-edited')
    // 2/21/21 dateElement(#last-edited) was missing from the code, so added it now
    const dateElement = document.querySelector('#last-edited')
    const notes = getNotes()
    const note = notes.find(eNote => eNote.id === noteID)

    if (!note) {
        location.assign('/index.html')
    }

    titleElement.value = note.title
    bodyElement.value = note.body
    dateElement.textContent = generateLastEdited(note.updatedAt)
}

const generateLastEdited = (timeStamp) => {
    return `Last edited ${moment(timeStamp).fromNow()}`
}

export { generateNoteDOM, renderNotes, generateLastEdited, initializeEditPage }