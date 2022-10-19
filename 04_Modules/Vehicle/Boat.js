import Vehicle from "./Vehicle";

class Boat extends Vehicle {
    constructor(name, length) {
        super(name);
        this.length = length
    }
    sail() {
        console.log(`Ta łódna nazywa się ${this.name} i płynie.`)
    }
}

export default Boat;
