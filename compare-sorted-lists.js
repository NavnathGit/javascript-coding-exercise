
//Find Matching Element in two sorted lists, brute force approach
const compareSortedLists = function (list1, list2) {

    if (list1.length === 0 || list2.length === 0) {
        return "Please provide two valid list for comparison"
    }

    let matchingElement = [];
    let outerLoopCounter = 0;
    let innerLoopCounter = 0;
    let outerList = [];
    let innerList = [];

    if (list1.length > list2.length) {
        outerLoopCounter = list1.length;
        innerLoopCounter = list2.length;
        outerList = [...list1];
        innerList = [...list2];
    } else {
        outerLoopCounter = list2.length;
        innerLoopCounter = list1.length;
        outerList = [...list2];
        innerList = [...list1];
    }

    for (let i = 0; i < outerLoopCounter; i++) {
        for (let j = 0; j < innerLoopCounter; j++) {
            if (outerList[i] === innerList[j]) {
                matchingElement.push(outerList[i]);
            }
        }
    }
    if (matchingElement.length === 0) {
        return "No matching element found in both list"
    }
    else if (matchingElement.length === innerList.length) {
        return "All Elements are Matching from the both lists"
    } else {
        return `Matching elements from both lists is/are [ ${matchingElement} ]`;
    }

}

const inputList1 = ['a', 'b', 'c'];
const inputList2 = [];

//const inputList1 = [1, 2, 7];
//const inputList2 = [5, 6, 7, 2];
console.log(compareSortedLists(inputList1, inputList2));