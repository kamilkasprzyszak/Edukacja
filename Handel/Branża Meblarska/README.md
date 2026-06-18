## 📱 Aplikacja: MebloMaster – System Grywalizacji i Mnemotechniki

**MebloMaster** to interaktywna aplikacja treningowa stworzona w celu błyskawicznego opanowania bazy danych dostawców, ich 4-cyfrowych indeksów oraz czasów realizacji zamówień. 

Aplikacja jest doskonałym przykładem tego, jak za pomocą kodu można przekształcić trudną, nudną i mechaniczną naukę "na pamięć" (brute-force memorization) w angażujący proces oparty na **mnemotechnice** oraz **grywalizacji (gamification)**. Rozwiązuje realny problem pracowników logistyki i sprzedaży, którzy muszą sprawnie posługiwać się setkami kodów systemowych w codziennej pracy.

<img width="1077" height="641" alt="image" src="https://github.com/user-attachments/assets/e9df9d57-7c51-4bbb-ad71-35682f1928f6" />

---

### 🚀 Kluczowe Moduły Edukacyjne

Aplikacja została podzielona na trzy niezależne filary wspierające proces zapamiętywania (różne techniki kognitywne):

#### 1. Fiszki z Mnemotechniką (Mnemonic Flashcards)
To serce edukacyjne programu. Zamiast uczyć się na sucho, że indeks dostawcy *Meble Bugajski* to *3206*, aplikacja oferuje interaktywne, obracane fiszki z autorskimi, żywymi historiami skojarzeniowymi:
> 🏎️ *Bugajski brzmi jak Bugatti. Wyobraź sobie Bugatti jadące 320 km/h (3206) przez 5 tygodni po Polsce.*
Dzięki wykorzystaniu asocjacji, mózg tworzy trwałe ślady pamięciowe w ułamku sekundy. Moduł wyposażono także w wyszukiwarkę live-search do szybkiej powtórki konkretnego dostawcy.

#### 2. Dynamiczny Moduł Quizu (Active Recall)
Generator pytań automatycznie losuje zadania w trzech różnych wariantach, aby przetestować wiedzę z każdej możliwej strony:
* **Indeks ➡️ Nazwa** (Widzisz kod `1090`, wskazujesz dostawcę)
* **Nazwa ➡️ Indeks** (Widzisz nazwę dostawcy, wskazujesz kod)
* **Nazwa/Indeks ➡️ Czas dostawy** (Weryfikacja znajomości terminów realizacji)
Quiz odcina błędne odpowiedzi, podświetla prawidłowe i natychmiast aktualizuje licznik punktów (Instant Feedback Loop).

#### 3. Gra Memory (Dopasowywanie Par)
Moduł wykorzystujący pamięć wizualną i przestrzenną. Zadaniem użytkownika jest odnalezienie par składających się z **karty z indeksem liczbowym** oraz **karty z nazwą dostawcy i czasem realizacji**. Gra śledzi liczbę wykonanych ruchów, motywując do pobijania własnych rekordów.

---

### 🧠 Dlaczego ten system działa?

* **Zamiana abstrakcji w obrazy:** Ludzki mózg ewolucyjnie nie jest przystosowany do pamiętania losowych ciągów cyfr (np. `2349`). Skojarzenie ich z konkretną, często absurdalną historią (np. sen o komforcie w roku `2349`) drastycznie przyspiesza naukę.
* **Aktywne odtwarzanie (Active Recall):** Quiz zmusza mózg do wysiłku i samodzielnego wyciągania informacji z pamięci, co jest wielokrotnie skuteczniejsze niż bierne czytanie tabeli.

---

### 💻 Stack Technologiczny

Projekt stworzony w duchu "Clean & Fast Frontend" – lekki kod, natychmiastowe działanie:
* **HTML5 / CSS3:** Nowoczesny, futurystyczny interfejs z efektami szklanych paneli (*Glassmorphism*), płynnymi animacjami obracania kart oraz dynamicznym, animowanym tłem (Blob Background).
* **Vanilla JavaScript (ES6):** Pełne zarządzanie stanem aplikacji (licznik punktów, ruchów w memory), algorytmy mieszania tablic (*Fisher-Yates Shuffle*), dynamiczne generowanie dystraktorów (błędnych odpowiedzi w quizie) oraz obsługa logiki dopasowania kart w czasie rzeczywistym.
