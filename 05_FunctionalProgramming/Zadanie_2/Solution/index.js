const numbers = [1,2,3,4,5,6,7,8,9,10,11,12,13,14];

const returnEven = (tab) => tab.filter(el => el % 2 === 0);
const returnSum = tab => tab.reduce((prev, cur) => prev + cur);
const multipyScore = (score) => Math.floor(Math.random() * (10 - 1) + 1) * score;
const isBig = (number, border) => {
    if (number > border) {
        console.log(`${number} - to całkiem duża liczba.`);
        return;
    }
        console.log(`${number} - to małą liczba.`);
}

const evenNumbers = returnEven(numbers);
const sum = returnSum(evenNumbers);
const multiScore = multipyScore(sum);
isBig(multiScore, 99);


