const myHeroes = (function() {
    // prywatne zmienne
    const heroes = [];

    // zwrócony obiekt będzie publiczny
    // i dostępny dla innych modułów
    return {
        addHero: function(hero) {
            heroes.push(hero);
        },
        getHero: function() {
            return heroes;
        }
    };
})();  // natychmiastowe wywołanie funkcji

myHeroes.addHero("Superman");
myHeroes.addHero("Batman");
myHeroes.addHero("Rumcajs");
console.log(myHeroes.getHero()); // ["Superman", "Batman", "Rumcajs"]
console.log(myHeroes.heroes); // undefined
