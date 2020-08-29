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

/*** Lesson 104: HTTP Requests ***/
// Retrieve a random phrase
const request = new XMLHttpRequest()

// Create an Event Listener to store the phrase
request.addEventListener('readystatechange', (e) => {
    if (e.target.readyState === 4 && e.target.status === 200) {
        // responseText property - JSON value that is returned by the XMLHttpRequest()
        const data = e.target.responseText
        console.log(data)
    }
})
// Open the link
request.open('GET', 'http://puzzle.mead.io/puzzle')
request.send() 


/** Lesson 106 - REST Country API ***/
const countryCode = 'US'
const countryRequest = new XMLHttpRequest()

countryRequest.addEventListener('readystatechange', (e) => {
    if (e.target.readyState == 4 && e.target.status === 200) {
        const data = JSON.parse(e.target.responseText)
        /* Use find() instead, since it returns the first object found in the array, and NOT a whole array of objects
        const result = data.filter(obj => {
            return obj.alpha2Code === countryCode;
        })
        */
        const result = data.find((country) => country.alpha2Code === countryCode)
        console.log(result.name)
    } else if (e.target.readyState === 400) {
        console.log('An error has occurred on GET')
    }
})

countryRequest.open('GET', 'http://restcountries.eu/rest/v2/all')
countryRequest.send() 
