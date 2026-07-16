// 1. Write a function called add7 that takes one number and returns 
// that number + 7.
function add7(a) {
    return a + 7
}
console.log(add7(10))

// 2. Write a function called multiply that 
// takes 2 numbers and returns their product.
function multiply(a,b) {
    return a * b
}
console.log(multiply(3,2))

// 3. Write a function called capitalize that takes a string and returns that 
// string with only the first letter capitalized. 
// Make sure that it can take strings that are lowercase, UPPERCASE or BoTh.
function capitilize(string) {
    const first_letter = string.slice(0,1);
    const rest_letters = string.slice(1);
    return first_letter.toUpperCase() + rest_letters.toLowerCase()
}
console.log(capitilize('abcd'))
console.log(capitilize('ABCD'))

// 4. Write a function called lastLetter that takes a string and returns the very last letter of that string
function lastLetter(string) {
    const last_letter = string.slice(-1)
    return last_letter
}
console.log(lastLetter("abcd"))

module.exports = {add7, multiply, capitilize, lastLetter}