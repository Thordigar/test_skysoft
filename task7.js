const sortObject = obj => {
    return Object.keys(obj)
    .sort()
    .reduce((acc, key) => {
        if (obj[key] === Object(obj[key]))
            obj[key] = sortObject(obj[key])
        return {...acc, [key]: obj[key]}
        }, {});
}

const compareObjects = (first, second) => {
    if(JSON.stringify(sortObject(first)) === JSON.stringify(sortObject(second)))
        return 'YES';
    return 'NO'
};

console.log(compareObjects({a: 1, b: 2}, {b: 2, a: 1})) // 'YES'
console.log(compareObjects({a: 1, b: 2, c: 3}, {a: 1, b: 2, d: 4})) // 'NO'
console.log(compareObjects({a: 1, b: 2}, {b: 2, a: 1})) // 'YES'
console.log(compareObjects({a: 1, b: 2, c: {a: 1}}, {a: 1, b: 2, c: {a: 1}})) // 'YES'
console.log(compareObjects({a: 1, b: {c: 2}}, {a: {b: 1}, c: 2})) // 'NO'