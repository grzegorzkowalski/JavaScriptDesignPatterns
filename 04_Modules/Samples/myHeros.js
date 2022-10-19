const heroes = [];

function addItem(hero) {
    heroes.push(hero);
}

function getItems() {
    return heroes;
}

// Eksport danych które mają być dostępne poza modułem.
// Wszystko co chcemy udostępnić z tego modułu "podpinamy" pod "module.exports"
module.exports = {
    addHero: addItem,
    getHero: getItems
}

