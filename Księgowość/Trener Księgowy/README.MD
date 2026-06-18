## 📱 Aplikacja: Księgowy Trener - Zaawansowany Generator Bilansów

**Księgowy Trener** to interaktywna aplikacja webowa (Single Page Application) stworzona w celu uproszczenia i przyspieszenia nauki podstaw rachunkowości finansowej. Narzędzie służy do praktycznego trenowania jednej z najważniejszych umiejętności w księgowości – prawidłowej klasyfikacji kont oraz sporządzania bilansu przedsiębiorstwa (podziału na Aktywa i Pasywa).

Aplikacja doskonale pokazuje w praktyce działanie metodologii *Active Recall* (aktywnego testowania wiedzy) oraz symulacji procedur.

---

### 🚀 Kluczowe Funkcje Programu

1. **Multibranżowy Generator Zadań (Algorytm Proceduralny)**
   Aplikacja potrafi wygenerować nieskończenie wiele unikalnych zadań księgowych dostosowanych do specyfiki różnych branż. Użytkownik może wybrać naukę na przykładach firm z sektora:
   * 🏭 Przemysł i Produkcja (np. hale produkcyjne, surowce)
   * 🛒 Handel i E-commerce (np. towary handlowe, wyposażenie magazynu)
   * 💻 Usługi IT / Cyfrowe (np. prawa autorskie, serwery, abonamenty)
   * 🌾 Rolnictwo (np. grunty, ciągniki, stado podstawowe)

2. **Wbudowane Zadanie Wzorcowe (Case Study)**
   Aplikacja zawiera fabrycznie załadowane, klasyczne zadanie edukacyjne **MED-POL S.A. (Zadanie 1.1.11)**, które pozwala na natychmiastowy start i pracę na realnym, złożonym przykładzie szkoleniowym.

3. **Interaktywny Panel Klasyfikacji ("Wybierz i Upuść")**
   Użytkownik widzi listę wymieszanych pozycji bilansowych (majątku i zobowiązań). Jego zadaniem jest przypisanie każdej z nich do odpowiedniego folderu (np. *Rzeczowe aktywa trwałe*, *Zobowiązania krótkoterminowe* itp.) za pomocą intuicyjnych list wyboru.

4. **Weryfikacja Błędów w Czasie Rzeczywistym**
   Przycisk **"Sprawdź Błędy"** natychmiast analizuje cały formularz, podświetla błędnie przypisane pozycje na czerwono i wyświetla ostrzeżenia, eliminując potrzebę ręcznego sprawdzania wyników z kluczem odpowiedzi.

5. **Inteligentny Kalkulator Równania Bilansowego**
   Funkcja **"Oblicz brakującą wartość"** pozwala użytkownikowi rozwiązywać zaawansowane zadania, w których celowo ukryto wartość *Kapitału podstawowego*. Program analizuje strukturę Aktywów i Pasywów, a następnie matematycznie wylicza brakującą kwotę, wymuszając zachowanie nadrzędnej zasady bilansowej (Aktywa = Pasywa).

---

### 🧠 Jak aplikacja przyspiesza naukę?

* **Nauka przez działanie (Learning by Doing):** Zamiast pamięciowego wkuwania definicji z podręcznika, użytkownik uczy się poprzez podejmowanie natychmiastowych decyzji.
* **Szybka pętla zwrotna (Instant Feedback):** Uczeń od razu widzi, czy popełnił błąd i o ile różnią się obie strony bilansu. To drastycznie skraca czas potrzebny na zrozumienie logiki kont księgowych.
* **Zrozumienie struktury:** Wizualny podział na trzy kolumny (Do rozpisania / Aktywa / Pasywa) ułatwia przestrzenne zapamiętanie budowy sprawozdań finansowych.

---

### 💻 Stack Technologiczny

Aplikacja została napisana jako czysty, lekki komponent frontendowy bez zewnętrznych zależności (No-Framework / Vanilla Stack):
* **HTML5 / CSS3:** Nowoczesny interfejs z motywem *Dark Mode* oraz pełną responsywnością (dostosowanie do ekranów komputerów i tabletów).
* **Vanilla JavaScript (ES6):** Logika biznesowa, dynamiczne renderowanie drzewa kategorii, obsługa stanów (state management) oraz algorytm generowania losowych kwot i pozycji dla różnych sektorów rynku.
