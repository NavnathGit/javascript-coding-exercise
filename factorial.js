//Factorial recursive
const factorial = function (number) {
    if (number <= 2) {
        return number;
    }
    return number * factorial(number - 1)

}

console.log(factorial(1));

//Factorial Iterative

const factorialIterative = function (number) {
    let answer = 1;
    if (number === 2) {
        answer = 2;
    } else {

        for (let i = 2; i <= number; i++) {
            answer = answer * i
        }
    }

    return answer;

}

console.log(factorialIterative(10))


