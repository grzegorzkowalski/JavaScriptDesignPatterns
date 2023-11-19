const distFromAverage = (arr) => {
    const len = arr.length;
    const sum = arr.reduce((prev, cur) => prev + cur, 0);
    const avg = sum/len;
    console.log(len, sum, avg);
    return arr.map(el => Math.abs(el - avg));;
}

const distFromAverage2 = (arr) => {
    const len = arr.length;
    const sum = arr.reduce((prev, cur) => prev + cur, 0);
    const avg = sum/len;
    console.log(len, sum, avg);
    const newTab = [];
    arr.forEach(el => newTab.push(Math.abs(el - avg)));
    return newTab;
}


distFromAverage([1,2,3,4,5,6,7]) // => [3,2,1,0,1,2,3] (średnia z tablicy wejściowej to 4)
distFromAverage([1,1,1,1]) //=> [0,0,0,0] (średnia z tablicy wejściowej to 1)
distFromAverage([2,8,3,7]) //=> [3,3,2,2] (średnia z tablicy wejściowej to 5)

const getEvenAverage = (tab) => {
    const evenTab = tab.filter(el => el % 2 === 0);
    if (evenTab.length === 0) {
        return null;
    }
    return (evenTab.reduce((a,b) => a+b, 0)/evenTab.length).toFixed(3);
}

console.log(getEvenAverage([1,2,3,4,5,6,7]), 4); //=> 4
console.log(getEvenAverage([1,1,1,1]), "null"); //=> null
console.log(getEvenAverage([2,8,3,7,4]), "4.666"); //=> 4.666