const createTipper = (tip) => {
    return (billAmount) => tip * billAmount
}

const tip15 = createTipper(.15)
const tip20 = createTipper(.2)
const tip25 = createTipper(.25)

console.log(tip15(100))
console.log(tip20(100))
console.log(tip25(100))
