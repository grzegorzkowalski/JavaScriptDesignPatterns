// A vehicle constructor
class Vehicle {
    constructor(vehicleType = 'car') {
        this.vehicleType = vehicleType;
        this.model = 'default';
        this.license = '00000-000';
    }
}

const truck = new Vehicle('truck');

// New functionality we're decorating vehicle with
truck.setModel = function(modelName) {
    this.model = modelName;
};

truck.setColor = function(color) {
    this.color = color;
};

truck.setModel('CAT');
truck.setColor('blue');

console.log(truck);

const secondInstance = new Vehicle('car');
console.log(secondInstance);

