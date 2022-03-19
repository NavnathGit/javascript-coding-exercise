const isValid = function (s) {
    if (s.length < 2) {
        return false
    }

    if (s.length % 2 !== 0) {
        return false;
    }

    if (s.length === 2) {
        if (s === "()" || s === "{}" || s === "[]") {
            return true;
        }
    }

    const left = [];
    const legend = {
        '(': ')',
        '{': '}',
        '[': ']'
    };

    for (let i = 0; i < s.length; i++) {
        if (s[i] === '(' || s[i] === '{' || s[i] === '[') {
            left.push(s[i]);
        } else if (legend[left.pop()] !== s[i]) {
            return false;
        }
    }
    return left.length ? false : true;
};

console.log(isValid("[](){}"))