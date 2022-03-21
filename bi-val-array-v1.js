
function solution(A) {

    let currentLastSeen;
    let previousLastSeen;
    let itemCount = 0;
    let lengthArray = [];
    let newArrayStarted = false;

    if (A.length < 2) {
        return 0;
    }

    //Check if all items in array are same then there will not be bi-valued array present in it
    if (A.every((val, i, arr) => val === arr[0])) {
        return 0;
    }

    //debugger;
    for (let i = 0; i < A.length; i++) {
        const currentItem = A[i];
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
                itemCount = 0;
                itemCount += 1;
                newArray = true;
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

const arr = [1, 2, 2, 3, 4, 4, 4, 3, 4, 3, 1, 2, 2, 2, 2, 2, 2, 2, 2, 1, 2]
//const arr = [2, 2, 2, 2, 2, 2, 2, 2, 2, 2]
console.log(solution(arr));
