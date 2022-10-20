import Wojownik from "./Wojownik";

class Strzelec extends Wojownik {
    constructor(name, age) {
        super(name, age);
        this.weapon = "bow";
    }
}

export default Strzelec;
