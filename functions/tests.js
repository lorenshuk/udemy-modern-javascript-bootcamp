// Lesson 116: getLocation API 9/25/20
const getLocation = () => {
    return fetch('http://ipinfo.io/json?token=0eb5f8fc87eb0a').then((response) => {
        if (response.status === 200) {
            return response.json()
        } else {
            throw new Error('Could not retrieve country data')
        }
    }).then((data) => {
        return `City: ${data.city}, Region: ${data.region}, Country: ${data.country}`
    })
}

