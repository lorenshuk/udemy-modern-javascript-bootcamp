// Set up filters default object
let filters = {
    searchText: '',
    hideCompleted: false
}

// getFilters
// Arguments: none
// Return value: filters object
function getFilters() { 
    return filters
}

// setFilters
// Arguments: updates object with optional searchText or hideCompleted
// Return value: none
// Pass an updates object
function setFilters ({ searchText, hideCompleted }) {
    if (typeof searchText === 'string') {
        filters.searchText = searchText
    }
    if (typeof hideCompleted === 'boolean') {
        filters.hideCompleted = hideCompleted
    }
}

filters = getFilters()

// Make sure to set up the exports
export { getFilters, setFilters }