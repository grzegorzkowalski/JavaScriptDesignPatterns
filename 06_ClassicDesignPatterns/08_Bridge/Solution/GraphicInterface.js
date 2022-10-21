import ConsoleInterface from "./ConsoleInterface";

class GraphicInterface extends ConsoleInterface {
    displayMenu() {
        console.log("Menu GUI");
        this.system.displayMenu();
    }
}

export default GraphicInterface;
