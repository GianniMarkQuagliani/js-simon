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