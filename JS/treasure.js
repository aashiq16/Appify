/* =========================================
   TREASURE GAME
========================================= */


const game = {

    treasureFound: false,

    attempts: 0,

    treasurePosition: {
        x: 50,
        y: 70
    }

};


/* =========================================
   INITIALIZE
========================================= */

function initializeTreasureGame() {

    createEnvironment();

    placeTreasure();

    setupClickDetection();

}


/* =========================================
   ENVIRONMENT
========================================= */

function createEnvironment() {

    // Create palm trees
    // Create rocks
    // Create barrels
    // Create crates
    // Create shipwreck
    // Create pirate signs
    // Create map
    // Create shovel
    // Create plants

}


/* =========================================
   TREASURE
========================================= */

function placeTreasure() {

    /*
       Later we'll randomly choose
       one of several hiding locations.
    */

}


/* =========================================
   CLICK DETECTION
========================================= */

function setupClickDetection() {

    document
        .getElementById("treasure-page")
        .addEventListener("click", handleClick);

}


function handleClick(event) {

    if (game.treasureFound) {
        return;
    }


    /*
       Determine where the user clicked.
    */


    /*
       Check whether the click
       is close to the hidden treasure.
    */


    /*
       If wrong:
       show clue / interaction.
    */


    /*
       If correct:
       reveal treasure.
    */

}


/* =========================================
   WRONG CLICK
========================================= */

function wrongClick(x, y) {

    // Create subtle click effect

    // Show "Not here..."

    // Add clue


}


/* =========================================
   TREASURE FOUND
========================================= */

function revealTreasure() {

    game.treasureFound = true;


    // Reveal chest

    // Animate chest opening

    // Create golden glow

    // Create sparkles

    // Show success message

}


/* =========================================
   START
========================================= */

initializeTreasureGame();