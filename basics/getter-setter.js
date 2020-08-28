const data = {
    locations: [],
    get location() {
        // Return the value
        return this._location
    },
    set location(value) {
        // Edit/Sanitize the value if necessary
        this._location = value.trim()
        this.locations.push(this._location)
    }
}

data.location = 'New York'
data.location = 'Atlanta'
data.location = 'Pensacola'
console.log(data)
