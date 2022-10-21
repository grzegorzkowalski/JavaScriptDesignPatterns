import Facade from "./Solution/Facade";

const lsFacade = new Facade();
lsFacade.setElement("test", "Testujemy fasadę");
lsFacade.getElement("test");
lsFacade.removeElement("test");
lsFacade.getElement("test");
