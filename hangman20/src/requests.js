// *** 10/18/20 Lesson 117 *** -> i. Use Async/Await to clean up the code
const getPuzzle = async (wordCount) => {
    // i.1 Use the fetch() function to populate a new "response" variable
    const response = await fetch('//puzzle.mead.io/puzzle?wordCount=${wordCount}')
    
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

    request.open('GET', '//puzzle.mead.io/puzzle', 0)
    request.send() 

    if (request.readyState === 4 && request.status === 200) {
        // responseText is returned - JSON value parse into string
        const data = JSON.parse(request.responseText)
        return data.puzzle
    } else if (request.readyState === 4) {
        throw new Error('Error occurred on HTTP request in getPuzzleSync().')
    }
}

export { getPuzzle as default }