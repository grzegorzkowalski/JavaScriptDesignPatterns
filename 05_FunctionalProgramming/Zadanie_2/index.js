const numbers = [1,2,3,4,5,6,7,8,9,10,11,12,13,14];
const evenNumbers = [];
let evenSum = 0;

for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] % 2 === 0)
    {
        evenNumbers.push(numbers[i])
    }
}

for (let i = 0; i < evenNumbers.length; i++) {
    evenSum += evenNumbers[i];
}

let multipyScore = Math.floor(Math.random() * (10 - 1) + 1) * evenSum;

if (multipyScore > 99) {
    console.log(`${multipyScore} - to całkiem duża liczba.`);
}
else {
    console.log(`${multipyScore} - to małą liczba.`);
}




