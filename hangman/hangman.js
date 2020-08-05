const Hangman = function (guessWord, guessLimit) {
    this.guessWord = guessWord.toLowerCase()
    this.guessLimit = guessLimit
    this.wordArray = guessWord.split('')
    this.guessedLetters = []
}

Hangman.prototype.Puzzle = function () {
    let guessString = '[No guesses] '
    let guessShow = ''
    let rightGuess = false

    if (this.guessedLetters.length > 0) {
        guessString = 'Guesses: '
        let i = 0

        this.guessedLetters.forEach(letter => {
            guessString = guessString + (i>0 ? ', ' : '') + `"${letter}"`
            i++
        })
    }

    this.wordArray.forEach(letter => {
        if (letter == ' ') {
            guessShow += ' '
        } else if (this.guessedLetters.includes(letter.toLowerCase())) {
            guessShow += letter;
        } else {
            guessShow += '*'
        }
    });
    
    return `${guessString} -> ${guessShow} : Guesses Left ${this.guessLimit}`
}

Hangman.prototype.makeGuess = function (guess) {
    guess = guess.toLowerCase()
    const isUnique = !this.guessedLetters.includes(guess)
    const isBadGuess = !this.guessWord.split('').includes(guess)

    if (isUnique)
        this.guessedLetters.push(guess)

    if (isUnique && isBadGuess)
        this.guessLimit--
}

/*
    Test Games
*/
var hangman1 = new Hangman('Totally Awesome', 5)

// GAME 2
var hangman2 = new Hangman('Tennessee', 5)


window.addEventListener('keypress', function (e) {
    // use "fromCharCode()" method
    const guess = String.fromCharCode(e.charCode)
    hangman1.makeGuess(guess)
    console.log(hangman1.Puzzle())
})
