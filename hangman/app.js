Hangman.prototype.getPuzzle = function () {
    let guessShow = ''
    let winner = true
    const wordArray = this.guessWord.toLowerCase().split('')

    wordArray.forEach(letter => {
        if (letter === ' ') {
            guessShow += ' '
        } else if (this.guessedLetters.includes(letter)) {
            guessShow += letter;
        } else {
            guessShow += '*'
            winner = false
        }
    });

    return guessShow
}

Hangman.prototype.makeGuess = function (guess) {
    guess = guess.toLowerCase()
    const isUnique = !this.guessedLetters.includes(guess)
    const isBadGuess = !this.guessWord.toLowerCase().split('').includes(guess)

    if (isUnique) {
        this.guessedLetters.push(guess)
        this.guessedLetters.sort()
    }

    if (isUnique && isBadGuess)
        this.guessLimit--

    this.getStatus()
}

Hangman.prototype.getStatus = function () {
    let winner = true
    const wordArray = this.guessWord.toLowerCase().split('')

    if (this.guessLimit <= 0)
        this.status = 'Failed'
    else {
        wordArray.forEach(letter => {
            if (letter != ' ' && !this.guessedLetters.includes(letter)) {
                winner = false
            }
        });
    
        console.log(`getStatus: ${winner}`)

        if (winner)
            this.status = 'Finished'
        else    
            this.status = 'Playing'
    }
}

    /* Lesson 98 */
Hangman.prototype.statusMessage = function (status) {
    let returnString = ''

    console.log(`statusMessage: ${status}`)

    switch (status) {
        case 'Failed':
            returnString = `Nice try! The word was ${this.guessWord}.`;
            break;
        case 'Playing':
            returnString = `Guesses Left: ${this.guessLimit}`;
            break;
        default:
            returnString = `Great work! You guessed the word!`
            break;
    }

    return returnString
}

/*****   Test Games   ******/
var game1 = new Hangman('Totally Awesome', 5)
const puzzleEl = document.querySelector('#puzzle')
const guessesEl = document.querySelector('#guesses')
const statusEl = document.querySelector('#status')

statusEl.textContent = game1.status
puzzleEl.textContent = game1.getPuzzle()
guessesEl.textContent = `Letters used: ${game1.guessedLetters}`

window.addEventListener('keypress', function (e) {
    if (game1.status === 'Playing') {
        // use "fromCharCode()" method
        const guess = String.fromCharCode(e.charCode)
        game1.makeGuess(guess)
        
        statusEl.textContent = game1.statusMessage(game1.status)
        puzzleEl.textContent = game1.getPuzzle();
        guessesEl.textContent = `Letters used: ${game1.guessedLetters}`
    }
})
