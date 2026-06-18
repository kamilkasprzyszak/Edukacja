## 📱 Aplikacja: Wyszukiwarka Pozycji Bilansowych według UoR

**Wyszukiwarka Pozycji Bilansowych** to interaktywne narzędzie stworzone do nauki struktury sprawozdań finansowych zgodnie z polską Ustawą o Rachunkowości (UoR). 

Aplikacja pozwala błyskawicznie porównać i przeanalizować, jak zmienia się szczegółowość bilansu (podział na Aktywa i Pasywa) w zależności od wielkości oraz specyfiki przedsiębiorstwa. Rozwiązuje problem uciążliwego sprawdzania przepisów w dokumentach PDF, podając pełną strukturę w formie interaktywnego, przejrzystego drzewa.

<img width="980" height="883" alt="image" src="https://github.com/user-attachments/assets/c6d9c07a-31ee-47a8-82c4-3c62d3563333" />

---

### 🚀 Kluczowe Funkcje Programu

1. **Pełna Obsługa 5 Załączników do Ustawy o Rachunkowości**
   Użytkownik może jednym kliknięciem przełączyć strukturę bilansu dla różnych typów jednostek:
   * **Załącznik 1:** Jednostki Inne (pełna, najbardziej szczegółowa wersja dla dużych firm)
   * **Załącznik 2:** Banki (specjalistyczny układ dla sektora finansowego)
   * **Załącznik 3:** Zakłady Ubezpieczeń
   * **Załącznik 4:** Jednostki Mikro (maksymalnie uproszczony bilans)
   * **Załącznik 5:** Jednostki Małe (wariant pośredni z ograniczoną szczegółowością)

2. **Inteligentny Silnik Wyszukiwania i Dynamiczne Rozwijanie Drzewa**
   Wyszukiwarka działa w czasie rzeczywistym podczas wpisywania hasła (Live Search). Po wpisaniu szukanej frazy (np. *„środki pieniężne”*, *„rezerwy”*, * Zapasy*):
   * Program automatycznie **ukrywa niepasujące elementy** i podświetla znalezione pozycje na żółto.
   * Algorytm automatycznie **odkrywa całą ścieżkę rodziców** (nadrzędnych kategorii) aż do samego korzenia, dzięki czemu użytkownik od razu widzi, w której sekcji i podsekcji bilansu znajduje się dane konto.
   * Narzędzie automatycznie rozwija również wszystkie elementy podrzędne (dzieci) znalezionej kategorii.

3. **Zaawansowana Hierarchia Wizualna**
   Aplikacja automatycznie mapuje wielopoziomowe struktury danych (aż do 5 poziomów zagnieżdżenia) i nadaje im odpowiednie style wizualne (grubość czcionki, kolory, wcięcia i linie pomocnicze). Dzięki temu od razu widać relacje między kategoriami głównymi (np. *A. Aktywa trwałe*), a szczegółowymi pozycjami (np. *a) grunty*).

---

### 🧠 Jak aplikacja przyspiesza naukę?

* **Zrozumienie elastyczności prawa:** Pozwala na natychmiastowe, wizualne porównanie jak bardzo uproszczony jest bilans dla firmy typu *Mikro* w porównaniu do standardowej spółki (*Załącznik 1*).
* **Szybka nawigacja:** Pomaga studentom i praktykom rachunkowości w ułamku sekundy sprawdzić poprawną lokalizację pozycji sprawozdawczych, eliminując błędy podczas ręcznego tworzenia bilansów.

---

### 💻 Stack Technologiczny

Projekt zrealizowany w architekturze *Vanilla Stack* – bez użycia ciężkich frameworków czy zewnętrznych bibliotek:
* **HTML5 / CSS3:** Estetyczny, lekki interfejs w unikalnej, pastelowej stylistyce, wykorzystujący zmienne CSS (`:root`) do łatwego zarządzania motywem kolorystycznym.
* **Vanilla JavaScript (ES6):** Rekurencyjny algorytm budowania drzewa DOM (`buildTree`) na podstawie złożonych, zagnieżdżonych struktur obiektów JSON, zaawansowane filtrowanie z dynamicznym przeszukiwaniem hierarchii i manipulacją klasami widoczności.
