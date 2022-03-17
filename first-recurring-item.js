//Brute Force
function firstRecurringItem(input) {
    for (let i = 0; i < input.length; i++) {
        for (let j = i + 1; j < input.length; j++) {
            if (input[i] === input[j]) {
                const item = input[i];
                console.log(item);
                return item
                break;
            }
        }
    }
    return undefined;
}

firstRecurringItem([2, 5, 1, 2, 3, 5, 1, 2, 4]);



function firstRecurringItem2(input) {
    let map = {};
    for (let i = 0; i < input.length; i++) {
        if (map[input[i]] !== undefined) {
            return input[i];
        }
        else {
            map[input[i]] = i;
        }
        console.log(map);
    }

    return undefined;
}
firstRecurringItem2([2, 5, 1, 2, 3, 5, 1, 2, 4]);