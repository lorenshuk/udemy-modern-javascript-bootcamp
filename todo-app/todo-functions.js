// Fetch the local todos JSON String array
const getSavedTodos = function () {
    const todoJSON = localStorage.getItem('todos')

    if (todoJSON !== null) {
        return JSON.parse(todoJSON)
    } else {
        return [s]
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
 
// Get the DOM elements for an individual DOM
const generateTodoDOM = function(todo) {
    const newParagraph = document.createElement('p')
    let newText = todo.text
    if (!todo.completed) {
        newText = `*${newText}`
    }
    newParagraph.textContent = newText
    return newParagraph
}

// Get the DOM elements for the list summary
const generateSummaryDOM = function (filteredTodos) {
    const summary = document.createElement('h2')

    // Count up the incomplete TO DO's
    const incompleteToDos = filteredTodos.filter(function (todo) {
        return !todo.completed
    })

    if (!incompleteToDos.length) {
        summary.textContent = `All Filtered TO DO's Completed! Good work!`
    } else {
        summary.textContent = `*You have ${incompleteToDos.length} TO DO's left`
    }
    document.querySelector('#todos').appendChild(summary)

}