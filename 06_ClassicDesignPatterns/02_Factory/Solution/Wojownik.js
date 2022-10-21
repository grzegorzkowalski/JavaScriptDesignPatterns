class Wojownik {
    constructor(name, age) {
        this.name = name;
        this.age = age;
        this.weapon = "patyk";
    }
    contractToArmy() {
        console.log("Zapisany");
    }
    weaponSupply() {
        console.log(`Pobrano ${this.weapon}`);
    }
    trainHard() {
        console.log("Ciężko trenuje");
    }
    goToWar() {
        return this;
    }
}

export default Wojownik;
