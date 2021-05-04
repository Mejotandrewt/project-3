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

function display_random_image() 
{
     var theImages = [{
        src: "",
        width: "240",
        height: "160"
    }, {
        src: "http://farm1.staticflickr.com/33/45336904_1aef569b30_n.jpg",
        width: "320",
        height: "195"
    }, {
        src: "http://farm6.staticflickr.com/5211/5384592886_80a512e2c9.jpg",
        width: "500",
        height: "343"
    }];
    
    var preBuffer = [];
    for (var i = 0, j = theImages.length; i < j; i++) {
        preBuffer[i] = new Image();
        preBuffer[i].src = theImages[i].src;
        preBuffer[i].width = theImages[i].width;
        preBuffer[i].height = theImages[i].height;
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
 
// remove the previous images
var images = document.getElementsByTagName('img');
var l = images.length;
for (var p = 0; p < l; p++) {
    images[0].parentNode.removeChild(images[0]);
}
// display the image  
document.body.appendChild(newImage);
}
