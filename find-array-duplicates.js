const findDuplicates = function (arr) {
    let duplicates = [];
    const tempArray = [...arr].sort();

    for (i = 0; i < tempArray.length; i++) {
        if (tempArray[i + 1] === tempArray[i]) {
            if (!duplicates.includes(tempArray[i])) {
                duplicates.push(tempArray[i]);
            }
        }

    }
    return duplicates;

}

//const arr = [2, 2, 3, 1, 2, 1, 3]
const arr = ["Banana", "Orange", "Apple", "Mango", "Apple"];
console.log(findDuplicates(arr));


const findDuplicate2 = function (array) {
    const duplicates = [];
    for (i = 0; i < array.length; i++) {
        for (j = i + 1; j < array.length; j++) {
            if (array[i] === array[j]) {
                if (!duplicates.includes(array[i])) {
                    duplicates.push(array[i])
                }
            }
        }
    }
    return duplicates;
};

//const array = [2, 2, 3, 1, 2, 1, 3]
const array = ["Banana", "Orange", "Apple", "Mango", "Apple"];
console.log(findDuplicate2(array));

const removeDuplicate = function (array) {
    newArray = [];

    if (array.length === 0) {
        return "Provided Array is empty"
    }

    if (array.length === 1) {
        return "Array is having only one element in it"
    }

    for (let i = 0; i < array.length; i++) {
        if (!newArray.includes(array[i])) {
            newArray.push(array[i]);
        }
    }
    newArray.sort((a, b) => a - b)
    return newArray;
}

const originalArray = [2, 2, 3, 1, 2, 1, 3]
console.log(removeDuplicate(originalArray));