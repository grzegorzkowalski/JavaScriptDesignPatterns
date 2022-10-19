class MyHerosES6 {
    constructor(props) {
        this.heroes = [];
    }

    addItem(hero) {
        this.heroes.push(hero);
    }

    getItems() {
        return this.heroes;
    }
}

export default MyHerosES6;

