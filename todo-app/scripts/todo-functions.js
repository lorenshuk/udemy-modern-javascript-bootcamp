'use strict'

// Fetch the local todos JSON String array
const getSavedTodos = () => {
    const todoJSON = localStorage.getItem('todos')

    try {
        return todoJSON !== null ? JSON.parse(todoJSON) : []
    } catch {
        return []
    }
}

// Save the todos object array to localStorage
const saveTodos = todos =>
    localStorage.setItem('todos', JSON.stringify(todos))

// Render application todos based on user "filters"
const renderTodos = (todos, filters) => {
    const todoEl = document.querySelector('#todos')
    const filteredTodos = todos.filter(todo => 
        todo.text.toLowerCase().includes(filters.searchText.toLowerCase()) && (!filters.hideCompleted || !todo.completed)
    )
    todoEl.innerHTML = ''

    // Display Incomplete Header
    generateSummaryDOM(filteredTodos)
    
    // Display Filtered To Do's
    if (filteredTodos.length){
        filteredTodos.forEach(e => todoEl.appendChild(generateTodoDOM(e)))
    } else {
        const emptySum = document.createElement('p')
        emptySum.classList.add('empty-message')
        emptySum.textContent = `* Nothing to do! *`
        todoEl.appendChild(emptySum)
    }
}
 
const removeToDo = (id) => {
    const todoIndex = todos.findIndex(todo => todo.id === id)

   if (todoIndex > -1) {
       todos.splice(todoIndex, 1)
   }
}

const toggleToDo = id => {
    const todo = todos.find(el => el.id === id)

    if (todo) {
        console.log(`[removedToDo()] todo:${todo}`)
        todo.completed = !todo.completed
    }
}

// Get the DOM elements for an individual DOM
const generateTodoDOM = todo => {
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
        toggleToDo(todo.id)
       // todo.completed = !todo.completed
        saveTodos(todos)
        renderTodos(todos, filters)
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
        removeToDo(todo.id)
        saveTodos(todos)
        renderTodos(todos, filters)
    })

    return todoElement
}

// Get the DOM elements for the list summary
const generateSummaryDOM = filteredTodos => {
    const summary = document.createElement('h2')
    summary.classList.add('list-title')
    let plural = ''

    // Count up the incomplete TO DO's
    const incompleteToDos = filteredTodos.filter(todo => !todo.completed)

    if (!todos.length) {
        summary.textContent = `No TO DO's entered`
    } 
    else if (!incompleteToDos.length) {
        summary.textContent = `All Filtered TO DO's Completed! Good work!`
    } else {
        plural = todos.length == 1 ? '' : "'s"
        summary.textContent = `*You have ${incompleteToDos.length} TO DO${plural} left`
    }
    document.querySelector('#todos').appendChild(summary)
}