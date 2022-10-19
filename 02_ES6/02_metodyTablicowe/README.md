## Zadanie 1

Napisz funkcję ```distFromAverage```, która ma przyjmować tylko jeden argument - tablicę. Funkcja ta ma zwracać też tablicę. Zwracana tablica powinna mieć w sobie różnicę pomiędzy liczbą z danej komórki a średnią wartością tablicy.
Np.

```JavaScript
distFromAverage([1,2,3,4,5,6,7]) => [3,2,1,0,1,2,3] (średnia z tablicy wejściowej to 4)
distFromAverage([1,1,1,1]) => [0,0,0,0] (średnia z tablicy wejściowej to 1)
distFromAverage([2,8,3,7]) => [3,3,2,2] (średnia z tablicy wejściowej to 5)
```

## Zadanie 2

Napisz funkcję ```multiply(array)```. Funkcja ma przyjmować tylko jeden argument - tablicę. Następnie funkcja ```multiply``` ma pomnożyć wszystkie liczby znajdujące się w tablicy przy pomocy odpowiedniej metody tablicowej i zwrócić wynik.

```JavaScript
multiply([1,2,3,4,5,6,7]) => 5040
multiply([1,1,1,1]) => 1
multiply([2,8,3,7]) => 336
```



## Zadanie 3

Napisz funkcję ```getEvenAverage```, która ma przyjmować tylko jeden argument - tablicę. Funkcja ta ma zwracać średnią wartość **parzystych** liczb z tej tablicy. Dla uproszczenia można założyć, że tablica ma w sobie tylko liczby. Jeśli w tablicy nie ma parzystych liczb niech zwraca null.

```JavaScript
getEvenAverage([1,2,3,4,5,6,7]) => 4
getEvenAverage([1,1,1,1]) => null
getEvenAverage([2,8,3,7,4]) => 4.666