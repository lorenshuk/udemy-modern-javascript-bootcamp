import Hangman from './hangman'
import getPuzzle from './requests'

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
// L122 - Challenge: Fill the puzzleEL element with innerHTML string of a <span> for each letter in the 
// Puzzle solution - 10/25/20
const render = () => {
    puzzleEl.innerHTML = ``
    guessesEl.textContent = game1.statusMessage

    // L122: Create a <span> for each letter - 10/25/20
    const puzzleText = game1.puzzle
    let puzzleSpan = ``

    for (let i = 0; i < puzzleText.length; i++) {
        puzzleSpan = puzzleSpan + `<span>` + puzzleText.charAt(i) + `</span>`
    }
    puzzleEl.innerHTML = puzzleSpan

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