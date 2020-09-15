/*** 9/14/20 Update to a Promise frameword ***/
const getPuzzle = (wordCount) => new Promise((resolve, reject) => {
    const request = new XMLHttpRequest()

    // Create an Event Listener to store the phrase
    request.addEventListener('readystatechange', (e) => {
        if (e.target.readyState === 4 && e.target.status === 200) {
            // responseText property - JSON value that is returned by the XMLHttpRequest()
            const data = JSON.parse(e.target.responseText)
            resolve(data.puzzle)
        } else if (e.target.readyState === 4) {
            reject('An error has occurred.')
        }
    })
    // Open the link
    request.open('GET', `http://puzzle.mead.io/puzzle?wordCount=${wordCount}`)
    request.send() 
})

const getPuzzleSync = () => {
    const request = new XMLHttpRequest()

    request.open('GET', 'http://puzzle.mead.io/puzzle', 0)
    request.send() 

    if (request.readyState === 4 && request.status === 200) {
        // responseText is returned - JSON value parse into string
        const data = JSON.parse(request.responseText)
        return data.puzzle
    } else if (request.readyState === 4) {
        throw new Error('Error occurred on HTTP request.')
    }
}

/** Lesson 106 - REST Country API ***/
/** Lessone 109 - Create the getCountry function 8/29/20 3:45 PM */
/** Lesson 112 - Convert to Promise() architecture (ASYNC) 9/14/20 5:36 PM */
const getCountry = (countryCode, callback) => {
    const countryRequest = new XMLHttpRequest()

    countryRequest.addEventListener('readystatechange', (e) => {
        if (e.target.readyState == 4 && e.target.status === 200) {
            const data = JSON.parse(e.target.responseText)
            const result = data.find((country) => country.alpha2Code === countryCode)
            callback(result.name, undefined)
        } else if (e.target.readyState === 400) {
            callback(undefined, 'Error has occured on HTTP API Request')
        }
    })

    countryRequest.open('GET', 'http://restcountries.eu/rest/v2/all')
    countryRequest.send() 
}
    

/*** Lesson 104: HTTP Requests ***/
// // Retrieve a random phrase
// const request = new XMLHttpRequest()

// // Create an Event Listener to store the phrase
// request.addEventListener('readystatechange', (e) => {
    //     if (e.target.readyState === 4 && e.target.status === 200) {
        //         // responseText property - JSON value that is returned by the XMLHttpRequest()
        //         const data = e.target.responseText
        //         console.log(data)
        //     }
        // })
// // Open the link
// request.open('GET', 'http://puzzle.mead.io/puzzle')
// request.send() 
