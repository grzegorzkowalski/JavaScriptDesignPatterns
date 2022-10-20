class Remote {
    constructor(device) {
        this.device = device;
    }
    turnOn() {
        this.device.turnOn();
    }
    volumeUp(num) {
        this.device.volumeUp(num);
    }
    volumeDown(num) {
        this.device.volumeDown(num);
    }
}

class TVRemote extends Remote {
    constructor(device) {
        super(device);
    }
    setBrightness(num) {
        this.device.setBrightness(num);
    }
}

class Device {
    constructor() {
        this.togglePower = false;
        this.volume = 0;
    }
    turnOn() {
        this.togglePower = true;
    }
    volumeUp(volume) {
        this.volume =  (this.volume + volume);
    }
    volumeDown(volume) {
        this.volume = (this.volume - volume);
    }
}

class TV extends Device {
    constructor() {
        super();
        this.brightness = 50;
    }
    setBrightness(num) {
        this.brightness =  num;
    }
}


const sony = new TV();
const tvRemote = new TVRemote(sony);
tvRemote.turnOn();
tvRemote.volumeUp(55);
tvRemote.volumeUp(15);
tvRemote.setBrightness(33);
console.dir(sony);

