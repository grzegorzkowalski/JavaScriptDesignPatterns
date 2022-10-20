## Zadanie

### Część 1 - Licznik z UI w React

Zaimplementuj prostą aplikację licznika. Aplikacja ma składać się z prostego reducera, który przechowuje liczbę. Niech wartością początkową będzie `0`.

Reducer powinien reagować na akcje: `INCREMENT` oraz `DECREMENT`. Zaimplementuj je w pliku `redux/actions.js`. Sam reducer powinien znaleźć się w pliku `redux/reducers.js`.

Plik `reducers.js` będzie nam potrzebny przy następnych zadaniach. Dlatego zamiast eksportować jeden reducer, wyeksportuj wynik łączenia reducerów używając funkcji `combineReducers`.

Reducer od licznika powinien znajdować się w polu `counter`.

W pliku `apps/Counter` stworzona jest klasa która tworzy widok komponentu. Wyświetla wartość licznika.

Dodatkowo renderuje dwa przyciski. `+` - dla przycisku zwiększającego licznik, `-` - dla przycisku zmniejszającego licznik.

Należy podłączyć do tego widoku odpowiednie Event Handlers a także subskrybować zmiany w store Reduxa.

---

### Część 2 - Lista zakupów wraz z kolejnością

Zaimplementuj aplikację realizującą listę zakupów. Aplikacja powinna składać się:

- z elementu `input`, do którego możemy wpisać nazwę produktu.
- z przycisku "Dodaj produkt". Po jego naciśnięciu produkt ma zostać dodany do listy
- z listy produktów. Każdy produkt reprezentowany jest na liście poprzez jego nazwę oraz dwa przyciski `up` i `down` zmieniające kolejność elementu na liście.

Do realizacji zadania należy zaimplementować:

- reducer w pliku `redux/reducers.js`, pod polem `products`. Reducer powinien reagować na akcje `ADD_PRODUCT` i `CHANGE_ORDER`.
- akcje wraz z action creators w pliku `redux/actions.js`

Komponent jest już gotowy w pliku `app/ShoppingList`.

Oczywiście lista `ul` powinna być dynamiczna i bazować na elementach znajdujących się w stanie. Snippet pojedyńczego elementu listy znajduje się w pliku `app/ShoppingList`.

Należy podłączyć do tego widoku odpowiednie Event Handlers a także subskrybować zmiany w store Reduxa.
