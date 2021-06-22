function stopWatch(){
    let num = 0;
    return function(){
        num++;
        return num;
    }
}
console.log(num);
const clock = stopWatch();
console.log(clock());
console.log(clock());
console.log(clock());
console.log(clock());

const watch = stopWatch();
console.log(watch());
console.log(watch());
console.log(watch());
console.log(clock());
console.log(clock());