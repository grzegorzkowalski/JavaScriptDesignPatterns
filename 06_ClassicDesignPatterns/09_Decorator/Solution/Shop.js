class Shop {
    constructor() {
        this.decorators = {
            card: [],
            blik: [],
            fastTransfer: []
        }
    }
    decorate(method, el) {
        this.decorators[method.toString()].push(el);
    }
    payCard() {
        console.log("Payed by card");
        this.decorators.card.forEach(el => el());
    }
    payBlik() {
        console.log("Payed by Blik");
        this.decorators.blik.forEach(el => el());
    }
    payFastTransfer() {
        console.log("Payed by fast transfer");
        this.decorators.fastTransfer.forEach(el => el());
    }
}

const internetShop = new Shop();
internetShop.decorate("card", () => console.log("Powiadomienie sms"));
internetShop.decorate("card", () => console.log("Wpisz PIN"));
internetShop.decorate("card", () => console.log("Płatność pomyślna"));
internetShop.payCard();
