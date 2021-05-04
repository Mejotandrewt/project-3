/* code for race slector*/

let btnRace = document.querySelector('button');
let result = document.querySelector('h1.racelist');


let creaturelist = ['Human', "Elf", "Dwarf", "Halfling", "Dragonborn", "Half-Elf", "Gnome"];


function getRandomNumber(min, max){
    let step1 = max - min + 1;
    let step2 = Math.random() * step1;
    let result = Math.floor(step2) + min;

    return result;

}


btnRace.addEventListener ('click', () => {
    let index = getRandomNumber(0, creaturelist.length-1);
    result.innerText = creaturelist[index];
  
});

/* Code for class selector */

let btnClass = document.querySelector('button');
let result2 = document.querySelector('h1.classlist');


let playerlist = ['Fighter', "Barbairn", "Bard", "Cleric", "Druid", "Monk", "Paladin", "Ranger", "Rouge", "Wizard"];


function getRandomNumber(min, max){
    let step1 = max - min + 1;
    let step2 = Math.random() * step1;
    let result = Math.floor(step2) + min;

    return result;

}


btnClass.addEventListener ('click', () => {
    let index = getRandomNumber(0, playerlist.length-1);
    result2.innerText = playerlist[index];
  
});


/* Code for background selector */

let btnBackground = document.querySelector('button');
let result3 = document.querySelector('h1.backgroundlist');


let pastlist = ['Farmer', "City Watch", "Military", "Criminal", "Entertainer", "Fisher", "Travler", "Hermit", "Noble", "Outlander"];


function getRandomNumber(min, max){
    let step1 = max - min + 1;
    let step2 = Math.random() * step1;
    let result = Math.floor(step2) + min;

    return result;

}


btnBackground.addEventListener ('click', () => {
    let index = getRandomNumber(0, pastlist.length-1);
    result3.innerText = pastlist[index];
  
});