
const array1 = ['a', 'b', 'c'];
const array2 = ['f', 'd', 'e'];

const containsMatchingItems = function (arr1, arr2) {
    let map = {};

    for (let i = 0; i < arr1.length; i++) {
        if (!map[arr1[i]]) {
            const item = arr1[i];
            map[item] = true;
        }
    }

    for (let j = 0; j < arr2.length; j++) {
        if (map[arr2[j]]) {
            return true;
        }
    }

    return false;

}

console.log(containsMatchingItems(array1, array2))
