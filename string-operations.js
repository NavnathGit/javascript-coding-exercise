//Reverse String

const reverseString = function (str) {

    if (!str || str.length < 2 || typeof str !== 'string') {
        return "Not valid string or provieded only one char string"
    }

    const reverseStr = [];
    const totalItems = str.length - 1
    for (let i = totalItems; i >= 0; i--) {

        reverseStr.push(str[i]);
    }
    return reverseStr.join('');
}

console.log(reverseString("I am Computer Programmer"))

//Practice

const reverseString2 = function (str2) {
    if (!str2 || str2.length < 2 || typeof str2 !== 'string') {
        return "Not valid string or contains only one charactor string"
    }
    const totalItems2 = str2.length - 1;
    const reversestr2 = [];

    for (let i = totalItems2; i >= 0; i--) {
        reversestr2.push(str2[i])
    }

    return reversestr2.join('');

}


console.log(reverseString("I am Computer Programmer"))