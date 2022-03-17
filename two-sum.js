
// Big O - O(n^2)
const twoSum = function (array, targetSum) {
    let resultArray = [];
    for (let i = 0; i < array.length; i++) {
        for (let j = i + 1; j < array.length; j++) {
            if (array[i] + array[j] === targetSum) {
                resultArray.push([i, j]);
            }
        }

    }
    return resultArray;
}

const inputArray = [2, 7, 11, 15, 6, 8, 3, 1]
console.log(twoSum(inputArray, 9))