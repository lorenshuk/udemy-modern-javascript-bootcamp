/*****   Test Games   ******/
var game1 = new Hangman('Totally Awesome', 5)
const puzzleEl = document.querySelector('#puzzle')
const guessesEl = document.querySelector('#guesses')
const statusEl = document.querySelector('#status')

statusEl.textContent = game1.statusMessage
puzzleEl.textContent = game1.puzzle
guessesEl.textContent = `Letters used: ${game1.guessedLetters}`

window.addEventListener('keypress', function (e) {
    if (game1.status === 'Playing') {
        // use "fromCharCode()" method
        const guess = String.fromCharCode(e.charCode)
        game1.makeGuess(guess)
        
        statusEl.textContent = game1.statusMessage
        puzzleEl.textContent = game1.puzzle
        guessesEl.textContent = `Letters used: ${game1.guessedLetters}`
    }
})
