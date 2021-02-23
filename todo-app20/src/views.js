import { getFilters } from './filters'
import { getTodos, saveTodos, toggleTodo, removeTodo } from './todos'

// renderTodos
// Arguments: none
// Return value: none
function renderTodos() {
    const todoEl = document.querySelector('#todos')
    const todos = getTodos()
    const filters = getFilters()
    
    const filteredTodos = todos.filter(todo =>
        todo.text.toLowerCase().includes(filters.searchText.toLowerCase()) && (!filters.hideCompleted || !todo.completed)
    )
    todoEl.innerHTML = ''

    // Display Incomplete Header
    generateSummaryDOM(filteredTodos)

    // Display Filtered To Do's
    if (filteredTodos.length) {
        filteredTodos.forEach(e => todoEl.appendChild(generateTodoDOM(e)))
    } else {
        const emptySum = document.createElement('p')
        emptySum.classList.add('empty-message')
        emptySum.textContent = `* Nothing to do! *`
        todoEl.appendChild(emptySum)
    }
}

// generateTodoDOM
// Arguments: todo
// Return value: the todo element
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
        // todo.completed = !todo.completed
        saveTodos()
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
        saveTodos()
        renderTodos()
    })

    return todoElement
}

// generateSummaryDOM
// Arguments: incompletedTodos
// Return value: the summary element
function generateSummaryDOM (filteredTodos) {
    const summary = document.createElement('h2')
    summary.classList.add('list-title')
    let plural = ''

    // Count up the incomplete TO DO's
    const incompleteToDos = filteredTodos.filter(todo => !todo.completed)
    console.log(`todos.length: ${todos.length}`)
    if (filteredTodos.length === incompleteToDos.length) {
        summary.textContent = `All Filtered TO DO's Completed! Good work!`
    } else {
        plural = incompleteToDos.length === 1 ? '' : "'s"
        summary.textContent = `*You have ${incompleteToDos.length} TO DO${plural} left`
    }
    document.querySelector('#todos').appendChild(summary)
}

// Make sure to set up the exports
export { renderTodos, generateTodoDOM, generateSummaryDOM }