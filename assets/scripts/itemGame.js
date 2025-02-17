// itemGame.js
const items = [
    { name: "Sword", version: "Beta 1.0", category: "Weapon", rarity: "Common", craftable: "Yes", renewable: "No", canBeUsed: "Yes" },
    { name: "Pickaxe", version: "Alpha", category: "Tool", rarity: "Common", craftable: "Yes", renewable: "No", canBeUsed: "Yes" },
    // other items
];

document.getElementById('guessButton').addEventListener('click', () => {
    let userGuess = document.getElementById('guessInput').value;
    let foundItem = items.find(item => item.name.toLowerCase() === userGuess.toLowerCase());
    if (foundItem) {
        alert(`The correct item is: ${foundItem.name}`);
    } else {
        alert('Try again!');
    }
});
