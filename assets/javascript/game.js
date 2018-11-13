// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// VARIABLES
// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// global variables
let ransomNum = Math.floor((Math.random() * 120) + 19);
let gemNum1 = Math.floor((Math.random() * 12) + 1);
let gemNum2 = Math.floor((Math.random() * 12) + 1);
let gemNum3 = Math.floor((Math.random() * 12) + 1);
let gemNum4 = Math.floor((Math.random() * 12) + 1);
let stolen = 0;
var soundEffect = document.getElementById("gemClink");

// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// FUNCTIONS
// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// Prologue

function enterPrologue () {
    $(".start").click(function () {
        $(".main-menu").css("display", "none");
        $(".prologue").fadeIn();
    })
}

// Gameplay

// picks random number between 19 and 120
function pickettRansom () {
    $("#ransom-number").text(ransomNum);
}

// adds random value to gems
function gemValue () {

    $("#gem1").val(gemNum1);
    $("gem2").val(gemNum2);
    $("gem3").val(gemNum3);
    $("gem4").val(gemNum4);

}

// ends the game on loss
function gameOver () {

    if (stolen > ransomNum) {
        $(".playable").css("display", "none");
        $(".endgame-loss").fadeIn();
    }
    
}

// add gem values to amount stolen and plays clink
function stolenGems () {

    $(".gem1").click(function () {
        soundEffect.play();
        stolen = gemNum1 + stolen;
        $("#amount-stolen").text(stolen);
        setTimeout(gameOver, 1000);
    });

    $(".gem2").click(function () {
        soundEffect.play();        
        stolen = gemNum2 + stolen;
        $("#amount-stolen").text(stolen);
        setTimeout(gameOver, 1000);
    });

    $(".gem3").click(function () {
        soundEffect.play();        
        stolen = gemNum3 + stolen;
        $("#amount-stolen").text(stolen);
        setTimeout(gameOver, 1000);
    });

    $(".gem4").click(function () {
        soundEffect.play();        
        stolen = gemNum4 + stolen;
        $("#amount-stolen").text(stolen);
        setTimeout(gameOver, 1000);
    });  
}

// starts the game
function intialiseGame () {

    // when play button is clicked...
    $(".play-button").click(function () {
       
        // hide the prologue
        $(".prologue").css("display", "none");
        // display main game interface
        $(".playable").fadeIn();
        // sets random number for ransom
        pickettRansom();
        $("#ransom-number").text(ransomNum);
        // sets random number for gem value
        gemValue();
        // sets gem onclick
        stolenGems();
        // set amount stolen to 0
        $("#amount-stolen").text(stolen);
        gameOver();
    })
}


// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// GAME MECHANICS
// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// DONT FORGET DOCUMENT.READY

//displays the prologue when you press the start button
enterPrologue();

// starts main gameplay when prolouge "play" button is clicked
intialiseGame();

// screened displayed when player loses
// gameOver();
    console.log(ransomNum);
    console.log(stolen);



// ToDo:
//  - create end game css
//      = loss: so long partner, jail, try again, main menu, loss++
//      = win: good job cowboy, your wife, play again, main menu, win++
//  - document.ready the whole thing
// add music to main menu
// add back button in prologue
// add shout when sherrif wakes up - endgame-loss






