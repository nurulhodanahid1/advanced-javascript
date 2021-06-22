const num = [1,2,3,4,5,6,7,8,9];
const part = num.slice(2, 5);
console.log(part);
console.log(num);

const removedAdd = num.splice(2,5, 100,200);
console.log(removedAdd);
console.log(num);

const together = num.join("");
console.log(together);
const togetherByComa = num.join(",");
console.log(togetherByComa);
console.log(num);