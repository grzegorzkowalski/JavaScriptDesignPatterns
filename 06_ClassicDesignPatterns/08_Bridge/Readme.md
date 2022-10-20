# Rozdział 6 - Inżynieryjne wzorce projektowe / Bridge

## Zadanie 1

1. Wyobraźmy sobie pulpit w naszym systemie operacyjnym. Dla systemu Windows jest to zazwyczaj oczywiste, że będziemy korzystać z interface'u graficznego. Natomiast użytkownik Linux może sobie interface wybrać.
2. Dlatego nie chcemy na stałe wiązać interface z systemem operacyjnym.
3. Proszę wdrożyć odpowiednie klasy (np. System, LinuxSystem, Interface, GraphicInterface).
4. Proszę wdrożyć relacje między tymi elementami za pomocą wzorca bridge.
5. Przetestuj poprawność rozwiązanie. Niech naciśniecie przycisku menu w naszym interface zwróci nam z systemu listę zainstalowanych programów. (na potrzeby zadania będzie to wywołanie w konsoli funkcji `displayMenu`).

