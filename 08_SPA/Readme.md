##Rozdział 8 - Architektura aplikacji SPA

### Do wykonania zadań wykorzystamy create-react-app.

## Zadanie 1

Stwórz komponent `BookInfo`, który przez props przyjmuje ISBN książki (`isbn`).

Za pomocą `fetch()` wykonaj zapytanie na adres otwartego API:
> `https://www.googleapis.com/books/v1/volumes?q=isbn:{numerISBN}`

gdzie zamiast `numerISBN` podasz ISBN przekazany w props.

Otrzymasz w odpowiedzi JSON, a z niego obiekt, w którym interesuje Cię tablica pod kluczem `items`, a w niej pierwszy element - obiekt z informacją o książce.

Niech komponent wyrenderuje w `div` element `h1` z tytułem (jest w tym obiekcie pod kluczem `volumeInfo.title`.

Pamiętaj o zablokowaniu wyświetlania komponentu dopóki nie otrzymasz odpowiedzi z serwera.

Przetestuj swój komponent w ten sposób:

```JS
<BookInfo isbn="0747532699" />
```


## Zadanie 2

> ### JSON Server
> Aby poprawnie wykonać to zadanie, musisz mieć zainstalowany `json-server`.
>
> ```shell script
> npm install -g json-server
> ```
> [https://www.npmjs.com/package/json-server](https://www.npmjs.com/package/json-server)
>
> ---
>
> W folderze `database` znajduje się plik `cars.json` z gotową bazą lokalną samochodów.
>
> Uruchomienie json-server: `json-server database/cars.json --watch`


### Część 1

Stwórz komponent `CarsManager`.

Za pomocą `fetch()` wykonaj zapytanie do swojego lokalnego serwera tak, aby pobrać listę wszystkich aut.

Następnie zbuduj listę (pamiętaj o odpowiednich kluczach), w której będziesz wyświetlał dla każdego auta wszystkie dostępne informacje oraz przycisk "Sprzedany".

Po kliknięciu na ten przycisk powinieneś wykonać odpowiednie zapytanie, które usunie daną pozycję z bazy lokalnej. Następnie zmodyfikuj state tak, żeby odzwierciedlić zmiany. **Nie odświeżaj strony!**.

Niech komponent wyrenderuje w `div` element `ul` z elementami listy samochodów.

Pamiętaj o zablokowaniu wyświetlania komponentu dopóki nie otrzymasz odpowiedzi z serwera.

### Część 2

Zaimplementuj router w aplikacji, który obsłuży widoki:
- Strona główna `/` zawierająca komponent `CarsManager`.
- Strona `/addCar`.
- Strona `/car`. 


### Część 3

Stwórz komponent `AddCar`, który będzie zawierał formularz służący do dodania samochodu do bazy danych. Musi zawierać pola:

- Nazwa [name]
- Marka [brand]
- Silnik
    - Typ [type]
    - Moc [hp]

Po dodaniu auta do bazy ma ono również pojawić się na liście samochodów. **Nie należy wysyłać ponownego zapytania do bazy ani odświeżać strony!**.


### Część 4

Stwórz komponent `Car`, który będzie miał za zadanie wyświetlać tylko jeden samochód z bazy danych. Należy tak zmodyfikować zadanie aby po pobraniu danych z bazy generować komponenty `Car` i przekazywać do nich przez `props` wszystkie niezbędne dane, a także callback funkcji, która usunie auto z bazy i odświeży widok.

Komponent ten należy rozbudować o **Edycję** samochodu. Dodaj przycisk **Edytuj**, po którego kliknięciu ma pojawić się formularz do edycji tego konkretnego auta. Po kliknięciu **Zapisz** dane mają zapisać się w bazie danych, a także zaktualizować na stronie.

Formularz należy walidować: pola nie mogą być puste a konie mechaniczne muszą być tylko cyframi.
