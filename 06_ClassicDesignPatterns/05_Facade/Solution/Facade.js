class Facade {
    setElement(item, name) {
        localStorage.setItem(item, name);
    }
    getElement(name) {
        if (localStorage.getItem(name)) {
             console.log(localStorage.getItem(name));
        }
        else {
            console.log("Brak elementu");
        }
    }
    removeElement(name) {
        localStorage.removeItem(name);
    }
}

export default Facade;
