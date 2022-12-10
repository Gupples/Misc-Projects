const table = document.getElementById("table")
const possibilities = {
    Races: ["Aarakocra", "Aasimar", "Bugbear", "Centaur",
        "Changeling", "Dragonborn", "Dwarf", "Elf", "Firbolg",
        "Genasi", "Gnome", "Goblin", "Goliath", "Half-Elf", 
        "Half-Orc", "Halfling", "Hobgoblin", "Human", "Kenku", 
        "Kobold", "Lizardfolk", "Loxodon", "Minotaur", "Orc", 
        "Tabaxi", "Tiefling", "Tortle", "Triton", "Warforged", 
        "Yuan-Ti Pureblood"],
    Classes: ["Artificier", "Blood Hunter", "Barbarian", 
        "Bard", "Cleric", "Druid", "Fighter", "Monk", 
        "Paladin", "Ranger", "Rogue", "Sorcerer", "Warlock",
        "Wizard"],
    Backgrounds: ["Acolyte", "Anthropologist", "Athlete",
        "Charlatan", "Cloistered Scholar", "Courtier",
        "Criminal/Spy", "Entertainer", "Far Traveler",
        "Folk Hero", "Gladiator", "Hermit", "Inheritor",
        "Knight", "Noble", "Outlander", "Pirate", "Sage",
        "Sailor", "Soldier", "Urchin"]
}

function randomize(max) {
    return Math.floor(Math.random() * max);
}

// simulate rolling a 20-sided die
function rollDie() {
    return randomize(20) + 1;
}


// set of 6 rolls, must total at least 70.
function rollStats() {
    let rolls = [];
    let rollTotal = 0;
    while (rollTotal < 70) {
        // reset rolls
        rolls = [];
        rollTotal = 0;

        let roll = 0;
        for (let i = 0; i < 6; i++) {
            roll = rollDie();
            rolls.push(roll);
            rollTotal += roll;
        }
        
    }
    // for extra randomness, return the array randomized further.
    rolls.sort(() => Math.random() - 0.5);
    return rolls;
}

function makeChar() {
    const character = {
    myName: document.getElementById("enterName").value,
    myGender: document.getElementById("enterGender").value,
    myRace: possibilities.Races[randomize(possibilities.Races.length)],
    myClass: possibilities.Classes[randomize(possibilities.Classes.length)],
    myBackground: possibilities.Backgrounds[randomize(possibilities.Backgrounds.length)],
    stats: rollStats()
    }
    return character;
}

function generate() {
    const myChar = makeChar()
    const myLine = `<tr>
                        <td>${myChar.myName}</td>
                        <td>${myChar.myGender}</td>
                        <td>${myChar.myRace}</td>
                        <td>${myChar.myClass}</td>
                        <td>${myChar.myBackground}</td>
                        <td>${myChar.stats[0]}</td>
                        <td>${myChar.stats[1]}</td>
                        <td>${myChar.stats[2]}</td>
                        <td>${myChar.stats[3]}</td>
                        <td>${myChar.stats[4]}</td>
                        <td>${myChar.stats[5]}</td>
                    </tr>`;
    table.innerHTML += myLine;
}

// clear the table
function clear() {
    table.innerHTML = "";
}

document.getElementById("generate").addEventListener("click", generate);
document.getElementById("clear").addEventListener("click", clear);
