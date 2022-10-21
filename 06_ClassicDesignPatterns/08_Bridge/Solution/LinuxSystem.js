import System from "./System";

class LinuxSystem extends System {
    displayMenu() {
        console.log("LinuxSystem");
        this.menu.map(el => console.log(el));
    }
}

export default LinuxSystem;
