// Fetch the local todos JSON String array
const getSavedTodos = function () {
    const todoJSON = localStorage.getItem('todos')

    if (todoJSON !== null) {
        return JSON.parse(todoJSON)
    } else {
        return []
    }
}

// Save the todos object array to localStorage
const saveTodos = function(todos) {
    localStorage.setItem('todos', JSON.stringify(todos))
}

// Render application todos based on user "filters"
const renderTodos = function (todos, filters) {
    const filteredTodos = todos.filter(function (todo) {
        return todo.text.toLowerCase().includes(filters.searchText.toLowerCase()) && (!filters.hideCompleted || !todo.completed)
    })
    document.querySelector('#todos').innerHTML = ''

    // Display Incomplete Header and Filtered To Do's
    generateSummaryDOM(filteredTodos)

    filteredTodos.forEach((e) => {
        document.querySelector('#todos').appendChild(generateTodoDOM(e))
    })
}
 
const removeToDo = (id) => {
    const todoIndex = todos.findIndex((todo) => {
        return todo.id === id
    })

   if (todoIndex > -1) {
       todos.splice(todoIndex, 1)
   }
}

const toggleToDo = (id) => {
    const todo = todos.find((el) => {
        return el.id === id
    })

    if (todo !== undefined) {
        console.log(`[removedToDo()] todo:${todo}`)
        todo.completed = !todo.completed
    }
}

// Get the DOM elements for an individual DOM
const generateTodoDOM = function(todo) {
    const todoElement = document.createElement('div')
    const todoCheck = document.createElement('input')
    const removeButton = document.createElement('button')
    const todoText = document.createElement('span')

    // Completed Check Box
    todoCheck.setAttribute('type', 'checkbox')
    todoCheck.checked = todo.completed
    todoElement.appendChild(todoCheck)
    todoCheck.addEventListener('change', () => {
        toggleToDo(todo.id)
       // todo.completed = !todo.completed
        saveTodos(todos)
        renderTodos(todos, filters)
    })

    // To Do Text
    let newText = todo.text
    todoText.textContent = newText
    todoElement.appendChild(todoText)

    // Delete Button
    removeButton.textContent = 'x'
    todoElement.appendChild(removeButton)
    removeButton.addEventListener('click', function(e) {
        removeToDo(todo.id)
        saveTodos(todos)
        renderTodos(todos, filters)
    })

    return todoElement
}

// Get the DOM elements for the list summary
const generateSummaryDOM = function (filteredTodos) {
    const summary = document.createElement('h2')

    // Count up the incomplete TO DO's
    const incompleteToDos = filteredTodos.filter(function (todo) {
        return !todo.completed
    })

    if (todos.length === 0) {
        summary.textContent = `No TO DO's entered`
    }
    else if (!incompleteToDos.length) {
        summary.textContent = `All Filtered TO DO's Completed! Good work!`
    } else {
        summary.textContent = `*You have ${incompleteToDos.length} TO DO's left`
    }
    document.querySelector('#todos').appendChild(summary)

}