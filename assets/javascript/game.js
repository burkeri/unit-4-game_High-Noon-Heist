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
        })
    },

    // enters playable from prologue play button and resets variables
    enterPlayable: function () {
        $(".play-button").click(function () {
            // hide the prologue
            $(".prologue").css("display", "none");
            // reset all variables
            highNoonHeist.resetScore();
            highNoonHeist.initialiseGame();
            // fade in playable
            $(".playable").fadeIn();
            // allow user interactions
            highNoonHeist.stolenGems();
            highNoonHeist.checker();
            // plays sound
            sleepySherrif.loop = true;
            sleepySherrif.play();
        })
    },

    // -------------------------------------------------------------------------

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
        gemNum1 = Math.floor((Math.random() * 12) + 1);
        $(".gem1").val(gemNum1);
        console.log("gem1: " + gemNum1);

        gemNum2 = Math.floor((Math.random() * 12) + 1);
        $(".gem2").val(gemNum2);
        console.log("gem2: " + gemNum2);

        gemNum3 = Math.floor((Math.random() * 12) + 1);
        $(".gem3").val(gemNum3);
        console.log("gem3: " + gemNum3);

        gemNum4 = Math.floor((Math.random() * 12) + 1);
        $(".gem4").val(gemNum4); 
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
            caught.play();
            themeSong.pause();
            sleepySherrif.pause();
            $(".playable").css("display", "none");
            $(".endgame-loss").fadeIn();   
        }
        else if (stolen === ransomNum) {
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
        });
    },

    // goes back to main menu
    mainMenu: function () {
        $(".main").click(function () {
            $(".endgame-loss").css("display", "none");
            $(".main-menu").fadeIn();
        })
    },

    playTheme: function () {
        themeSong.loop = true;
        themeSong.play();
    }

}

highNoonHeist.playTheme();
highNoonHeist.enterPrologue();
highNoonHeist.enterPlayable();
highNoonHeist.tryAgain();
highNoonHeist.playAgain();
highNoonHeist.mainMenu();

});


// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// FUNCTIONS
// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// ++++++++++++++++++++++++++++++++++ Prologue

// ++++++++++++++++++++++++++++++++++ Gameplay



// // ends the game on loss
// function gameOver () {
    // if (stolen > ransomNum) {
    //     $(".playable").css("display", "none");
    //     $(".endgame-loss").fadeIn();
    // }   
// }

// // takes playerback to main menu

// // add gem values to amount stolen and plays clink, calls loss/win function
// function stolenGems () {

//     $(".gem2").click(function () {
//         soundEffect.play();        
//         stolen = gemNum2 + stolen;
//         $("#amount-stolen").text(stolen);
//         setTimeout(gameOver, 1000);
//     });
//     $(".gem3").click(function () {
//         soundEffect.play();        
//         stolen = gemNum3 + stolen;
//         $("#amount-stolen").text(stolen);
//         setTimeout(gameOver, 1000);
//     });
//     $(".gem4").click(function () {
//         soundEffect.play();        
//         stolen = gemNum4 + stolen;
//         $("#amount-stolen").text(stolen);
//         setTimeout(gameOver, 1000);
//     });  
// }

// // starts the game
// function intialiseGame () {

//     pickettRansom();
//     $("#ransom-number").text(ransomNum);
//     gemValue();
//     stolenGems();
//     $("#amount-stolen").text(stolen);
//     gameOver();
// }

// // resarts game after loss
// function tryAgain () {
//     $(".try-again").click(function (){
//         $(".endgame-loss").css("display", "none");
//         initialiseGame();
//         loss++
//         $(".loss-num").text(loss);
//     })
// }


// // +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// // GAME MECHANICS
// // +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// // DONT FORGET DOCUMENT.READY

// //displays the prologue when you press the start button
// enterPrologue();

// // starts main gameplay when prolouge "play" button is clicked
// $(".play-button").click(function () {
//     intialiseGame();
// })




// // restarts the game after a loss, adds 1 loss
// tryAgain();


// FIX INITIALISEGAME DO NOT MAKE IT DEPENDENT ON BUTTON CLICK 


// ToDo:
//  - document.ready the whole thing
// add music to main menu
// add back button in prologue
// add shout when sherrif wakes up - endgame-loss
// take off outline on menu start button






