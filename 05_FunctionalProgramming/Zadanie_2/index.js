const numbers = [1,2,3,4,5,6,7,8,9,10,11,12,13,14];

const returnEvenElements = (tab) => tab.filter(el => el % 2 === 0);
const sumTabElements = (tab) => tab.reduce((prev, cur) => prev + cur);
const returnRandomValueFromSum = (sum) => Math.floor(Math.random() * (10 - 1) + 1) * sum;
const getScoreInfo = (score, grade = 99) => {
    if (score > grade) {
        console.log(`${score} - to całkiem duża liczba.`);
    }
    else {
        console.log(`${score} - to małą liczba.`);
    }
}

getScoreInfo(returnRandomValueFromSum(sumTabElements(returnEvenElements(numbers))), 300);

const evenTab = returnEvenElements(numbers);
const sum = sumTabElements(evenTab);
const score = returnRandomValueFromSum(sum);
getScoreInfo(score, 300);


