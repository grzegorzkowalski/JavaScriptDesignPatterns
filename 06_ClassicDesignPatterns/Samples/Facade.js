// Serwis służący do zarządzania zadaniami
class TaskService {
    constructor(data) {
        this.name = data.name;
        this.priority = data.priority;
        this.project = data.project;
        this.user = data.user;
        this.completed = data.completed;
    }

    complete() {
        // oznaczenie taska jako zakończonego
        this.completed = true;
        console.log(`Kończenie zadania: "${this.name}"`);
    }
    setCompleteDate() {
        // zapiszmy czas zakończenia zadania.
        // Taka informacja zawsze jest przydatna
        this.completedDate = new Date();
        console.log(`"${this.name}" zakończony dnia ${this.completedDate}`);
    }
    save() {
        // Zapiszmy w naszej bazie danych informacje o zakończeniu zadania
        // wymagane będzie obsłużenie akcji asynchronicznych
        // oraz potencjalnych błędów
        console.log(`Aktualizacja zadania: "${this.name}"`);
    }
    notifyCompletion() {
        // pokażmy na ekranie użytkownika (UI) informację o tym,
        // że task został zapisany,
        // bądź poinformujmy o ewentualnych błędach
        console.log(
            `${this.user} został powiadomiony o zakończeniu zadania "${this.name}"`
        );
    }
}

// Fasada naszego serwisu
class TaskServiceFacade extends TaskService {
    completeAndNotify() {
        // cała logika związana z ukończeniem zadania
        this.complete();
        this.setCompleteDate();
        this.save();
        this.notifyCompletion();
    }
}

let mytask = new TaskServiceFacade({
    name: "Sprawdzić nowe posty na frontstack.pl",
    priority: 1,
    project: "Edukacja",
    user: "Wojtek",
    completed: false
});


console.log(mytask.completeAndNotify());
