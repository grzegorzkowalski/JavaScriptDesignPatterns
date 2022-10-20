class NightClub {
    constructor(client) {
        this.client = client;

    }
    letsParty() {
        if (this.client.isAdult) {
            console.log(`Zabawa trwa dla ${this.client.name}, który ma ${this.client.age}.`);
        }
        else {
            throw Error("Młody do domu.");
        }
    }
}

class Adult {
    constructor(name, age, idNumber) {
        this.name = name;
        this.age = age;
        this.idNumber = idNumber;
    }
    checkIsAdult() {
        console.log(this.idNumber && this.age >= 18);
        this.isAdult = this.idNumber.length === 8 && this.age >= 18;
    }
}

class Teenager {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    checkIsAdult() {
        this.isAdult = false;
    }
}

const adult = new Adult("Jan", 33, "GAC12345" );
adult.checkIsAdult();
const nightClub = new NightClub(adult);
nightClub.letsParty();

const fakeAdult = new FakeAdult("Krzyś", 17);
fakeAdult.checkIsAdult();
console.log(fakeAdult);
const nightClub2 = new NightClub(fakeAdult);
nightClub2.letsParty();

const teenager = new Teenager("Jan", 33);
const nightClub3 = new NightClub(teenager);
nightClub3.letsParty();
