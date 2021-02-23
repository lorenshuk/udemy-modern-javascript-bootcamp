// Setup the empty todos array

import { v4 as uuidv4 } from 'uuid'
import moment from 'moment'

// loadTodos
// Arguments: none
// Return value: none
let todos = []

// Retrieve the notes object from localStorage
function loadTodos() {
    const todosJSON = localStorage.getItem('todos')

    // Check for invalid JSON input
    try {
        return todosJSON !== null ? JSON.parse(todosJSON) : []
    } catch {
        return []
    }

}

// saveTodos
// Arguments: none
// Return value: none
const saveTodos = () => localStorage.setItem('todos', JSON.stringify(todos))

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
    console.log(`removeTodo(): ${todoID}`)

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
    }
}

// Make sure to call loadTodos and setup the exports
todos = loadTodos()

export { saveTodos, getTodos, createTodo, removeTodo, toggleTodo }
