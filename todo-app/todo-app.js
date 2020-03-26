// const paragraphs = document.querySelectorAll('p')

// paragraphs.forEach((paragraph) => {
//     if (paragraph.textContent.toLowerCase().includes('the')) {
//         paragraph.remove()
//     } 
// })

// Lesson 51: Adding elements from an array
const todos = [{
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

/*************************
 * Lesson 57: Add Filter
 *************************/
// Add <input> for the filter
let filters = {
    searchText: ''
}

const renderTodos = function (todos, filters) {
    const filteredTodos = todos.filter(function(todo) {
        return todo.text.toLowerCase().includes(filters.searchText.toLowerCase())
    })

    // Count up the incomplete TO DO's
    const incompleteToDos = filteredTodos.filter(function (todo) {
        return !todo.completed
    })
    
    // Display Incomplete Header and Filtered To Do's
    document.querySelector('#todos').innerHTML = ''

    const summary = document.createElement('h2')
    if (!incompleteToDos.length){
        summary.textContent = `All Filtered TO DO's Completed! Good work!`
    } else {
        summary.textContent = `*You have ${incompleteToDos.length} TO DO's left`
    }
    document.querySelector('#todos').appendChild(summary)
    
    filteredTodos.forEach((e) => {
        const newParagraph = document.createElement('p')
        let newText = e.text
        if (!e.completed) {
            newText = `*${newText}`
        }
        newParagraph.textContent = newText
        document.querySelector('#todos').appendChild(newParagraph)
    })
}

renderTodos(todos, filters)

/* Lesson 58: Removed elements for the <form id="add-form"> element addition
// Listen for the TODO-text change
document.querySelector('#new-todo').addEventListener('input', function (e){
    console.log(e.target.value)

    if (e.target.value.length === 1) {
        let newParagraph = document.createElement('p')
        newParagraph.setAttribute('id', 'new-todo-paragraph')
        document.querySelector('body').appendChild(newParagraph)
    } 
    document.querySelector('#new-todo-paragraph').textContent = e.target.value
})
 */

 // Lesson 57: Listener for the Filter Challenge
document.querySelector('#filtertodos').addEventListener('input', function(e) {
    filters.searchText = e.target.value
    renderTodos(todos, filters)
})

document.querySelector('#add-form').addEventListener('submit', function(e) {
    e.preventDefault()
    todos.push({
        text: e.target.elements.addToDo.value,
        completed: false
    })
    renderTodos(todos, filters)
    e.target.elements.addToDo.value = ''
})
