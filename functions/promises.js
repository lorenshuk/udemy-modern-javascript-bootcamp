/*** Callback  ***/
const getDataCallBack = (callback) => {
    // Simulate a delay with "setTimeout()" function
    setTimeout(() => {
        callback('This is my callback error', undefined)
    }, 2000);
}

// Call the function to run the callback function within the argument section
getDataCallBack((err, data) => {
    if (err) {
        console.log(err)
    } else {
        console.log(data)
    }
})


/*** Promise ***/
const myPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        // resolve('This is my Promise to RESOLVE');
        reject('This is my Promise to REJECT')
    }, 2000);
})

myPromise.then((data) => {
    console.log(data)
}, (err) => {
    console.log(err)
})