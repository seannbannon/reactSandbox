//MAP CHALLENGES
// Challenge 1:
// Given an array of numbers, return an array of each number, squared

const nums = [1, 2, 3, 4, 5]
// --> [1, 4, 9, 16, 25]

const squared = nums.map(function(number) {
    return number * number
})
console.log(squared)


//Challenge 2:
//Given an array of strings, return an array where the first letter of each string is capitalized

const names = ["alice", "bob", "charlie", "butkus"]
// --> ["Alice", "Bob", "Charlie", "Butkus"]

const capital = names.map((name) => {
    return name[0].toUpperCase() + name.slice(1)
})
console.log(capital)


//Challenge 3:
//Given an array of strings, return an array of strings that wraps each item of the array in an HTML like <p> tag.

const pokemon = ["Mewtwo", "Pikachu", "Jigglypuff"]
// --> ["<p>Mewtwo</p>, <p>Pikachu</p>, <p>Jigglypuff</p>"]

const elements = pokemon.map(mon => `<p>${mon}</p>`)
console.log(elements)