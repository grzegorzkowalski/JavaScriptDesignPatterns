import LinuxSystem from "./Solution/LinuxSystem";
import GraphicInterface from "./Solution/GraphicInterface";

const ls = new LinuxSystem();
const graphicInterface = new GraphicInterface(ls);

graphicInterface.displayMenu();

