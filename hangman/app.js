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
    /*if (error) {
        console.log(error)
    } else { */
        console.log(`Puzzle: ${puzzle}`)
    /* } */
}, (err) => {
    console.log(`Error: ${err}`)
})

/*** Lesson 108: Use the Aync version for testing\example */
// const puzzle = getPuzzleSync()
// console.log(puzzle)

/*** Lesson 109: Create getCountry() function 8/29/20 3:49 PM ***/
/*** Lesson 112: Convert to Promise() architecture (ASYNC)   */
const countryCode = 'US'
getCountry(countryCode).then((countryName) => {
    console.log(`Country Name: ${countryName}`)
}, (err) => {
    console.log(`Error: ${err}`)
})
