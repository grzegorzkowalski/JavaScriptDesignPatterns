function generalIterator(collection) {
    if (typeof collection[Symbol.iterator] === "function") {
        for (const element of collection) {
            //tu można zaimplementować swoją logikę
            console.log(element);
        }
    }
    else {
        console.log("Obiekt nie posiada domyślnego interatora.");
    }
}

generalIterator([1,2,3]); //tablica
generalIterator("Hello world"); //string
generalIterator(new Map([
    ["phone", "213-555-1234"],
    ["address", "123 N 1st Ave"]
])); //mapa
generalIterator(new Set([1,2,3,3,3,4,4,5])); //kolekcja set
generalIterator({"phone": "213-555-1234", "address": "123 N 1st Ave" }); //obiekt

