
const rotateStringToleft = function (str, x) {
    if (typeof (str) === 'string') {
        return str.slice(x, str.length) + str.slice(0, x)
    } else {
        return "Please provide valid string to perform rotation operation"
    }


}

const rotateStringToRight = function (str, x) {
    if (typeof (str) === 'string') {
        return rotateStringToleft(str, str.length - x);
    } else {
        return "Please provide valid string to perform rotation operation"
    }
}

console.log(rotateStringToleft("Navnath", 2))
console.log(rotateStringToRight("Navnath", 2))