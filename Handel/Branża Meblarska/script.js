const mebleData = [
    { index: '3206', name: 'Meble Bugajski', time: '5 tyg PL' },
    { index: '0211', name: 'Unimebel', time: '5 tyg PL' },
    { index: '2711', name: 'Kentbis', time: '5 tyg PL' },
    { index: '2349', name: 'Comforteo (Meble Marzenie)', time: '5 tyg PL' },
    { index: '1959', name: 'Max Kobik', time: '5 tyg PL' },
    { index: '1090', name: 'Intermeble', time: '2 tyg PL' },
    { index: '2038', name: 'Meblosoft', time: '5 tyg PL' },
    { index: '2695', name: 'Pionier Meble', time: '5 tyg PL' },
    { index: '0675', name: 'Imprest Elegant/Gala', time: '6 tyg PL' },
    { index: '0090', name: 'Forte', time: '2 tyg PL' },
    { index: '2459', name: 'Błoński', time: '2 tyg PL' },
    { index: '1130', name: 'Wójcik', time: '3 tyg PL' },
    { index: '2311', name: 'Composad', time: '2 tyg IT' }
];

const mnemonics = [
    { index: '3206', text: '🏎️ Bugajski brzmi jak Bugatti. Wyobraź sobie Bugatti jadące 320 km/h (3206) przez 5 tygodni po Polsce.' },
    { index: '0211', text: '🦄 Uni to jednorożec. Ma 2 rogi i 11 magicznych mocy (0211). Leci przez 5 tygodni.' },
    { index: '2711', text: '🦸‍♂️ Kent jak Clark Kent (Superman). Ma 27 lat i w listopadzie (11) składa meble przez 5 tyg.' },
    { index: '2349', text: '😴 Marzenie o komforcie (Comforteo). W 2349 roku sen przez 5 tygodni to luksusowe marzenie.' },
    { index: '1959', text: '👴 Max Kobik urodził się w 1959 roku. Był maksymalnie fajny przez 5 tygodni.' },
    { index: '1090', text: '⚽ Inter Mediolan gra o absurdalnej godzinie 10:90. Szybka piłka - dostawa w zaledwie 2 tygodnie!' },
    { index: '2038', text: '💻 Meblosoft jak Microsoft. W 2038 roku wydadzą miękkie meble. Czekasz na update 5 tygodni.' },
    { index: '2695', text: '🏕️ Pionier (harcerz) ma 26 lat, a jego babcia 95 (2695). Razem budują namiot 5 tygodni.' },
    { index: '0675', text: '🎩 Gala (impreza) jest 06.07 (a 5 to piątek: 0675). Elegancko trzeba czekać najdłużej, bo aż 6 tygodni!' },
    { index: '0090', text: '🕵️‍♂️ Agent 0090 (Forte - głośny agent). Misję meblową wykonuje błyskawicznie w 2 tygodnie.' },
    { index: '2459', text: '🌳 Na Błoniach można siedzieć 24 godziny, a 1h ma 59 minut (2459). Szybki relaks w 2 tygodnie.' },
    { index: '1130', text: '👨‍💼 Wójt ma gabinet od 11:30. Przez 3 tygodnie rozpatruje wnioski o nowe meble w gminie.' },
    { index: '2311', text: '🍕 Włoska mafia Composad (IT). O 23:11 jedzą pizzę. Kompostują problemy w zaledwie 2 tygodnie.' }
];

// App State
let currentQuestion = null;
let score = { correct: 0, wrong: 0 };
let currentQuestionType = 0; // 0: Index->Name, 1: Name->Index, 2: Name->Time

// DOM Elements
const tabBtns = document.querySelectorAll('.tab-btn');
const tabContents = document.querySelectorAll('.tab-content');
const questionText = document.getElementById('question-text');
const optionsContainer = document.getElementById('options-container');
const feedbackContainer = document.getElementById('feedback-container');
const feedbackText = document.getElementById('feedback-text');
const nextBtn = document.getElementById('next-btn');
const scoreCorrectEl = document.getElementById('score-correct');
const scoreWrongEl = document.getElementById('score-wrong');
const flashcardsContainer = document.getElementById('flashcards-container');
const searchInput = document.getElementById('search-input');

// Event Listeners
tabBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        // Remove active class from all
        tabBtns.forEach(b => b.classList.remove('active'));
        tabContents.forEach(c => c.classList.remove('active'));
        
        // Add active class to clicked
        btn.classList.add('active');
        document.getElementById(btn.dataset.tab).classList.add('active');
    });
});

nextBtn.addEventListener('click', generateQuestion);
searchInput.addEventListener('input', renderFlashcards);

// Functions
function getRandomItem(array) {
    return array[Math.floor(Math.random() * array.length)];
}

function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

function generateOptions(correctAnswer, allItems, property) {
    let options = [correctAnswer];
    while (options.length < 4) {
        let randomItem = getRandomItem(allItems)[property];
        if (!options.includes(randomItem)) {
            options.push(randomItem);
        }
    }
    return shuffleArray(options);
}

function generateQuestion() {
    // Hide feedback
    feedbackContainer.classList.add('hidden');
    optionsContainer.innerHTML = '';
    
    // Pick random item
    const item = getRandomItem(mebleData);
    currentQuestionType = Math.floor(Math.random() * 3);
    
    let questionStr = '';
    let correctAnswer = '';
    let options = [];

    switch (currentQuestionType) {
        case 0: // Index -> Name
            questionStr = `Jaki dostawca posiada indeks <span style="color: var(--primary)">${item.index}</span>?`;
            correctAnswer = item.name;
            options = generateOptions(correctAnswer, mebleData, 'name');
            break;
        case 1: // Name -> Index
            questionStr = `Jaki jest indeks dla dostawcy <span style="color: var(--secondary)">${item.name}</span>?`;
            correctAnswer = item.index;
            options = generateOptions(correctAnswer, mebleData, 'index');
            break;
        case 2: // Name/Index -> Time
            questionStr = `Jaki jest czas oczekiwania dla <span style="color: var(--success)">${item.name} (${item.index})</span>?`;
            correctAnswer = item.time;
            options = generateOptions(correctAnswer, mebleData, 'time');
            break;
    }

    currentQuestion = { item, correctAnswer };
    questionText.innerHTML = questionStr;

    // Render Options
    options.forEach((opt, index) => {
        const btn = document.createElement('button');
        btn.className = 'option-btn';
        // Add A, B, C, D prefix just for visual flavor
        const letters = ['A', 'B', 'C', 'D'];
        btn.innerHTML = `<span style="opacity: 0.5; margin-right: 15px; font-weight: normal;">${letters[index]}</span> ${opt}`;
        
        btn.addEventListener('click', () => checkAnswer(opt, btn));
        optionsContainer.appendChild(btn);
    });
}

function checkAnswer(selectedAnswer, selectedBtn) {
    // Disable all buttons
    const buttons = optionsContainer.querySelectorAll('.option-btn');
    buttons.forEach(btn => btn.disabled = true);

    const isCorrect = selectedAnswer === currentQuestion.correctAnswer;

    if (isCorrect) {
        selectedBtn.classList.add('correct');
        score.correct++;
        scoreCorrectEl.textContent = score.correct;
        feedbackText.innerHTML = `<span class="feedback-text success"><i class="fa-solid fa-circle-check"></i> Świetnie! Poprawna odpowiedź.</span>`;
    } else {
        selectedBtn.classList.add('wrong');
        score.wrong++;
        scoreWrongEl.textContent = score.wrong;
        
        // Find correct button and highlight it
        buttons.forEach(btn => {
            if (btn.textContent.includes(currentQuestion.correctAnswer)) {
                btn.classList.add('correct');
            }
        });

        feedbackText.innerHTML = `<span class="feedback-text error"><i class="fa-solid fa-circle-xmark"></i> Błąd! Poprawna odpowiedź to: <strong>${currentQuestion.correctAnswer}</strong>.</span>`;
    }

    // Show feedback and next button
    feedbackContainer.classList.remove('hidden');
    
    // Auto-scroll to next button if needed
    feedbackContainer.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
}

function renderFlashcards() {
    const searchTerm = searchInput.value.toLowerCase();
    flashcardsContainer.innerHTML = '';

    const filteredData = mebleData.filter(item => 
        item.index.toLowerCase().includes(searchTerm) || 
        item.name.toLowerCase().includes(searchTerm)
    );

    filteredData.forEach(item => {
        const mnemonic = mnemonics.find(m => m.index === item.index);
        
        const card = document.createElement('div');
        card.className = 'flashcard glass-panel';
        
        card.innerHTML = `
            <div class="flashcard-inner">
                <div class="flashcard-front">
                    <h3>${item.index}</h3>
                    <p>${item.name}</p>
                    <div style="margin-top: 15px; color: var(--success); font-weight: 800;">
                        <i class="fa-regular fa-clock"></i> ${item.time}
                    </div>
                    <span class="hint-text">Kliknij aby obrócić <i class="fa-solid fa-rotate"></i></span>
                </div>
                <div class="flashcard-back">
                    <p>${mnemonic ? mnemonic.text : 'Brak fiszki.'}</p>
                    <span class="hint-text">Kliknij aby wrócić <i class="fa-solid fa-rotate"></i></span>
                </div>
            </div>
        `;

        card.addEventListener('click', () => {
            card.classList.toggle('flipped');
        });

        flashcardsContainer.appendChild(card);
    });
}

// Initialize
generateQuestion();
renderFlashcards();

// Memory Game Logic
let hasFlippedCard = false;
let lockBoard = false;
let firstCard, secondCard;
let memoryScore = 0;
let memoryMoves = 0;

const memoryBoard = document.getElementById('memory-board');
const memoryScoreEl = document.getElementById('memory-score');
const memoryMovesEl = document.getElementById('memory-moves');
const memoryResetBtn = document.getElementById('memory-reset');

memoryResetBtn.addEventListener('click', initMemoryGame);

function initMemoryGame() {
    memoryBoard.innerHTML = '';
    memoryScore = 0;
    memoryMoves = 0;
    updateMemoryStats();
    resetBoard();

    // Wybieramy 8 par (lub wszystkie jeśli mniej) do gry
    let shuffledData = shuffleArray([...mebleData]).slice(0, 8);
    let cardsData = [];

    shuffledData.forEach(item => {
        // Karta 1: Indeks
        cardsData.push({ id: item.index, text: `<span style="font-size: 1.5rem; font-weight: 800;">${item.index}</span>` });
        // Karta 2: Nazwa i Czas
        cardsData.push({ id: item.index, text: `<span>${item.name}</span><br><span style="font-size:0.8rem; color:var(--success); margin-top:5px;">${item.time}</span>` });
    });

    cardsData = shuffleArray(cardsData);

    cardsData.forEach(card => {
        const cardElement = document.createElement('div');
        cardElement.classList.add('memory-card');
        cardElement.dataset.id = card.id;

        cardElement.innerHTML = `
            <div class="memory-card-back"><i class="fa-solid fa-question"></i></div>
            <div class="memory-card-front">${card.text}</div>
        `;

        cardElement.addEventListener('click', flipCard);
        memoryBoard.appendChild(cardElement);
    });
}

function flipCard() {
    if (lockBoard) return;
    if (this === firstCard) return;

    this.classList.add('flipped');

    if (!hasFlippedCard) {
        hasFlippedCard = true;
        firstCard = this;
        return;
    }

    secondCard = this;
    memoryMoves++;
    updateMemoryStats();
    checkForMatch();
}

function checkForMatch() {
    let isMatch = firstCard.dataset.id === secondCard.dataset.id;

    if (isMatch) {
        disableCards();
        memoryScore += 10;
        updateMemoryStats();
    } else {
        unflipCards();
    }
}

function disableCards() {
    firstCard.removeEventListener('click', flipCard);
    secondCard.removeEventListener('click', flipCard);
    
    firstCard.classList.add('matched');
    secondCard.classList.add('matched');

    resetBoard();
}

function unflipCards() {
    lockBoard = true;

    setTimeout(() => {
        firstCard.classList.remove('flipped');
        secondCard.classList.remove('flipped');

        resetBoard();
    }, 1000);
}

function resetBoard() {
    [hasFlippedCard, lockBoard] = [false, false];
    [firstCard, secondCard] = [null, null];
}

function updateMemoryStats() {
    memoryScoreEl.textContent = memoryScore;
    memoryMovesEl.textContent = memoryMoves;
}

// Inicjalizacja gry Memory
initMemoryGame();
