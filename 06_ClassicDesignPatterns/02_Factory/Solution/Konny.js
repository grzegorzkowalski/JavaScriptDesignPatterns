import Wojownik from "./Wojownik";

class Konny extends Wojownik {
    constructor(name, age) {
        super(name, age);
        this.weapon = "lance";
    }
}

export default Konny;
