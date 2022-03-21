
function solution(A) {

    let currentLastSeen;
    let previousLastSeen;
    let itemCount = 0;
    let lengthArray = [];
    let newArrayStarted = false;

    if (A.length < 2) {
        return 0;
    }

    debugger;
    for (let i = 0; i < A.length; i++) {
        //const currentItem = A[i];
        if (i === 0) {
            itemCount += 1;
            currentLastSeen = A[i];
        } else if (i === 1) {
            previousLastSeen = currentLastSeen;
            currentLastSeen = A[i];
            itemCount += 1;
        } else if (A[i] === currentLastSeen || A[i] === previousLastSeen) {
            itemCount += 1;
        } else {
            if (!newArrayStarted) {
                lengthArray.push(itemCount);
                if (A[i + 1] === currentLastSeen) {
                    itemCount = 1;
                } else {
                    itemCount = 0;
                }
                itemCount += 1;
                newArrayStarted = true;
            } else {
                newArrayStarted = false;
                itemCount += 1;
            }
            previousLastSeen = currentLastSeen;
            currentLastSeen = A[i];
        }
    }
    if (itemCount >= 2) {
        lengthArray.push(itemCount);
    }
    //console.log(lengthArray);
    return Math.max(...lengthArray);

}

const arr0 = [1, 2, 2, 3, 4, 4, 4, 3, 4, 3, 1, 2, 2, 2, 2, 2, 2, 2, 2, 1, 2]
const arr5 = [2, 2, 2, 2, 2, 2, 2, 2, 2, 2]
const arr1 = [4, 2, 2, 4, 2]
const arr2 = [1, 2, 3, 2]
const arr3 = [0, 5, 4, 4, 5, 12]
const arr4 = [4, 4]
console.log(solution(arr4));
