const Hangman = function (guessWord, guessLimit) {
    this.guessWord = guessWord
    this.guessLimit = guessLimit
    this.guessedLetters = []
    this.status = 'Playing'
}