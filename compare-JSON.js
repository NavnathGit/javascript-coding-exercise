
const compareJSONObjects = function (obj1, obj2) {
    let flag = true;
    if (Object.keys(obj1).length === Object.keys(obj2).length) {
        for (keys in obj1) {
            if (obj1[key] === obj2[key]) {
                continue;
            } else {
                flag = false;
            }
        }
    } else {
        flag = false;
    }
    return flag;
}

const obj1 = { "name": "Sam", "class": "MCA" };
const obj2 = { "class": "MCA", "name": "Sam" };
console.log(compareJSONObjects(obj1, obj2));