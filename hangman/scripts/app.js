/*****   Test Games   ******/
const puzzleEl = document.querySelector('#puzzle')
const guessesEl = document.querySelector('#guesses')
// L118.2.2
let game1

window.addEventListener('keypress', (e) => {
        const guess = String.fromCharCode(e.charCode)
        game1.makeGuess(guess)
        render()
})

// L118.2.3 Create a function to render the # of attempts
// - called from startGame()
const render = () => {
    puzzleEl.textContent = game1.puzzle
    guessesEl.textContent = game1.statusMessage
}

 /*** Lesson 118.2 Integrate Data into Hangman - 10/18/20 */
const startGame = async () => {
    const puzzle = await getPuzzle('2')
    game1 = new Hangman(puzzle, 5)
    render()
}

// L118.2.1 Set up EventListener to Start Game
document.querySelector('#reset').addEventListener('click', startGame)

// L118.2 Start the game right off the bat
startGame()