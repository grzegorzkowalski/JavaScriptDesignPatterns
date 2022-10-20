class Vehicle {
    constructor(name) {
        this.name = name;
    }
}
// Klasa dziedziczy po Vehicle
class SuperVehicle extends Vehicle {
    constructor(name) {
        super(name);
    }
}

const car = new Vehicle("Sally Carrera");
const superCar = new SuperVehicle("Lightning McQueen");

Vehicle.prototype.sayHello = function() {
    console.log(this.name);
}
/* Testujemy czy dodanie czegoś nawet po
utworzeniu konstruktorem nowego obiektu zadziała. */
car.sayHello();
superCar.sayHello();


