let counter = 0;

function increment() {
    ++counter;
    return counter;
}

function pureIncrement(counter) {
    return counter++;
}

console.log(increment());
console.log(increment());

console.log(pureIncrement(2));
console.log(pureIncrement(2));


