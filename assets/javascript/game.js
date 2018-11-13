// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// VARIABLES
// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// sounds
gemTake = document.getElementById("gemClink");

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
    enterPrologue : function () {
        $(".start").click(function () {
            $(".main-menu").css("display", "none");
            $(".prologue").fadeIn();
        })
    },

    // enters playable from prologue play button and resets variables
    enterPlayable : function () {
        $(".play-button").click(function () {
            // hide the prologue, fade in playable
            $(".prologue").css("display", "none");
            $(".playable").fadeIn();
            // reset score (win/loss) to 0
            wins = 0;
            $(".wins-num").text(wins);
            loss = 0;
            $(".loss-num").text(loss);
            // pick a new ransom
            ransomNum = Math.floor((Math.random() * 120) + 19);
            $("#ransom-number").text(ransomNum);
            // assign gem values
            $(".gem1").val(gemNum1);
            $(".gem2").val(gemNum2);
            $(".gem3").val(gemNum3);
            $(".gem4").val(gemNum4);
            // set amount stolen to 0
            stolen = 0;
            $("#amount-stolen").text(stolen);
        })
    },

    // sets onclick function for gems, adds gem value to amount stolen
    stolenGems : function () {
        // when gem is clicked...
        $(".gem1").click(function () {
            // play sound effect
            gemTake.play();
            // add the gem value to the amount stolen and display the new value
            stolen = gemNum1 + stolen;
            $("#amount-stolen").text(stolen);
            // run game over if the player goes over the ransom amount
        });
        $(".gem2").click(function () {
            // play sound effect
            gemTake.play();
            // add the gem value to the amount stolen and display the new value
            stolen = gemNum2 + stolen;
            $("#amount-stolen").text(stolen);
            // run game over if the player goes over the ransom amount
        });
        $(".gem3").click(function () {
            // play sound effect
            gemTake.play();
            // add the gem value to the amount stolen and display the new value
            stolen = gemNum3 + stolen;
            $("#amount-stolen").text(stolen);
            // run game over if the player goes over the ransom amount
        });
        $(".gem4").click(function () {
            // play sound effect
            gemTake.play();
            // add the gem value to the amount stolen and display the new value
            stolen = gemNum4 + stolen;
            $("#amount-stolen").text(stolen);
            // run game over if the player goes over the ransom amount
        });
    }

}

highNoonHeist.enterPrologue();
highNoonHeist.enterPlayable();
highNoonHeist.stolenGems();


// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// FUNCTIONS
// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// ++++++++++++++++++++++++++++++++++ Prologue

// ++++++++++++++++++++++++++++++++++ Gameplay



// // ends the game on loss
// function gameOver () {
//     if (stolen > ransomNum) {
//         $(".playable").css("display", "none");
//         $(".endgame-loss").fadeIn();
//     }   
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
//  - create end game css
//      = loss: so long partner, jail, try again, main menu, loss++
//      = win: good job cowboy, your wife, play again, main menu, win++
//  - document.ready the whole thing
// add music to main menu
// add back button in prologue
// add shout when sherrif wakes up - endgame-loss
// take off outline on menu start button






