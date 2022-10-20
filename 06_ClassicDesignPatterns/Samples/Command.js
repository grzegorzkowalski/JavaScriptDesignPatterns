const operations = {
    add: (x, y) => x + y,
    subtract: (x, y) => x - y,
    heavyMath: (x, y) => Math.sin(x) / Math.tan(y)
};

const mathManager = {
    /* Często spotykaną praktyką jest nazywanie metody wywołującej
    jako "execute" */
    execute: function (name, args) {
        if (name in operations) {
            return operations[name].apply(operations, [].slice.call(arguments, 1));
        }
        return console.log("🤷‍");
    }
};

/* Możemy oczywiście omijać warstwę abstrakcji i wywoływać
polecenia bezpośrednio z obiektu "operations": */
console.log(operations.add(2, 3)); // => 5
console.log(operations.subtract(2, 3)); // => -1

/* Możemy jednak skorzystać z mathManagera, wysłać do niego
odpowiednią komendę i czekać na rezultat: */
console.log(mathManager.execute("add", 2, 3)); // => 5
console.log(mathManager.execute("subtract", 2, 3)); // => -1
console.log(mathManager.execute("heavyMath", 2, 3)); // => -6,379
console.log(mathManager.execute("multiply", 2, 3)); // => 🤷‍

