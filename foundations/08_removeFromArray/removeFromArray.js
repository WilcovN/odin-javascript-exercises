// const removeFromArray = function(arr, ...remove) {
//     let indexRemoved;
//     for (const item of remove){
//         while (arr.includes(item)) {
//             indexRemoved = arr.indexOf(item, 0);
//             arr.splice(indexRemoved, 1);
//         }
//     }
//     return arr
// };

const removeFromArray = function(arr, ...remove) {
    return arr.filter(item => !remove.includes(item));
};

// Do not edit below this line
module.exports = removeFromArray;
