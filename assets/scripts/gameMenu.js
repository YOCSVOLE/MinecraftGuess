// gameMenu.js
document.addEventListener("DOMContentLoaded", function () {
    const username = localStorage.getItem("currentUser");
    if (username) {
        document.getElementById("usernameDisplay").textContent = username;
    }
});

document.getElementById('blocksButton').addEventListener('click', () => {
    window.location.href = 'blockGame.html';
});

document.getElementById('mobsButton').addEventListener('click', () => {
    window.location.href = 'mobGame.html';
});

document.getElementById('itemsButton').addEventListener('click', () => {
    window.location.href = 'itemGame.html';
});

document.getElementById("profile-link").addEventListener("click", function (event) {
    event.preventDefault();
    var dropdown = document.querySelector(".dropdown-content");
    dropdown.style.display = dropdown.style.display === "block" ? "none" : "block";
});
