import Boat from "./vehicles/Boat";
import Car from "./vehicles/Car";
import Plane from "./vehicles/Plane";

const boat = new Boat("Niezatapialna 2");
boat.sayHi();
boat.sail();

const car = new Car("Kit");
car.sayHi();
car.drive();
//car.sail();

const plane = new Plane("Jastrząb");
plane.sayHi();
plane.fly();

console.log("Jesteśmy w modulach");