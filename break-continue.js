const num = [1, 2, 3, 4, 5, 6, 7, 8, 9];

for (let i = 0; i < num.length; i++) {
    if(num[i] > 3){
        break;
    }
    console.log(num[i]);
}


const number = [100, -2, 30, -4, -5, 60, -7, 80, -9];

for (let i = 0; i < number.length; i++) {
    if(number[i] < 0){
        continue;
    }
    console.log(number[i]);
}