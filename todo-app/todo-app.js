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

// Count up the incomplete TO DO's
const incompleteToDos = todos.filter(function (todo) {
    return !todo.completed
})
const summary = document.createElement('h2')
summary.textContent = `You have ${incompleteToDos.length} TO DO's left`
document.querySelector('body').appendChild(summary)

// Print all To Do's
todos.forEach((e) => {
    const newParagraph = document.createElement('p')
    newParagraph.textContent = e.text
    document.querySelector('body').appendChild(newParagraph)
})

document.querySelector('button').addEventListener('click', function (e) {
    e.target.textContent = e.target.textContent === 'Button Was Clicked' ? "Add To Do" : "Button Was Clicked"
})

