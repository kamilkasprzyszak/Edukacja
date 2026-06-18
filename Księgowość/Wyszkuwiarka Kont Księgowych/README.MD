## 📱 Aplikacja: Wyszukiwarka Kont Księgowych SKwP

**Wyszukiwarka Kont Księgowych** to interaktywne narzędzie webowe stworzone z myślą o osobach uczących się podstaw rachunkowości (zoptymalizowane pod standardy szkoleniowe Stowarzyszenia Księgowych w Polsce - SKwP). 

Aplikacja rozwiązuje problem uciążliwego kartkowania papierowych planów kont. Pozwala na błyskawiczne odnalezienie właściwego numeru konta na podstawie codziennych, życiowych pojęć biznesowych, co drastycznie przyspiesza proces dekretowania dokumentów i nauki księgowania.

---

### 🚀 Kluczowe Funkcje Programu

1. **Inteligentna Wyszukiwarka Semantyczna (Live Search)**
   Użytkownik nie musi znać dokładnej, oficjalnej nazwy konta. Filtrowanie działa w czasie rzeczywistym i przeszukuje bazę danych na trzy sposoby:
   * Po **numerze konta** (np. "401", "200")
   * Po **oficjalnej nazwie** (np. "Środki trwałe", "Rozrachunki z dostawcami")
   * Po **potocznych słowach kluczowych** powiązanych z operacjami gospodarczymi (np. wpisując „paliwo”, „czynsz”, „mandat”, „prąd”, „wyrok”, „auto” – program od razu wskaże właściwy paragraf).

2. **System Wizualnego Kodowania Kolorami (Badges)**
   Każde znalezione konto posiada wyraźne, kolorowe oznaczenie określające jego naturę finansową oraz zasady księgowania:
   * 🟦 **Aktywne (Wn)**
   * 🟥 **Pasywne (Ma)**
   * 🟪 **Aktywno-Pasywne (Wn/Ma)**
   * 🟨 **Kosztowe (Wn)**
   * 🟩 **Przychodowe (Ma)**

3. **Kompletna Baza Szkoleniowa (Zespoły 0-8)**
   Aplikacja zawiera wbudowany, uporządkowany plan kont – od Zespołu 0 (Majątek trwały), przez konta rozrachunkowe, kosztowe i przychodowe, aż po Zespół 8 (Kapitały i wynik finansowy).

---

### 🧠 Jak aplikacja przyspiesza naukę?

* **Łączenie teorii z praktyką:** Pomaga początkującym księgowym natychmiast powiązać dokument z faktury (np. rachunek za internet) z konkretnym numerem konta (*402 - Usługi obce*) i jego stroną księgowania (*Wn*).
* **Błyskawiczne tempo pracy:** Skraca czas wyszukiwania konta z kilkudziesięciu sekund do ułamka sekundy, pozwalając skupić się na logice samego księgowania, a nie na szukaniu kartek w podręczniku.

---

### 💻 Stack Technologiczny

Projekt zrealizowany w duchu minimalizmu kodu (No-Framework / Vanilla Stack), co zapewnia natychmiastowe ładowanie i zero zewnętrznych zależności:
* **HTML5 / CSS3:** Przejrzysty interfejs z intuicyjną legendą i czytelną typografią.
* **Vanilla JavaScript (ES6):** Obsługa zdarzeń wejściowych (`input`), dynamiczne przeszukiwanie i filtrowanie obiektów JSON w czasie rzeczywistym oraz automatyczne sortowanie numeryczne wyników.
