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
document.querySelector('#filtertodos').addEventListener('input', function(e) {
    filters.searchText = e.target.value
    renderTodos(todos, filters)
})

document.querySelector('#add-form').addEventListener('submit', function(e) {
    e.preventDefault()
    todos.push({
        id: uuidv4(),
        text: e.target.elements.addToDo.value,
        completed: false
    })
    console.log(todos)
    saveTodos(todos)

    renderTodos(todos, filters)
    e.target.elements.addToDo.value = ''
})

// Lesson 59: Add checkbox & Event Listeners
document.querySelector('#hide-completed').addEventListener('change', function (e) {
    filters.hideCompleted = e.target.checked
    renderTodos(todos, filters)
})
