const product = {
    name: 'Influence'
}

// hasOwnProperty() - check if the Class a property
console.log(product.hasOwnProperty('name'))
// Override the existing method "hasOwnProperty"
Object.prototype.hasOwnProperty = () => 'This is an override of hasOwnProperty()'
    // Display the new method
console.log(product.hasOwnProperty('name'))