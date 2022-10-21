class Toy {
    constructor(name) {
        this.name = name;
        console.log(`Byłeś bardzo grzecznym dzieckiem.
            Proszę to dla Ciebie - ${this.name} 🧸🧒🎅`);
    }
}

class Twig {
    constructor(name) {
        this.name = name;
        console.log(`Byłeś bardzo niegrzecznym dzieckiem.
            To dla Ciebie - ${this.name} ᛙ`);
    }
}

const santaClausFactory = {
    toyCreator: function (name) {
        return new Toy(name);
    },
    twigCreator: function (name) {
        return new Twig(name);
    }
};


const SantaClause = {
    execute: function (type, name) {
        if (type in santaClausFactory) {
            return santaClausFactory[type](name);
        }
        return console.log("🤷‍");
    }
}

SantaClause.execute("toyCreator", "lego");
SantaClause.execute("toyCreator", "lalka");
SantaClause.execute("toyCreator", "rower");
SantaClause.execute("twigCreator", "rózga");
