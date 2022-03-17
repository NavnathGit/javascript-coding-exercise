
//Question from in Yahoo Interview
const divideInChunks = function (value, count) {

    //check inputs
    if (value <= 0 || count <= 0) {
        return "Value and count should be greater than zero"
    }

    resultArray = [];
    let item = 0;
    let remainder = 0;

    if (value > count) {
        item = parseInt(value / count)
        remainder = value % count
    } else {
        count = value;
        item = parseInt(value / count)
    }

    for (let i = 0; i < count; i++) {

        if (remainder !== 0) {
            resultArray.push(item + 1)
            remainder--;
        } else {
            resultArray.push(item)
        }

    }

    return resultArray;
}

console.log(divideInChunks(30, 3))
console.log(divideInChunks(60, 6))
console.log(divideInChunks(44, 8))
console.log(divideInChunks(32, 3))
console.log(divideInChunks(5, 6))
console.log(divideInChunks(105, 16))
console.log(divideInChunks(-1, -2))
