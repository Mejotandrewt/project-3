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


/* Code for name selector */

let btnName = document.querySelector('button');
let result4 = document.querySelector('h1.namelist');


let names = ['Joseph', "JoJo", "Adam", "Massimo", "Strovious", "Lance", "Bumblefoot", "Kinshin", "Ferra", "Toby"];


function getRandomNumber(min, max){
    let step1 = max - min + 1;
    let step2 = Math.random() * step1;
    let result = Math.floor(step2) + min;

    return result;

}


btnBackground.addEventListener ('click', () => {
    let index = getRandomNumber(0, names.length-1);
    result4.innerText = names[index];
  
});


/* Monster picture display */

function display_monster_image() 
{
     var theImages = [{
        src: "https://media.dnd.wizards.com/styles/mosaic_thumbnail/public/mosaic/grid-thumb17.jpg",
        width: "250",
        height: "250"
    }, {
        src: "https://i.pinimg.com/originals/41/c0/e1/41c0e190edbed5078f9547941ccd9587.png",
        width: "250",
        height: "250"
    }, {
        src: "https://www.tribality.com/wp-content/uploads/2014/10/114849_CN_GL.jpg",
        width: "250",
        height: "250"
    }, {
        src: "https://static.wikia.nocookie.net/forgottenrealms/images/5/59/Mimic-5e.jpg/revision/latest?cb=20200410111521",
        width: "250",
        height: "250"
    }, {
        src: "https://i.pinimg.com/originals/cd/69/81/cd6981a72d2b8f515dc7acd2e68bafca.jpg",
        width: "250",
        height: "250"
    }, {
        src: "https://www.aidedd.org/dnd/images/kenku.jpg",
        width: "250",
        height: "250"
    }, {
        src: "https://media-waterdeep.cursecdn.com/avatars/thumbnails/0/22/1000/1000/636238956325913912.jpeg",
        width: "250",
        height: "250"

}];
    
    var preBuffer = [];
    for (var i = 0, j = theImages.length; i < j; i++) {
        preBuffer[i] = new Image();
        preBuffer[i].src = theImages[i].src;
        preBuffer[i].width = theImages[i].width;
        preBuffer[i].height = theImages[i].height;
        preBuffer[i].className = "monsterlist"
    }

    
// create random image number
  function getRandomInt(min,max) 
    {
      //  return Math.floor(Math.random() * (max - min + 1)) + min;
    
imn = Math.floor(Math.random() * (max - min + 1)) + min;
    return preBuffer[imn];
    }  

// 0 is first image,   preBuffer.length - 1) is  last image
  
var newImage = getRandomInt(0, preBuffer.length - 1);
 
  // 0 is first image,   preBuffer.length - 1) is  last image
  var newImage = getRandomInt(0, preBuffer.length - 1);
  
  
 

  // remove the previous images
  var monster = document.querySelector(".monster");
  monster.src = newImage.src;


  function updateMonsterImgScr(src) {
    /* Get the cat image element */
    let img = document.querySelector("newImage.src");
    /* Update its src*/
    img.src = src;
  }

  // display the image  
document.body.appendChild(newImage);
}

