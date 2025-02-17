// mobGame.js
const mobs = [
    { name: "Zombie", version: "Alpha 1.0", hp: 20, height: 1.95, world: "Overworld", behavior: "Hostile", boss: "No" },
    { name: "Skeleton", version: "Beta 1.0", hp: 20, height: 1.98, world: "Overworld", behavior: "Hostile", boss: "No" },
    // other mobs
];

document.getElementById('guessButton').addEventListener('click', () => {
    let userGuess = document.getElementById('guessInput').value;
    let foundMob = mobs.find(mob => mob.name.toLowerCase() === userGuess.toLowerCase());
    if (foundMob) {
        alert(`The correct mob is: ${foundMob.name}`);
    } else {
        alert('Try again!');
    }
});
