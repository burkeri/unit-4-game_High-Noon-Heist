// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// VARIABLES
// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// global variables
let ransomNum = Math.floor(Math.random() * 120);
let gemNum1 = Math.floor(Math.random() * 12);
let gemNum2 = Math.floor(Math.random() * 12);
let gemNum3 = Math.floor(Math.random() * 12);
let gemNum4 = Math.floor(Math.random() * 12);
let stolen = 0;

// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// FUNCTIONS
// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// Gameplay

// picks random number between 19 and 120
function pickettRansom () {
    while (ransomNum < 19) {
        ransomNum = Math.floor(Math.random() * 120);
        if (ransomNum > 19) {
            $("#ransom-number").text(ransomNum);
            break;
        }
    }
}

// adds random value to gems
function gemValue () {

    while (gemNum1 === 0) {
        gemNum1 = Math.floor(Math.random() * 12);
        if (gemNum1 !== 0) {
            $("#gem1").val(gemNum1);
            break;
        }
    }

    while (gemNum2 === 0) {
        gemNum2 = Math.floor(Math.random() * 12);
        if (gemNum2 !== 0) {
            $("gem2").val(gemNum2);
            break;
        }
    }

    while (gemNum3 === 0) {
        gemNum3 = Math.floor(Math.random() * 12);
        if (gemNum3 !== 0) {
            $("gem3").val(gemNum3);
            break;
        }
    }

    while (gemNum4 === 0) {
        gemNum4 = Math.floor(Math.random() * 12);
        if (gemNum4 !== 0) {
            $("gem4").val(gemNum3);
            break;
        }
    }

}

// add gem values to amount stolen
function stolenGems () {

    $(".gem1").click(function () {
        stolen = gemNum1 + stolen;
        $("#amount-stolen").text(stolen);
    });

    $(".gem2").click(function () {
        stolen = gemNum2 + stolen;
        $("#amount-stolen").text(stolen);
    });

    $(".gem3").click(function () {
        stolen = gemNum3 + stolen;
        $("#amount-stolen").text(stolen);
    });

    $(".gem4").click(function () {
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






