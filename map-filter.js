const numbers = [3, 4, 5, 6, 7, 8];
// const output = [];
// for (let i = 0; i < numbers.length; i++) {
//     const element = numbers[i];
//     const result = element * element;
//     output.push(result);
// }
// console.log(output);


//    with function & map
const result = numbers.map(function(element){
    return element * element;
})
console.log(result);

// ////   //function short version
// const square = element => element * element;
// const square = x => x * x;


/// second way with sorter version
const result1 = numbers.map(x => x * x)
console.log(result1);




const ages = [2, 3, 4, 5, 6, 7, 8];

const isBigger = ages.filter(x => x > 4);
console.log(isBigger);

const isThere = ages.find(x => x > 5);
console.log(isThere);
const isThereSmall = ages.find(x => x < 5);
console.log(isThereSmall);