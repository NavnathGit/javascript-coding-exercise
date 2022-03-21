// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(A) {
    // write your code in JavaScript (Node.js 8.9.4)

    if (A.length === 0) {
        return "Input Array is blank"
    }
    let product = 1;
    for (let i = 0; i < A.length; i++) {
        if (Number.isInteger(A[i])) {
            if (A[i] <= 100 || A[i] >= -100) {
                product *= A[i];
                //console.log(product)
            } else {
                return "Values not in range"
            }
        }
        else {
            // This is assumption that input Array might not contain valid integer
            return "Input Array contains non-integer Items"
        }

    }

    console.log(product)
    if (product > 0) {
        return 1;
    } else if (product < 0) {
        return -1;
    } else {
        return 0;
    }
}

const array = [2, 3, -100, 6];
console.log(solution(array))

