// Definisco le constanti randomNumbers e gestire i numeri casuali e quelli inseriti dall'utente.
let randomNumbers = [];
let userNumbers = [];


// Attendo il caricamento del documento HTML prima di associare eventi.
document.addEventListener("DOMContentLoaded", function() {
    
    // Faccio il pulsante "Inizia il gioco".
    const startButton = document.getElementById("startButton");
   
    // Aggiungo un event listener al pulsante per gestire il clic.
    startButton.addEventListener("click", startGame);
});


// Funzione che avvia il gioco quando il pulsante "Inizia il gioco" viene cliccato.
function startGame() {
    
    // Genera 5 numeri casuali e li assegna all'array randomNumbers.
    randomNumbers = generateRandomNumbers(5);

    // Mostra i numeri generati sulla pagina.
    displayNumbers(randomNumbers);

    // Avvia un timer per nascondere i numeri dopo 5 secondi.
    setTimeout(() => {
        clearNumbers();
        // Avvia un altro timer per chiedere all'utente di inserire i numeri.
        setTimeout(promptUserNumbers, 100);
    }, 5000);
}


// Funzione per generare un array di numeri casuali unici.
function generateRandomNumbers(count) {
    const numbers = [];
    while (numbers.length < count) {
        const randomNumber = Math.floor(Math.random() * 100) + 1;
        if (!numbers.includes(randomNumber)) {
            numbers.push(randomNumber);
        }
    }
    return numbers;
}


// Funzione per visualizzare i numeri sulla pagina HTML.
function displayNumbers(numbers) {
    const numbersDiv = document.getElementById('numbers');
    numbersDiv.innerHTML = numbers.join(' ');
}

// Funzione per cancellare i numeri dalla pagina HTML.
function clearNumbers() {
    const numbersDiv = document.getElementById('numbers');
    numbersDiv.innerHTML = '';
}


// Funzione per chiedere all'utente di inserire i numeri visti.
function promptUserNumbers() {
    userNumbers = [];
    for (let i = 0; i < randomNumbers.length; i++) {
        const userNumber = parseInt(prompt(`Inserisci il numero ${i + 1} che hai visto:`));
        userNumbers.push(userNumber);
    }
    // Dopo che l'utente ha inserito i numeri, controlla quali sono corretti.
    checkUserNumbers();
}

// Funzione per verificare quali numeri inseriti dall'utente sono corretti.
function checkUserNumbers() {
    const correctNumbers = [];
    for (const number of userNumbers) {
        if (randomNumbers.includes(number)) {
            correctNumbers.push(number);
        }
    }
    // Cancella i numeri dalla pagina e mostra un alert con i risultati.
    clearNumbers();
    alert(`Hai indovinato ${correctNumbers.length} numeri: ${correctNumbers.join(', ')}`);
}