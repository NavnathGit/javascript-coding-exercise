// Approach 1
const obj1 = {
    firstName: "Navnath"
}

const obj2 = {
    lastName: "Dahibhate"
}

function extend(dest, src) {
    for (let key in src) {
        dest[key] = src[key];
    }
    return dest;
}

console.log(extend(obj1, obj2));

// Approach 2

const string1 = `{
    "name": "Todd",
    "age": 20    
  }`;

const string2 = `{
    "languages": ["Spanish", "Portuguese"],
    "married": true
  }`;

const obj1 = JSON.parse(string1);
const obj2 = JSON.parse(string2);

const mergedObject = {
    ...obj1,
    ...obj2
};

console.log(JSON.stringify(mergedObject))

// Approach 3

const string1 = {
    "name": "Todd",
    "age": 20
};

const string2 = {
    "languages": ["Spanish", "Portuguese"],
    "married": true
};

const obj1 = JSON.parse(JSON.stringify(string1));
const obj2 = JSON.parse(JSON.stringify(string2));

const mergedObject = {
    ...obj1,
    ...obj2
};

console.log(JSON.stringify(mergedObject))