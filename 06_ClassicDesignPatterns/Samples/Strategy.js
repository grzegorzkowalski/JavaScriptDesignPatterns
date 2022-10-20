class Shipping {
    constructor() {
        this.company = "";
    }
    setStrategy (company) {
        this.company = company;
    }
    calculate (pack) {
        return this.company.calculate(pack);
    }
};

class UPS {
    calculate(pack) {
        // calculations...
        return "$45.95";
    }
};

class USPS {
    calculate(pack) {
        // calculations...
        return "$39.40";
    }

};

class Fedex {
    calculate(pack) {
        // calculations...
        return "$43.20";
    }
};

function run() {

    const pack = { from: "76712", to: "10012", weigth: "lkg" };

    // the 3 strategies

    const ups = new UPS();
    const usps = new USPS();
    const fedex = new Fedex();

    const shipping = new Shipping();

    shipping.setStrategy(ups);
    console.log("UPS Strategy: " + shipping.calculate(pack));
    shipping.setStrategy(usps);
    console.log("USPS Strategy: " + shipping.calculate(pack));
    shipping.setStrategy(fedex);
    console.log("Fedex Strategy: " + shipping.calculate(pack));
}

run();


