/*** Callback  ***/
// 9/21(L113) Add "num" parameter for the function callback
const getDataCallback = (num, callback) => {
    // Simulate a delay with "setTimeout()" function
    setTimeout(() => {
        if (typeof(num) === 'number') {
            callback(undefined, num * 2)
        } else {
            callback('Number must be provided')
        }
    }, 2000);
}

// Call the function to run the callback function within the argument section
getDataCallback(2, (err, data) => {
    if (err) {
        console.log(err)
    } else {
        getDataCallback(data, (err, data) => {
            if (err) {
                console.log(err)
            } else {
                console.log(`getDataCallback: ${data}`)
            }
        })
    }
})



/*** Promise ***/
// 9/21(L113) Change the "data" parameter name to "num"
const getDataPromise = (num) => new Promise((resolve, reject) => {
    setTimeout(() => {
        // Use ternary operator: Resolve the num, reject() if number is not sent
        typeof num === 'number' ? resolve(num * 2) : reject('Number must be passed')
    }, 2000);
})

getDataPromise(2).then((num) => {
	// Call the Promise "getDataPromise" again
		/*** Wrong Way: Second call with .then() ***/
    getDataPromise(num).then((num) => {
        console.log(`Promise Nesting Example: ${num}`)
    }, (err) => {
        console.log(err)
    })
}, (err) => {
    console.log(err)
})


// i.Promise Chaining Way
/* 
    1) Use the then() method as usual
    2) Call the promise ()method as before
    3) return the result of the 2nd Promise call
    4) CHAIN with a then() call
*/
getDataPromise(2).then((num) => {
    // 2) Call Promise function again
    // 3) return the result
    return getDataPromise(num)
    // 4) Chain to the data with another then()
}).then((data) => {
    return getDataPromise(data)
}).then((data) => { 
    console.log(`Promise chain: ${data}`)
}).catch((err) => {
    console.log(err)
})
