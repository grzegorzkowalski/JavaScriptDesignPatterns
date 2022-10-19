// --- Plik heroUtils.js ---
const myHeroes = require("./myHeroes"); // import publicznych danych z myHeroes.js

myHeroes.addHero("Superman");
myHeroes.addHero("Batman");
myHeroes.addHero("Rumcajs");

console.log(myHeroes.getHero()); // ["Superman", "Batman", "Rumcajs"]
console.log(myHeroes.heroes); // undefined
