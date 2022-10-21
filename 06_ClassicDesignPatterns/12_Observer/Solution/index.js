class Student {
    constructor(name) {
        this.name = name;
    }
    getResults = (result) => {
        console.log(`${result.name} osiągnął wynik ${result.score}    
        i ${result.score > 20 ? "zdał" : "nie zdał"}.`);
    }
}

class Teacher {
    constructor() {
        this.results = [];
        this.observers = [];
    }
    addObserver(observer) {
        this.observers.push(observer);
    }
    addResults(results) {
        this.results.push(...results);
        this.notify();
    }
    notify() {
        this.observers.forEach((el) => {
            const result = this.results.filter(x => x.name === el.name);
            console.log(result[0]);
            el.getResults(result[0]);
        })
    }
}

const teacher = new Teacher();
const grzegorz = new Student("Grzegorz");
const pawel = new Student("Paweł");
const jan = new Student("Jan");

teacher.addObserver(grzegorz);
teacher.addObserver(pawel);
teacher.addObserver(jan);
teacher.addResults([
  {name: "Grzegorz", score: 21},
  {name: "Paweł", score: 25},
  {name: "Jan", score: 15},
]);
