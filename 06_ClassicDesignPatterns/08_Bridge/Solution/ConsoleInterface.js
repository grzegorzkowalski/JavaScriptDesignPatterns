class ConsoleInterface {
    constructor(system) {
        this.system = system;
    }
    displayMenu() {
        console.log("Menu konsolowe");
        this.system.displayMenu();
    }
}

export default ConsoleInterface;
