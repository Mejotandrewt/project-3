let btnRace = document.querySelector('button');
let results = document.querySelector('h1');


let creature = ['Human', "Elf", "Dwarf", "Halfling", "Dragonborn", "Half-Elf", "Gnome"];

function getRandomNumber(min, max) {
    let step1 = max - min + 1;
    let step2 = Math.random() * step1;
    let result = Math.floor(step2) + min;

    return result;

}

btnRace.addEventListener('click', () => {
    let index = getRandomNumber(0, creature.length-1)
    result.innerText =creature[index];
});