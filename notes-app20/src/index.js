import { getNotes, createNote, removeNote, sortNotes, updateNote  } from './notes'
import { getFilters, setFilters } from './filters'

// Test code for the construction 2/16/21
// console.log(getNotes())
// createNote()
// createNote()
// createNote()
// createNote()
// console.log(getNotes())

// Remove Note
// console.log('Remove Note Test "b572a912-1b90-49e3-9673-073483463a31"')
// removeNote("b572a912-1b90-49e3-9673-073483463a31")
// console.log(getNotes())

// // Update Note
// console.log('Update Note Test')
// updateNote("6ba8d94f-967b-4891-ad17-7cfa4cb92218", {
//     title: 'The Best Title Ever!',
//     body: 'This is a great body. SY!'
// })

/*** Test Filters Module ***/
console.log(getFilters())
setFilters({
    searchText: 'office',
    sortBy: 'byCreated'
})
console.log(getFilters())
