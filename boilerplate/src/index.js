// Lesson 149: Challenge: printTeam
const  printTeam = (team, coach, ...players) => {
    return `Team: ${team.trim()}\nCoach: ${coach.trim()}\nPlayers: ${players.join(', ')}`
}

// console.log(printTeam('Cougars', 'Lindsay Soto', 'Brandi', 'Mandy', 'Phil', 'Alle'))

// Lesson 150: Spread Operator (. . .listName)
const team = {
    name: 'Cougars',
    coach: 'Lindsay Soto',
    players: ['Brandi', 'Mandy', 'Phil', 'Alle']
}

// function spreadTest (param1) {
//     console.log(`spreadTest: ${param1}`)
//     return param1
// }

// console.log(spreadTest(...team.players))
// console.log(printTeam(team.name, team.coach, ...team.players))

// // Add to the array
// players2 = team.players
// players2[0] = 'Chase'
// console.log(`playerList2: ${team.players}`)

// playerAdd = [...team.players, 'Sarah']
// console.log(`playerAdd: ${playerAdd}`)

// let house = {
//     bedrooms: 2,
//     bathrooms: 1.5,
//     yearBuilt: 2017
// }
// // Create a copy of the object
// let newHouse = {
//     ...house
// }

// console.log(`house:`)
// console.log(house)
// console.log(`newHouse: `)
// console.log(newHouse)

// house.bathrooms = 4
// newHouse = {
//     ...house,
//     bedrooms: 6
// }

// console.log(`house:`)
// console.log(house)
// console.log(`newHouse: `)
// console.log(newHouse)

// /***** Lesson 151: Object Spread Operator *****/
// let person = {
//     name: 'Jimbo',
//     age: 69
// }

// let location = {
//     city: 'Tel Aviv',
//     country: 'Israel'
// }

// let overview = {
//     ...person,
//     ...location
// }

// console.log(overview)


/********************************/
/** Lesson 152: Destructuring ***/
/** 3/2/21 8:19 PM            ***/
/********************************/


/*** End of Lesson 152: Destructuring ***/