// const sumAll = function(begin, end) {
//     if (begin <= 0 || end <= 0 || !Number.isInteger(begin) || !Number.isInteger(end)) {
//         return 'ERROR'
//     }
//     if (end < begin){
//         let tempBegin = begin;
//         begin = end;
//         end = tempBegin;
//     }
//     let sum = end;
//     for (let i = begin; i < end; i++){
//         // console.log(i)
//         // console.log(sum)
//         sum = sum + i;
//         // console.log(i)
//         // console.log(sum)
//     }
//     return sum
// };

const sumAll = function(begin, end) {
    if (begin <= 0 || end <= 0 || !Number.isInteger(begin) || !Number.isInteger(end)) {
        return 'ERROR'
    }
    if (end < begin){
        let tempBegin = begin;
        begin = end;
        end = tempBegin;
    }
    const gaussSum = n => n * (n + 1) / 2;
    return gaussSum(end) - gaussSum(begin - 1);
};

// Do not edit below this line
module.exports = sumAll;
