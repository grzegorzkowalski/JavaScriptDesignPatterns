class Vehicle {
    constructor(name) {
        this.name = name;

    }
}

class Boat extends Vehicle {
    constructor(name, length) {
        super(name);
        this.length = length
    }
    sail() {
        console.log(`Ta łódna nazywa się ${this.name} i płynie.`)
    }
}

class Car extends Vehicle {
    constructor(name, hp) {
        super(name);
        this.hp = hp
    }
    drive() {
        console.log(`Ten samochód nazywa się ${this.name} i jedzie.`);
    }
}

class Plane extends Vehicle {
    constructor(name, width) {
        super(name);
        this.width = width
    }
    fly() {
        console.log(`Ta samolot nazywa się ${this.name} i leci.`)
    }
}

const boat = new Boat("Niezatapialna 2", 15);
const car = new Car("Płonąca strzała", 200);
const plane = new Plane("Orzeł", 30);

console.log(boat.sail());
console.log(car.drive());
console.log(car.sail());


