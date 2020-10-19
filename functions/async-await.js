/*
// a. Make the function ASYNC by using the "async()" keyword
    // * async() function ALWAYS return a PROMISE object -> return value: Promise { undefined }
const processData = async() => {
    // if we return "12", the promise gets "resolved" when we return something
    return 12
}

    // i) If something is returned, then we can move on to then()

console.log(processData())
processData().then((data) => {
    console.log('Data', data)
}).catch((error) => {
    console.log(error)
})
*/


// b. AWAIT example 
    // i. Pull getDataPromise() from promises.js to illustrate async\await
const getDataPromise = (num) => new Promise((resolve, reject) => {
    setTimeout(() => {
        // Use ternary operator: Resolve the num, reject() if number is not sent
        typeof num === 'number' ? resolve(num * 2) : reject('Number must be passed')
    }, 2000);
})

    // ii. Put the "await" operator in "processData()"
const processData = async () => {
    // a. Use "Await" so you don't have to chain the commands
        // Store the returning value to a variable and use the "await" operator
    // a.1 change "const" to a "let", so you can call "getDataPromise()" again
    let data = await getDataPromise(2)
    // a.2 Call the "getDataPromise" again - should yield 8 => 2 * 4
    data = await getDataPromise(data)
    return data
}

processData().then((data) => { 
    console.log(`"data" is ${data}`)
}).catch((error) => {
    console.log('Error', error)
})


