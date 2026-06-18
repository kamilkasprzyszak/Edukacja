# Systemy i Narzędzia Przyspieszonej Nauki (Accelerated Learning Frameworks)


Repozytorium zawiera autorskie skrypty, mini-aplikacje oraz narzędzia automatyzujące i optymalizujące proces przyswajania złożonej wiedzy dziedzinowej. Głównym celem projektu jest implementacja założeń inżynierii wiedzy w celu maksymalnego skrócenia czasu potrzebnego na opanowanie teorii i praktyki w niszach wymagających wysokiej precyzji (np. finanse i księgowość, mechanika rynków finansowych, farmacja).


Narzędzia opierają się na algorytmach powtórek interwałowych (Spaced Repetition), aktywnym testowaniu (Active Recall) oraz automatycznej syntezie danych (Data Parsing).


<img width="1655" height="917" alt="image" src="https://github.com/user-attachments/assets/044f442b-cf5a-4c38-ba1f-236d1d8a7b37" />

---



## 🛠️ Struktura i Komponenty Systemu



Katalog został podzielony według narzędzi realizujących konkretne techniki kognitywne i edukacyjne:



### 1. Automatyzacja baz wiedzy i fiszek (`/generators`)

Skrypty odpowiedzialne za transformację surowych, nieustrukturyzowanych danych tekstowych w gotowe bazy edukacyjne.

* **Parsery aktów prawnych i regulacji:** Narzędzia wyciągające kluczowe definicje i reguły (np. na potrzeby strukturyzacji standardów rachunkowości i przepisów podatkowych).

* **Generator Anki/Markdown:** Skrypty automatycznie mapujące tabele danych (np. klasyfikacje chemiczne/farmaceutyczne lub mechanizmy rynkowe) do formatów obsługiwanych przez systemy powtórek interwałowych.



### 2. Symulatory i narzędzia weryfikacji wiedzy (`/simulators`)

Aplikacje konsolowe (CLI) oraz skrypty interaktywne służące do natychmiastowego testowania poziomu opanowania materiału.

* **Algorytmy selekcji pytań:** Narzędzia ważące trudność pytań na podstawie historii błędów użytkownika (optymalizacja sesji powtórkowych).

* **Symulatory procedur:** Narzędzia weryfikujące poprawność chronologiczną i logiczną wprowadzanych danych (np. dekretacja zdarzeń gospodarczych w księgowości czy procedury technologiczne).



### 3. Agregatory i ekstraktory esencji danych (`/parsers`)

Narzędzia automatyzujące etap selekcji materiału według zasady Pareto (80/20).

* **NLP Content Extractors:** Proste skrypty wykorzystujące analizę tekstową do izolowania klastrów pojęciowych najczęściej pojawiających się w literaturze specjalistycznej.



---



## 💡 Przykłady Zastosowań Dziedzinowych (Use Cases)



Architektura narzędzi jest w pełni agnostyczna (niezależna od przedmiotu nauki). Systemy były z powodzeniem testowane na bazach danych z obszarów:

* **Finanse i Księgowość:** Automatyzacja nauki planów kont, kodyfikacji podatkowych oraz struktur bilansowych.

* **Handel Ilościowy i Programowanie:** Szybkie przyswajanie składni nowych języków (MQL5, zaawansowane API giełdowe) oraz matematyki finansowej.

* **Farmacja i Chemia:** Strukturyzacja wiedzy z zakresu interakcji substancji czynnych oraz nomenklatury technicznej.



---



## 💻 Stack Technologiczny



* **Języki programowania:** Python, Bash

* **Formaty danych:** JSON, CSV, Markdown

* **Metodologie:** Spaced Repetition (SuperMemo/Anki algorithm core), Active Recall Frameworks

