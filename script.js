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