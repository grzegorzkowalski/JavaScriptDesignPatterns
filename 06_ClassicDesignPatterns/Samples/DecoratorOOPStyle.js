class Holiday {
    constructor() {
        this.christmasEvents = []
    }
    addDecorator(event) {
        this.christmasEvents.push(event);
    }
    startChristmasEve() {
        console.log("Pierwsza gwiazdka już na niebie.");
        this.christmasEvents.forEach((el) => {
            el();
        })
    }
}


const christmasEve = new Holiday();

christmasEve.addDecorator(() => console.log("Makowiec upieczony."));
christmasEve.addDecorator(() => console.log("Ubraliśmy choinkę."));
christmasEve.addDecorator(() => console.log("Świecący renifer wystawiony przed domem."));

christmasEve.startChristmasEve();
