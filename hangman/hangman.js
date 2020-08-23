class Hangman {
    constructor (guessWord, guessLimit) {
        this.guessWord = guessWord
        this.guessLimit = guessLimit
        this.guessedLetters = []
        this.status = 'Playing'
    }

    getPuzzle () {
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

    makeGuess (guess) {
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

    getStatus () {
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
    statusMessage (status) {
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

}