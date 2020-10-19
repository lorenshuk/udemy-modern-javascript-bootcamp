/*** 9/14/20 Update to a Promise frameword ***/
    /*** 9/21/20 (L113) Replace with Fetch API code
    const getPuzzle = (wordCount) => new Promise((resolve, reject) => {
        const request = new XMLHttpRequest()

        // Create an Event Listener to store the phrase
        request.addEventListener('readystatechange', (e) => {
            if (e.target.readyState === 4 && e.target.status === 200) {
                // responseText property - JSON value that is returned by the XMLHttpRequest()
                const data = JSON.parse(e.target.responseText)
                resolve(data.puzzle)
            } else if (e.target.readyState === 4) {
                reject('An error has occurred in getPuzzle().')
            }
        })
        // Open the link
        request.open('GET', `http://puzzle.mead.io/puzzle?wordCount=${wordCount}`)
        request.send() 
    }) 
    *** 9/21 Replacement ends here... ***/
    // *** 10/18/20 Lesson 117 *** -> i. Use Async/Await to clean up the code
const getPuzzle = async (wordCount) => {
    // i.1 Use the fetch() function to populate a new "response" variable
    const response = await fetch('http://puzzle.mead.io/puzzle?wordCount=${wordCount}')
    
    /*  i.2 Remove the old fetch() code
    return fetch('http://puzzle.mead.io/puzzle?wordCount=${wordCount}').then((response) => {
        if (response.status === 200) {
            return response.json()
        } else {
            throw new Error('Error fetching the puzzle')
        }
    }).then((data) => {
        return data.puzzle
    })
     */
    
     // i.3 Check the response is valid (200)
    if (response.status === 200) {
        // i.4 Use .json() to parse the data from the "response"
        // i.5 Return the "puzzle" property from the "data" response
        const data = await response.json()
        return data.puzzle
    } else {
        throw new Error('Unable to get puzzle')
    }
}

const getPuzzleSync = () => {
    const request = new XMLHttpRequest()

    request.open('GET', 'http://puzzle.mead.io/puzzle', 0)
    request.send() 

    if (request.readyState === 4 && request.status === 200) {
        // responseText is returned - JSON value parse into string
        const data = JSON.parse(request.responseText)
        return data.puzzle
    } else if (request.readyState === 4) {
        throw new Error('Error occurred on HTTP request in getPuzzleSync().')
    }
}

/** Lesson 106 - REST Country API ***/
/** Lessone 109 - Create the getCountry function 8/29/20 3:45 PM */
/** Lesson 112 - Convert to Promise() architecture (ASYNC) 9/14/20 5:36 PM */
/** Lesson 115 - Rewrite the function to use Fetch() API
    const getCountry = (countryCode) => new Promise((resolve, reject) => {
        const countryRequest = new XMLHttpRequest()

        countryRequest.addEventListener('readystatechange', (e) => {
            if (e.target.readyState == 4 && e.target.status === 200) {
                const data = JSON.parse(e.target.responseText)
                const result = data.find((country) => country.alpha2Code === countryCode)
                resolve(result.name)
            } else if (e.target.status >= 400) {
                reject(`getCountry() HTTP Request status: ${e.target.status}`)
            }
        })

        countryRequest.open('GET', 'http://restcountries.eu/rest/v2/all')
        countryRequest.send() 
    })
***/

/*** Replace the "old" getCountry() with an Async/Await version - Lesson 118 10/18/20 */
const getCountry_Old = (countryCode) => {
    return fetch('http://restcountries.eu/rest/v2/all').then((response) => {
        if (response.status === 200) {
            return response.json()
        } else {
            throw new Error('Could not retrieve country data')
        }
    }).then((data) => {
        const country = data.find((country) => country.alpha2Code === countryCode)
        return country.name
    })
}

const getCountry = async (countryCode) => {
    const response = await fetch('http://restcountries.eu/rest/v2/all')

    if (response.status === 200) {
        const data = await response.json()
        return await data.find((country) => country.alpha2Code === countryCode).name
    } else {
        throw new Error('Error retrieving Country data')
    }

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

/*** Replace the "old" getLocation() with an Async/Await version - Lesson 118 10/18/20 */
const getLocation_Old = () => {
    return fetch('http://ipinfo.io/json?token=0eb5f8fc87eb0a').then((response) => {
        if (response.status === 200) {
            return response.json()
        } else {
            throw new Error('Could not retrieve country data')
        }
    }).then((data) => {
        return data
    })
}

const getLocation = async () => {
    const response = await fetch('http://ipinfo.io/json?token=0eb5f8fc87eb0a')

    if (response.status === 200) {
        return response.json()
    } else {
        throw new Error('Could not retrieve country data')
    }
}

/*** 10/18/20 Lesson 118 Create new function that returns the current country using Async/Await */
const getCurrentCountry = async () => {
    const location = await getLocation()
    return await getCountry(location.country)
}