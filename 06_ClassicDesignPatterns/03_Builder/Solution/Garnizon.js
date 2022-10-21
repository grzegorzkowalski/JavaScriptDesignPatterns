class Garnizon {
    constructor(builder) {
        this.builder = builder;
    }
    recrutTraining() {
        this.builder.contractToArmy();
        this.builder.weaponSupply();
        this.builder.trainHard();
        return this.builder.goToWar();
    }
}

export default Garnizon;
