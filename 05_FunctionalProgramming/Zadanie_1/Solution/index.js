const primeOnly = function() {
    const tab = [];

    const isPrime = num => {
        for(let i = 2, s = Math.sqrt(num); i <= s; i++)
            if(num % i === 0) return false;
        return num > 1;
    }

    return {
        addPrimeNumber: function(number) {
            if (isPrime(number)) {
                tab.push(number);
            }
        },
        getPrimeNumberTab: function () {
            return tab;
        }
    }
}

const primeObj = new primeOnly();
primeObj.addPrimeNumber(1);
primeObj.addPrimeNumber(3);
primeObj.addPrimeNumber(3);
primeObj.addPrimeNumber(5);
console.log(primeObj.getPrimeNumberTab());
