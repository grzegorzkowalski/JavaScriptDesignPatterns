import Piechur from "../../02_Factory/Solution/Piechur";

class PiechurBuilder {
    constructor(name, age) {
        this.piechur = new Piechur(name, age);
    }
    contractToArmy() {
        return this.piechur.contractToArmy()
    }
    weaponSupply() {
        return this.piechur.weaponSupply();
    }
   trainHard() {
       return this.piechur.trainHard();
   }
    goToWar() {
        return this.piechur;
    }
}

export default PiechurBuilder;
