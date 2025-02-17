// blockGame.js
const blocks = [
    { name: "Stone", version: "Beta 1.0", tool: "Pickaxe", category: "Building", transparent: "No", flammable: "No", craftable: "Yes" },
    { name: "Dirt", version: "Alpha", tool: "Shovel", category: "Building", transparent: "No", flammable: "No", craftable: "Yes" },
    // other blocks
];

document.getElementById('guessButton').addEventListener('click', () => {
    let userGuess = document.getElementById('guessInput').value;
    let foundBlock = blocks.find(block => block.name.toLowerCase() === userGuess.toLowerCase());
    if (foundBlock) {
        // Show correct answers
        alert(`The correct block is: ${foundBlock.name}`);
    } else {
        alert('Try again!');
    }
});
