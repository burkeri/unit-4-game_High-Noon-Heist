$( document ).ready(function() {  

// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// VARIABLES
// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// sounds
var gemTake = document.getElementById("gemClink");
var themeSong = new Audio("assets/sounds/theme.mp3");
var sleepySherrif = new Audio("assets/sounds/snore.wav");
var caught = new Audio("assets/sounds/hey.wav");

// ransom 
let ransomNum = Math.floor((Math.random() * 120) + 19);

// amount stolen
let stolen = 0;

// gem values
let gemNum1 = Math.floor((Math.random() * 12) + 1);
let gemNum2 = Math.floor((Math.random() * 12) + 1);
let gemNum3 = Math.floor((Math.random() * 12) + 1);
let gemNum4 = Math.floor((Math.random() * 12) + 1);

// score
let win = 0;
let loss = 0;

// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// OBJECT
// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

var highNoonHeist = {

    // opens the prolouge from main menu start button
    enterPrologue: function () {
        // when start button is pressed...
        $(".start").click(function () {
            // hide the main menu
            $(".main-menu").css("display", "none");
            // fade in the prologue
            $(".prologue").fadeIn();
            console.log("Start Button Clicked");
        })
    },

    // enters playable from prologue play button and resets variables
    enterPlayable: function () {
        $(".play-button").click(function () {
            // hide the prologue
            $(".prologue").css("display", "none");
            console.log("Play Button Clicked");
            // reset all variables
            highNoonHeist.resetScore();
            highNoonHeist.initialiseGame();
            // fade in playable
            $(".playable").fadeIn();
            // plays sound
            highNoonHeist.playSnore();
        })
    },

    // resets score (win/loss) to 0
    resetScore: function () {
        let win = 0;
        $(".wins-num").text(win);
        let loss = 0;
        $(".loss-num").text(loss);
    },
    
    // resets all variables except score
    initialiseGame: function () {            
        // pick a new ransom
        ransomNum = Math.floor((Math.random() * 120) + 19);
        $("#ransom-number").text(ransomNum);
        // assign new gem values
        // gem1
        gemNum1 = 0;
        gemNum1 = Math.floor((Math.random() * 12) + 1);
        $(".gem1").val(gemNum1);
        // gem2
        gemNum2 = 0;
        gemNum2 = Math.floor((Math.random() * 12) + 1);
        $(".gem2").val(gemNum2);
        // gem3
        gemNum3 = 0;
        gemNum3 = Math.floor((Math.random() * 12) + 1);
        $(".gem3").val(gemNum3);
        // gem4
        gemNum4 = 0;
        gemNum4 = Math.floor((Math.random() * 12) + 1);
        $(".gem4").val(gemNum4);
        console.log("gem1: " + gemNum1);
        console.log("gem2: " + gemNum2);
        console.log("gem3: " + gemNum3);
        console.log("gem4: " + gemNum4);
        // set amount stolen to 0
        stolen = 0;
        $("#amount-stolen").text(stolen);
    },

    // sets onclick function for gems, adds gem value to amount stolen, ends game for win or loss
    stolenGems: function () {
        // when gem is clicked...
        $(".gem1").click(function () {
            // play sound effect
            gemTake.play();
            // add the gem value to the amount stolen and display the new value
            stolen = gemNum1 + stolen;
            $("#amount-stolen").text(stolen);
        });
        $(".gem2").click(function () {
            gemTake.play();
            stolen = gemNum2 + stolen;
            console.log("gem2: " + gemNum2);
            $("#amount-stolen").text(stolen);
        });
        $(".gem3").click(function () {
            gemTake.play();
            stolen = gemNum3 + stolen;
            $("#amount-stolen").text(stolen);
        });
        $(".gem4").click(function () {
            gemTake.play();
            stolen = gemNum4 + stolen;
            $("#amount-stolen").text(stolen);

        });
    },

    // checks for game over conditions
    checker: function () {
        $(".graphic").click(function () {
            setTimeout(highNoonHeist.endGame, 1000);
        });
    },

    // displays game over screen
    endGame: function () {
        if (stolen > ransomNum) {
            themeSong.pause();
            sleepySherrif.pause();
            caught.play();
            $(".playable").css("display", "none");
            $(".endgame-loss").fadeIn();  
        }
        else if (stolen === ransomNum) {
            themeSong.pause();
            sleepySherrif.pause();
            $(".playable").css("display", "none");
            $(".endgame-win").fadeIn();   
        }
    },

    // augments losses and starts the game again
    tryAgain: function () {
        // when try again button is clicked...
        $(".try-again").click(function () {
            $(".endgame-loss").css("display", "none");
            $(".playable").fadeIn();
            loss++;
            $(".loss-num").text(loss);
            highNoonHeist.initialiseGame();
            highNoonHeist.playTheme();
            highNoonHeist.playSnore();
            console.log("Lost");
        });
    },

    // augments wins and starts the game again
    playAgain: function () {
        // when try again button is clicked...
        $(".play-again").click(function () {
            $(".endgame-win").css("display", "none");
            $(".playable").fadeIn();
            win++;
            $(".wins-num").text(win);
            highNoonHeist.initialiseGame();
            highNoonHeist.playTheme();
            highNoonHeist.playSnore();
            console.log("Won");
        });
    },

    // goes back to main menu
    mainMenu: function () {
        $(".main").click(function () {
            $(".endgame-loss").css("display", "none");
            $(".endgame-win").css("display","none");
            $(".main-menu").fadeIn();
            sleepySherrif.pause();
            highNoonHeist.playTheme();
            console.log("Main Menu Clicked");
        })
    },

    playTheme: function () {
        themeSong.loop = true;
        themeSong.play();
    },

    playSnore: function () {
        sleepySherrif.loop = true;
        sleepySherrif.play();
    }

}

// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// FUNCTION CALLS
// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// plays theme music
highNoonHeist.playTheme();

// shows prologue/instructions
highNoonHeist.enterPrologue();

// enters game's main interface
highNoonHeist.enterPlayable();

// allows user interactions
highNoonHeist.stolenGems();
highNoonHeist.checker();

// restarts the game after win/loss
highNoonHeist.tryAgain();
highNoonHeist.playAgain();

// hard restart of game
highNoonHeist.mainMenu();

});






