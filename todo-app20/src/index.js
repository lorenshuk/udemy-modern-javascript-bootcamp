// Add necessary imports
// import { v4 as uuidv4 } from 'uuid'
import { setFilters } from './filters'
import { renderTodos } from './views'
import { createTodo, loadTodos } from './todos'

// Render initial todos
renderTodos()

// Set up search text handler
// Lesson 57: Listener for the Filter Challenge
document.querySelector('#search-text').addEventListener('input', e => {
    setFilters({
        searchText: e.target.value
    })
    renderTodos()
})

// Set up checkbox handler
document.querySelector('#hide-completed').addEventListener('change', e => {
    setFilters({
        hideCompleted: e.target.checked
    })
    renderTodos()
})

// Set up form submission handler
document.querySelector('#new-todo').addEventListener('submit', e => {
    e.preventDefault()
    const text = e.target.elements.addToDo.value.trim()

    if (text.length > 0) {
        createTodo(text)
        renderTodos()
        e.target.elements.addToDo.value = ''
    }

})

// Bonus: Add a watcher for local storage
window.addEventListener('storage', e => {
    if (e.key === 'todos') {
        loadTodos()
        renderTodos()
    }
})
