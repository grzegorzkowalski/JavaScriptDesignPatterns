const numbers = [4, 12, 23, 76, 4];

Array.prototype.customReduce = function (callback, initialValue) {
    if (typeof callback !== "function") {
        return false;
    }

    let result = initialValue === undefined ? 0 : initialValue;
    for (let i = 0; i < this.length; i++) {
        result = callback(result, this[i]);
    }
    console.log(result);
    return result;
}

numbers.customReduce((a,b) => a+b);
numbers.customReduce((a,b) => a*b, 1);
