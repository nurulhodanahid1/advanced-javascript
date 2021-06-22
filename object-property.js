const students = [
    {id: 21, name: 'Shakib'},
    {id: 44, name: 'Shishir'},
    {id: 34, name: 'Alina'},
    {id: 55, name: 'Alia Bhatt'}
]


const names = students.map(x => x.name);
console.log(names);

const bigger = students.filter(x => x.id > 30);
console.log(bigger);

const biggerOne = students.find(x => x.id > 40);
console.log(biggerOne);