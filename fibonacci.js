//Given a number N returns the index value of the Fibonacci sequence, where the sequence is
//0,1,1,2,3,5,8,13,21,34,55,89,144 ...
// the pattern of the sequence is that each value is sum of the 2 previous values, that means for N=5 -> 2+3
// BIG O - O(n)

function fibonacciIterative(n) {
    let arr = [0, 1];
    for (let i = 2; i < n + 1; i++) {
        arr.push(arr[i - 1] + arr[i - 2]);
    }
    return arr[n];
}

console.log(fibonacciIterative(9))

// not Optimized 

// BIG O - O(2^n)
let calculation = 0;
function fibonacciRecursive(n) {
    calculation++;
    if (n < 2) {
        return n;
    }
    return fibonacciRecursive(n - 1) + fibonacciRecursive(n - 2);
}

console.log(fibonacciRecursive(9))
console.log(calculation)


//BIG O - O(n) ooo hoo
//Tradeoff between time and space complexity 
//In below case we are storing extra variable but it giving more faster performance 

function fibonacciMaster() {
    let cache = {};
    return function fib(n) {
        calculation++;
        if (n in cache) {
            return cache[n];
        } else {
            if (n < 2) {
                return n;
            } else {
                cache[n] = fib(n - 1) + fib(n - 2)
                return cache[n];
            }
        }
    }
}

calculation = 0;
const fibmaster = fibonacciMaster()
console.log(fibmaster(9))
console.log(calculation)