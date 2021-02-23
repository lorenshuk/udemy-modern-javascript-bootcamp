// Set up index.html to load the bundle
// Make sure to load uuid via an npm module when necessary

// --

// Add necessary imports
import { v4 as uuidv4 } from 'uuid'
import { getFilters } from './filters'
import { renderTodos } from './views'
import { getTodos, saveTodos, createTodo, toggleTodo } from './todos'

// Render initial todos
renderTodos()

// Set up search text handler
// Lesson 57: Listener for the Filter Challenge
document.querySelector('#search-text').addEventListener('input', e => {
    const filters = getFilters()
    filters.searchText = e.target.value
    renderTodos()
})

// Set up checkbox handler
document.querySelector('#hide-completed').addEventListener('change', e => {
    const filters = getFilters()
    filters.hideCompleted = e.target.checked
    renderTodos()
})

// Set up form submission handler
document.querySelector('#new-todo').addEventListener('submit', e => {
    e.preventDefault()
    const text = e.target.elements.addToDo.value.trim()
    let todos = getTodos()

    if (text.length > 0) {
        todos.push({
            id: uuidv4(),
            text: text,
            completed: false
        })

        saveTodos()
        renderTodos()
    }

    e.target.elements.addToDo.value = ''
})

// Bonus: Add a watcher for local storage
window.addEventListener('storage', e => {
    if (e.key === 'todos') {
        renderTodos()
    }
})
