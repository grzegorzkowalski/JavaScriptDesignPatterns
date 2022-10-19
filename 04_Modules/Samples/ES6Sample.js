import MyHerosES6 from "./myHerosES6";

const myHeroes  = new MyHerosES6();

myHeroes.addHero("Superman");
myHeroes.addHero("Batman");
myHeroes.addHero("Rumcajs");

console.log(myHeroes.getHero()); // ["Superman", "Batman", "Rumcajs"]
console.log(myHeroes.heroes); // undefined
