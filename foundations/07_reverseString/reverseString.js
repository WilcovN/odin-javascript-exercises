// const reverseString = function(str) {
//     let arr = str.split("");
//     let reverse = '';
//     let lastElement;
//     while (arr.length > 0){
//         lastElement = arr.pop();
//         reverse = reverse + lastElement;
//     }
//     return reverse;
// };

const reverseString = function(str) {
    return str.split("").reverse().join("");
};
reverseString("hello")
// console.log("hello".split("").join(""))
// Do not edit below this line
module.exports = reverseString;
