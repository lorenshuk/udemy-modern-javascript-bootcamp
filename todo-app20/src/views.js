import { getFilters } from './filters'
import { getTodos, toggleTodo, removeTodo, saveTodos } from './todos'

function renderTodos() {
    const todoEl = document.querySelector('#todos')
    const { hideCompleted, searchText } = getFilters()
    
    const filteredTodos = getTodos().filter(todo =>
        todo.text.toLowerCase().includes(searchText.toLowerCase()) && (!hideCompleted || !todo.completed)
    )
    todoEl.innerHTML = ''

    // Display Incomplete Header
    generateSummaryDOM(filteredTodos)

    // Display Filtered To Do's
    if (filteredTodos.length) {
        filteredTodos.forEach(e => {
            todoEl.appendChild(generateTodoDOM(e))
        })
    } else {
        const emptySum = document.createElement('p')
        emptySum.classList.add('empty-message')
        emptySum.textContent = `* Nothing to do! *`
        todoEl.appendChild(emptySum)
    }
}

function generateTodoDOM (todo) {
    const todoElement = document.createElement('label')
    const containerEl = document.createElement('div')
    const todoCheck = document.createElement('input')
    const removeButton = document.createElement('button')
    const todoText = document.createElement('span')

    // Completed Check Box
    todoCheck.setAttribute('type', 'checkbox')
    todoCheck.checked = todo.completed
    containerEl.appendChild(todoCheck)
    todoCheck.addEventListener('change', () => {
        toggleTodo(todo.id)
        renderTodos()
    })

    // To Do Text
    let newText = todo.text
    todoText.textContent = newText
    containerEl.appendChild(todoText)

    // Container Element
    todoElement.classList.add('list-item')
    containerEl.classList.add('list-item__container')
    todoElement.appendChild(containerEl)

    // Remove Button
    removeButton.textContent = ' remove '
    removeButton.classList.add('button', 'button--text')
    todoElement.appendChild(removeButton)
    removeButton.addEventListener('click', e => {
        removeTodo(todo.id)
        renderTodos()
    })

    return todoElement
}

function generateSummaryDOM (filteredTodos) {
    const summary = document.createElement('h2')
    summary.classList.add('list-title')
    const todos = getTodos()
    const filters = getFilters()
    const plural = filteredTodos.length === 1 ? '' : "'s"

    // Count up the Completed TO DO's
    const completedToDos = todos.filter(todo => todo.completed)
    
    if (filters.hideCompleted && completedToDos.length > 0 && completedToDos.length === todos.length) {
        summary.textContent = `All TO DO's Completed! Good work!`
    } else {
        summary.textContent = `*You have ${todos.length - completedToDos.length} TO DO${plural} left`
    }
    document.querySelector('#todos').appendChild(summary)
}

export { renderTodos, generateTodoDOM, generateSummaryDOM }