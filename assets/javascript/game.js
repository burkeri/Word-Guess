//CONTROLS

// way to record user key strokes
// way to check if those key strokes are correct
// a set number of guesses
// record of wins and losses


// ====================== VARIABLES ====================== //

var info = {
    name: ["hello dolly",
        "the book of mormon",
        "next to normal",
        "dear evan hansen",
        "ragtime",
        "the music man",
        "sweeney todd the demon barber of fleet street",
        "singin in the rain",
        "hamilton",
        "anything goes"],

    bWay: ["1964",
        "2011",
        "2009",
        "2016",
        "1998",
        "1957",
        "1979",
        "1985",
        "2015",
        "1934",],

    opNum: ["Call on Dolly",
        "Hello",
        "Just Another Day",
        "Anybody Have a Map?",
        "Ragtime",
        "Rock Island",
        "The Ballad of Sweeney Todd",
        "Fit as a Fiddle",
        "Alexander Hamilton",
        "I Get a Kick Out of You",]
}

// randomly selects a musical
var musical = info.name[Math.floor(Math.random() * 10)];
var chara = musical.length;

// hook into word div
var currentWord = document.getElementById("current-word");
var letterSlots = document.getElementById("letter-slots")


// ====================== GAME MECHANICS ====================== //

// creates slots for words
for (i = 0; i < musical.length; i++) {

    var span = document.createElement("span");

    if (musical.charAt(i) !== " ") {
        span.textContent = "_";
    }
    else {
        span.textContent = " ";
    }

    letterSlots.appendChild(span);

}

// creates word then hides it
for (i = 0; i < musical.length; i++) {

    var span = document.createElement("span");

    span.textContent = musical.charAt(i);

    var answer = currentWord.appendChild(span);

    answer.style.visibility = "hidden";
    console.log("hidden");


}


// GOAL: if the userGuess is equal the same a a character in a index then reveal the character

    // function runs when user presses key
    document.onkeyup = function (event) {

        //determines which key was pressed and converts to lower case
        var userGuess = event.key.toLocaleLowerCase();

        if ( (userGuess === musical.charAt()) ) {

            console.log("confirm");

        }

    }




