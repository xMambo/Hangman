// Create an array of words
const word = [
    "espresso", 
    "macchiato", 
    "cortado", 
    "cappuccino", 
    "latte", 
    "breve", 
    "mocha", 
    "americano", 
    "au lait",
];

// Choose word randomly
let randNum = Math.floor(Math.random() * word.length);
let rightWord = [];
let wrongWord = [];
let chosenWord = word[randNum];
let underScore = [];

// DOM manipulation
let docUnderScore = document.getElementsByClassName("underscore");
let docRightGuess = document.getElementsByClassName("rightGuess");
let docWrongGuess = document.getElementsByClassName("wrongGuess");

//testing
console.log(chosenWord);

// Create underscores based on the length of the word (first time using arrow function!)
let genUnderscore = () => {
    for(let i = 0; i < chosenWord.length; i++) {
            underScore.push("_");
    }
    return underScore;
}

//testing
console.log(genUnderscore());

// Get users guess

// Detect when and what keys are pressed and convert keycode into a letter
document.addEventListener("keypress", (event) => {
    let keyword = String.fromCharCode(event.keyCode);

// If users guess is right
    if(chosenWord.indexOf(keyword) > -1) {

// Add to right words array    
        rightWord.push(keyword);
        

// Replace underscore with right letter
            underScore[chosenWord.indexOf(keyword)] = keyword;
            docUnderScore[0].innerHTML = underScore.join(" ");
            docRightGuess[0].innerHTML = rightWord;

// Checks to see if user word matches guesses
            if(underScore.join(" ") == chosenWord) {
                alert("You Win!");
            }
        }
// If users guess is wrong
// add to wrong words array
            else {
                wrongWord.push(keyword);
                docwrongGuess[0].innerHTML = wrongWord;
            }

            
});

docUnderScore[0].innerHTML = genUnderscore().join(" ");

