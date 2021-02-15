// 2/14/21 Lesson 135: JS Modules Challenge
function add(a, b) {
    return a + b
}

function multi(a, b) {
    return a * b
}

// Lesson 139: Test the problem with webpack server - 2/14/21 5:24 PM
// console.log('Utilities.js: test a problem with webpack server')

export { multi, add as default}