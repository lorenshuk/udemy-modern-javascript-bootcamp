const Hangman = function (guessWord, guessLimit) {
    this.guessWord = guessWord.toLowerCase()
    this.guessLimit = guessLimit
    this.wordArray = guessWord.split('')
    this.guessedLetters = ['t','a','y']
}

Hangman.prototype.Puzzle = function () {
    let guessString = 'No guesses '
    let guessShow = ''

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
    
    return `${guessString} -> ${guessShow}`
}

var hangman1 = new Hangman('Totally Awesome', 5)
var hangman2 = new Hangman('Tennessee', 8)

console.log(hangman1.Puzzle())