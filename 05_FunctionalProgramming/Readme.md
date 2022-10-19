# Rozdział 5 - Elementy programowania funkcyjnego

## Zadanie 1

1. Stwórz funkcję, która w swoim scope będzie posiadała tablicę, niedostępną poza zakresem funkcji.
2. Niech ta funkcja zwraca obiekt zawierający dwie metody.
3. Jedna, która pozwoli na dodawanie do wewnętrznej tablicy liczb pierwszych (wykonaj odpowiednią walidację).
4. Druga, która zwróci tablicę (wykorzystaj mechanizm domknięć).
5. W wykonaniu tego zadania możesz skorzystać z poniższej funkcji sprawdzającej czy liczba jest liczbą pierwszą.
```js
const isPrime = num => {
  for(let i = 2, s = Math.sqrt(num); i <= s; i++)
      if(num % i === 0) return false;
  return num > 1;
}
```

## Zadanie 2

1. Zapoznaj się z załączonym kodem i zamień go na kod funkcyjny. 
2. Zastanów się jakich funkcji potrzebujesz i jak je napisać, żeby spełniały definicję czystej funkcji.

## Zadanie 3 

1. Poniżej znajduje się tablica z armią fantasy. 
3. Odfiltruj same elfy, dodaj każdemu elfowi plus 10 do szybkości i zwróć łączny wiek elfów. 
   Wykorzystaj do tego wzorzec HOF i inne znane Ci dobre praktyki.
   
```js
const fantasticArmy = [
{race: "Elf", name: "Ravalee", age: 150, speed: 100},
{race: "Orc", name: "Xugarf", age: 34, speed: 80},
{race: "Orc", name: "Uram", age: 55, speed: 75},
{race: "Dwarf", name: "Grumpy", age: 111,  speed: 65},
{race: "Elf", name: "Keykalyn", age: 222, speed: 120},
{race: "Elf", name: "Oririe", age: 330, speed: 150}];
```
