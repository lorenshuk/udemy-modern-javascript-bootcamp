const filters = {
    searchText: '',
    sortBy: 'byEdited'
}

const getFilters = () => filters

// Pass an updates object
const setFilters = (updates) => {
    if (typeof updates.searchText === 'string') {
        filters.searchText = updates.searchText
    }
    if (typeof updates.sortBy === 'string') {
        filters.sortBy = updates.sortBy
    }
}
		
export { getFilters, setFilters }