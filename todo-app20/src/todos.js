// Setup the empty todos array
import { v4 as uuidv4 } from 'uuid'

let todos = []

// Retrieve the windows.localStorage "todos"  and store it to the app's "todos" object
function loadTodos() {
    const todosJSON = localStorage.getItem('todos')

    // Check for invalid JSON input
    try {
        todos = todosJSON ? JSON.parse(todosJSON) : []
    } catch {
        todos = []
    }
}

// saveTodos
// Arguments: none
// Return value: none
const saveTodos = () => {
    localStorage.setItem('todos', JSON.stringify(todos))
}

// getTodos
// Arguments: none
// Return value: todos array
let getTodos = () => todos

// createTodo
// Arguments: todo text
// Return value: none
function createTodo (tdText) {
    const todoID = uuidv4()

    todos.push({
        id: todoID,
        text: tdText,
        completed: false
    })
    saveTodos()
}

// removeTodo
// Arguments: id of todo to remove
// Return value: none
function removeTodo (todoID) {
    const todoIndex = todos.findIndex(todoEl => todoEl.id === todoID)

    if (todoIndex > -1) {
        todos.splice(todoIndex, 1)
        saveTodos()
    }
}

// toggleTodo
// Arguments: id of todo to toggle
// Return value: none
function toggleTodo (todoID) {
    const foundTD = todos.find(todoEl => todoEl.id === todoID)

    if (foundTD) {
        foundTD.completed = !foundTD.completed
        saveTodos()
    }
}

// Make sure to call loadTodos and setup the exports
loadTodos()

export { loadTodos, getTodos, createTodo, removeTodo, toggleTodo }
