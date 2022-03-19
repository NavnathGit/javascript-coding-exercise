// Find matching items 
const array1 = ['a', 'b', 'c', 'x'];
const array2 = ['z', 'y', 'a'];
function containsCommonItems2(arr1, arr2) {

    if (arr1.length === 0 || arr2.length === 0) {
        return "Please provide two valid list for comparison"
    }

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
console.log(containsCommonItems2(array1, array2));