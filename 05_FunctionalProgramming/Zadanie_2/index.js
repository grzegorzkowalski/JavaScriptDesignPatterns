const numbers = [1,2,3,4,5,6,7,8,9,10,11,12,13,14];

const createEvenTable = (tab) => {
    const evenNumbers = [];
    for (let i = 0; i < tab.length; i++) {
        if (tab[i] % 2 === 0)
        {
            evenNumbers.push(tab[i])
        }
    }
    return evenNumbers;
}
const sumEvenNumbers = (evenNumbers) => {
    let evenSum = 0;
    for (let i = 0; i < evenNumbers.length; i++) {
        evenSum += evenNumbers[i];
    }
    return evenSum;
}
const multipyScore = (evenSum) => {
    return Math.floor(Math.random() * (10 - 1) + 1) * evenSum;
}
const counter = (score) => {
    if (multipyScore > 99) {
        console.log(`${multipyScore} - to całkiem duża liczba.`);
    }
    else {
        console.log(`${multipyScore} - to małą liczba.`);
    }
}

counter(multipyScore(sumEvenNumbers(createEvenTable(numbers))));





