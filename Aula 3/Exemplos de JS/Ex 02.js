const numbers1 = [45, 4, 9, 16, 25];
const numbers2 = numbers1.map(MyFunction);

function MyFunction(value, index, array) {
    return value * 2;
}

console.log(numbers2)


console.log(MyFunction(343));