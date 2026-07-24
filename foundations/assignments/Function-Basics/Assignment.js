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

// module.exports = {add7, multiply, capitilize, lastLetter}

// Exercise from javascript.info/array-methods
// Translate border-left-width to borderLeftWidth
function camelize(str){
    let str_arr = str.split("-");
    str_arr = str_arr.map(function(item, index) {
        if (index == 0) {
            return item
        } else {
            return item = item[0].toUpperCase() + item.slice(1);
        }
    });
    str_arr = str_arr.join("");
    return str_arr;
}

console.log(camelize("list-style-image"));

// Filter range
function filterRange(arr, a, b){
    return arr.filter(n => (a <= n) && (n <= b));
}

let arr = [5, 3, 8, 1];
let filtered = filterRange(arr, 1, 4);
console.log(filtered)

// Filter range "in place"
function filterRangeInPlace(arr, a, b) {
    for (let i = arr.length - 1; i >= 0; i--){
        if (arr[i] < a || arr[i] > b){
            arr.splice(i, 1);
        }
    }
}

filterRangeInPlace(arr, 1, 4);
console.log(arr);

// Sort in decreasing order
function sortInDecreasingOrder(arr) {
    arr.sort((a,b) => b - a);
}
arr = [5, 2, 1, -10, 8];
sortInDecreasingOrder(arr);
console.log(arr);

// Copy and sort array
function copySorterd(arr) {
    let sorted = arr.slice();
    sorted.sort((a, b) => a.localeCompare(b));
    return sorted
}
arr = ["HTML", "JavaScript", "CSS"];
let sorted = copySorterd(arr)
console.log(arr)
console.log(sorted)
arr = ["a", "Z", "b"];
sorted = copySorterd(arr)
console.log(arr)
console.log(sorted)
console.log(arr.slice().sort())

// Shuffle an array
function shuffle(arr) {
    for (let i=0; i<arr.length; i++){
        let random_number = Math.floor(Math.random()*arr.length);
        let removed = arr.splice(random_number, 1);
        arr.push(removed[0])
    }
}

arr = [1, 2, 3];
shuffle(arr)
console.log(arr);
shuffle(arr)
console.log(arr);
shuffle(arr)
console.log(arr);

// counts of appearances for all possible permutations
let count = {
  '123': 0,
  '132': 0,
  '213': 0,
  '231': 0,
  '321': 0,
  '312': 0
};

for (let i = 0; i < 1000000; i++) {
  let array = [1, 2, 3];
  shuffle(array);
  count[array.join('')]++;
}

// show counts of all possible permutations
for (let key in count) {
  console.log(`${key}: ${count[key]}`);
}

// Filter unique array members
function unique(arr) {
    let uniques = [];
    for (let i=0; i<arr.length; i++){
        if (!uniques.includes(arr[i])) {
            uniques.push(arr[i])
        }
    }
    return uniques
}