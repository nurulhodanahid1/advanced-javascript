const bonus = 20;
function add(num1, num2){
    const bonus2 = 40;
    var bonus3 = 100;
    let result = num1 + num2 + bonus + bonus2 + bonus3;    // barirer variabe bitore call kora jabe
    console.log(bonus3);
    if (result > 19) {
        const name = "nahid";
        var name2 = 'shakin';
        console.log('this is big');
    }
    console.log(name2);    // var die variable declear korar karone {} er baireo access kora jasse. const die name variable declear korar karone etake {} baire pawa jabe na;
    return result;
    console.log(name2);
}
const output = add(7, 3);
console.log(output);
// console.log(result);  //can not access the variable result in out the function
//console.log(bonus2);     //can not access the variable result in out the function
//console.log(bonus3);