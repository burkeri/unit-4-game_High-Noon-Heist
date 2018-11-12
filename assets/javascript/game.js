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
var sound = document.getElementById("gemClink");

// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// FUNCTIONS
// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// Gameplay

// picks random number between 19 and 120
function pickettRansom () {
    $("#ransom-number").text(ransomNum);
}

// adds random value to gems
function gemValue () {

    $("#gem1").val(gemNum1);
    console.log("gem1: " + gemNum1);

    $("gem2").val(gemNum2);
    console.log("gem2: " + gemNum2);


    $("gem3").val(gemNum3);
    console.log("gem3: " + gemNum3);

    $("gem4").val(gemNum4);
    console.log("gem4: " + gemNum4);

}

// add gem values to amount stolen
function stolenGems () {

    $(".gem1").click(function () {
        sound.play();
        stolen = gemNum1 + stolen;
        $("#amount-stolen").text(stolen);
    });

    $(".gem2").click(function () {
        sound.play();        
        stolen = gemNum2 + stolen;
        $("#amount-stolen").text(stolen);
    });

    $(".gem3").click(function () {
        sound.play();        
        stolen = gemNum3 + stolen;
        $("#amount-stolen").text(stolen);
    });

    $(".gem4").click(function () {
        sound.play();        
        stolen = gemNum4 + stolen;
        $("#amount-stolen").text(stolen);
    });
}

// starts the game
function intialiseGame () {
    // sets random number for ransom
    pickettRansom();
    $("#ransom-number").text(ransomNum);
    // sets random number for gem value
    gemValue();
    // sets gem onclick
    stolenGems();
    // set amount stolen to 0
    $("#amount-stolen").text(stolen);
}

// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// GAME MECHANICS
// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// DONT FORGET DOCUMENT.READY

intialiseGame();

// ToDo:
//  - add gem onclick sound effects
//  - create main menu css (title, start button, music)
//  - create prolouge css (scrolling type, skip button, start button, wife img animation)
//  - create end game css
//      = loss: so long partner, jail, try again, main menu, loss++
//      = win: good job cowboy, your wife, play again, main menu, win++
//  - document.ready the whole thing






