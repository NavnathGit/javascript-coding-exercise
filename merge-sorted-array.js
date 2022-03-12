
// Simple method using spread operator
const arr1 = [4, 5, 6];
const arr2 = [2, 3, 8];

const mergedArray = [...arr1, ...arr2].sort((a, b) => a - b);

console.log(mergedArray);


const mergedArray2 = function (array1, array2) {

    if (array1.length === 0 && array2.length === 0) {
        return "Both array's are empty"
    }

    if (array1.length === 0) {
        return array2;
    }

    if (array2.length === 0) {
        return array1;
    }

    for (i = 0; i < array2.length; i++) {
        array1.push(array2[i]);
    }
    console.log(array1)
    //asecending
    array1.sort((a, b) => a - b)
    //descending 
    array1.sort((a, b) => b - a)
    //array1.reverse();

    return array1;

}


const array1 = [5, 7, 11];
const array2 = [2, 6, 8];
console.log(mergedArray2(array1, array2));