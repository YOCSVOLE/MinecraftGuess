document.getElementById('profileName').innerText = localStorage.getItem('currentUser');

function goToGame(gameType) {
    localStorage.setItem('selectedGame', gameType); // Saves the selected game
    window.location.href = `${gameType}Game.html`; // Redirects to the respective game
}
