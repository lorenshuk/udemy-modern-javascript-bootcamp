// Make the function ASYNC by using the "async()" keyword
    // * async() function ALWAYS return a PROMISE object -> return value: Promise { undefined }
const processData = async() => {
    // if we return "12", the promise gets "resolved" when we return something
    return 12
}

console.log(processData())
// If something is returned, then we can move on to then()
processData().then((data) => {
    console.log('Data', data)
}).catch((error) => {
    console.log(error)
})

// 2. Pull getDataPromise() from promises.js to illustrate async\await
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
