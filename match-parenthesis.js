const isValid = function (s) {

    let isValidString = false;
    if (s.length < 2) {
        return "Please provide valid String"
    }

    if (s.length === 2) {
        if (s === "()" || s === "{}" || s === "[]") {
            isValidString = true;
            //console.log("I have returned value")
            return isValidString;
        }
    }

    const tempArray = [...s];

    for (let i = 0; i < s.length; i++) {
        if (((i + 1) % 2) != 0) {
            switch (s[i]) {
                case "(":
                    if (tempArray[i + 1] === ")") {
                        isValidString = true;
                    }
                    break;

                case "{":
                    if (tempArray[i + 1] === "}") {
                        isValidString = true;
                    }
                    break;

                case "{":
                    if (tempArray[i + 1] === "}") {
                        isValidString = true;
                    }
                    break;

                default:
                    isValidString = false;
            }
        }
    }
    return isValidString;
};

console.log(isValid("()"))