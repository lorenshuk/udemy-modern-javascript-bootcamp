/*****   Test Games   ******/
var game1 = new Hangman('Totally Awesome', 5)
const puzzleEl = document.querySelector('#puzzle')
const guessesEl = document.querySelector('#guesses')
const statusEl = document.querySelector('#status')

statusEl.textContent = game1.statusMessage
puzzleEl.textContent = game1.puzzle
guessesEl.textContent = `Letters used: ${game1.guessedLetters}`

window.addEventListener('keypress', (e) => {
    if (game1.status === 'Playing') {
        // use "fromCharCode()" method
        const guess = String.fromCharCode(e.charCode)
        game1.makeGuess(guess)
        
        statusEl.textContent = game1.statusMessage
        puzzleEl.textContent = game1.puzzle
        guessesEl.textContent = `Letters used: ${game1.guessedLetters}`
    }
})


/*** Lesson 107: Callback function  ***/
getPuzzle('3').then((puzzle) => {
    console.log(`GetPuzzle call: ${puzzle}`)
}).catch((err) => {
    console.log(`Unable to fetch the puzzle: ${err}`)
})

/*** Lesson 108: Use the Aync version for testing\example */
// const puzzle = getPuzzleSync()
// console.log(puzzle)

/*** Lesson 109: Create getCountry() function 8/29/20 3:49 PM ***/
/*** Lesson 112: Convert to Promise() architecture (ASYNC)   */
const countryCode = 'xx'
getCountry(countryCode).then((countryName) => {
    console.log(`Country Name: ${countryName}`)
}).catch((err) => {
    console.log(`Error: ${err}`)
})

/*** 9/21/20(L113) Fetch API - Promises 
// (1) Create a new method at the bottom of the file
// (ii) Use .then() to run a callback function
fetch('http://puzzle.mead.io/puzzle', {}).then((response) => {
    // (2) Same status as any HTTP request 200 = good
    if (response.status === 200) {
        // Call the json() method to parse the returned "Promise"
        return response.json()
    } else {
        throw new Error('Unable to fetch puzzle')
    }
}).then((data) => { 
    console.log(data.puzzle)
// (3) Catch any errors from the fetch
}).catch((error) => {
    console.log(error)
})
9/21/20 Test code ***/
