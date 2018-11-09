//CONTROLS
// key stroke to start the game
// way to record user key strokes
// way to check if those key strokes are correct
// a set number of guesses
// record of wins and losses




// Hints
var answers = {
    name : ["Hello Dolly", 
            "The Book of Mormon", 
            "Next to Normal", 
            "Dear Evan Hansen", 
            "Ragtime", 
            "The Music Man", 
            "Sweeney Todd The Demon Barber of Fleet Street", 
            "Singin in the Rain", 
            "Hamilton", 
            "Anything Goes"],

    bWay : ["1964",
            "2011",
            "2009",
            "2016",
            "1998",
            "1957",
            "1979",
            "1985",
            "2015",
            "1934",],

    opNum : ["Call on Dolly",
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
var current = answers.name[Math.floor(Math.random()*10)];


// hook into current word div
var currentWord = document.getElementById("current-word");



// Game Mechanics

// creates slots for words
for (i=0; i<current.length; i++) {

    var span = document.createElement("span");
    span.textContent = "-";
    currentWord.appendChild(span);

}




