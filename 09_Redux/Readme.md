# Rozdział 9 - Kontenery stanowe, Flux, Redux

## Zadanie 1 - Licznik z UI w React

Zaimplementuj prostą aplikację licznika. Aplikacja ma składać się z prostego reducera, który przechowuje liczbę. Niech wartością początkową będzie `0`.

Reducer powinien reagować na akcje: `INCREMENT` oraz `DECREMENT`. Zaimplementuj je w pliku `redux/actions.js`. Sam reducer powinien znaleźć się w pliku `redux/reducers.js`.

Powinniśmy wyświetlić bieżącą wartość licznika.

Dodatkowo wyrenderujmy dwa przyciski. `+` - dla przycisku zwiększającego licznik, `-` - dla przycisku zmniejszającego licznik.

Należy obsłużyć odpowiednie Event Handlers, a także subskrybować zmiany w store Reduxa.

---

## Zadanie 2 - Lista zakupów wraz z kolejnością

Zaimplementuj aplikację realizującą listę zakupów. Aplikacja powinna składać się:

- z elementu `input`, do którego możemy wpisać nazwę produktu.
- z przycisku "Dodaj produkt". Po jego naciśnięciu produkt ma zostać dodany do listy
- z listy produktów. Każdy produkt reprezentowany jest na liście poprzez jego nazwę oraz dwa przyciski `up` i `down` zmieniające kolejność elementu na liście.

Do realizacji zadania należy zaimplementować:

- reducer w pliku `redux/reducers.js`, pod polem `products`. Reducer powinien reagować na akcje `ADD_PRODUCT` i `CHANGE_ORDER`.
- akcje wraz z action creators w pliku `redux/actions.js`

Oczywiście lista `ul` powinna być dynamiczna i bazować na elementach znajdujących się w stanie.

Należy podłączyć do tego widoku odpowiednie Event Handlers a także subskrybować zmiany w store Reduxa.
