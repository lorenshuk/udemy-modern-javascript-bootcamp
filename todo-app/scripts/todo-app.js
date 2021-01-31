'use strict'

// const paragraphs = document.querySelectorAll('p')

// paragraphs.forEach((paragraph) => {
//     if (paragraph.textContent.toLowerCase().includes('the')) {
//         paragraph.remove()
//     } 
// })

// Lesson 51: Adding elements from an array[
let todos = getSavedTodos()
    /*
    text: 'Order cat food',
    completed: true
}, {
    text: 'Clean kitchen',
    completed: false
}, {
    text: 'Buy human food',
    completed: true
}, {
    text: 'Do work',
    completed: false
}, {
    text: 'Exercise more',
    completed: true
}]
*/

/*************************
 * Lesson 57: Add Filter
 *************************/
// Add <input> for the filter
let filters = {
    searchText: '',
    hideCompleted: false
}

// Lesson 59: Checkbox for Hide Completed TO DO's
let hideCompleted = false

renderTodos(todos, filters)

 // Lesson 57: Listener for the Filter Challenge
document.querySelector('#search-text').addEventListener('input', e => {
    filters.searchText = e.target.value
    renderTodos(todos, filters)
})

document.querySelector('#new-todo').addEventListener('submit', e => {
    e.preventDefault()
    // Challenge: Lesson 126 1/30/21
    // 1. Trim all the inputs
    // 2. Check for empty strings
    let text = e.target.elements.addToDo.value.trim()

    if (text.length > 0) {
        todos.push({
            id: uuidv4(),
            text,
            completed: false
        })
    
        saveTodos(todos)
        renderTodos(todos, filters)
    }

    e.target.elements.addToDo.value = ''
})

// Lesson 59: Add checkbox & Event Listeners
document.querySelector('#hide-completed').addEventListener('change', e => {
    filters.hideCompleted = e.target.checked
    renderTodos(todos, filters)
})
