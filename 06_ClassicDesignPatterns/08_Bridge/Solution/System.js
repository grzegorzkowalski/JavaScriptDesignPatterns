class System {
    constructor() {
        this.menu = ["programy", "ustawienia systemowe", "drukarki"];
    }

    displayMenu() {
        console.log("System");
        this.menu.map(el => console.log(el));
    }
}

export default System;
