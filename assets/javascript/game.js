// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// VARIABLES
// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// global variables
let ransomNum = Math.floor(Math.random() * 120);
let gemNum = Math.floor(Math.random() * 12);


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

    while (gemNum === 0) {
        gemNum = Math.floor(Math.random() * 12);
        if (gemNum !== 0) {
            $("#gem1").val(gemNum);
            console.log("gem1 value is " + gemNum);
            break;
        }
    }

    do {
        gemNum = Math.floor(Math.random() * 12);
    }
    while (gemNum === 0) {
        gemNum = Math.floor(Math.random() * 12);
        if (gemNum !== 0) {
            $("#gem2").val(gemNum);
            console.log("gem2 value is " + gemNum);
            break;
        }
    }

    do {
        gemNum = Math.floor(Math.random() * 12);
    }
    while (gemNum === 0) {
        gemNum = Math.floor(Math.random() * 12);
        if (gemNum !== 0) {
            $("#gem3").val(gemNum);
            console.log("gem3 value is " + gemNum);
            break;
        }
    }

    do {
        gemNum = Math.floor(Math.random() * 12);
    }
    while (gemNum === 0) {
        gemNum = Math.floor(Math.random() * 12);
        if (gemNum !== 0) {
            $("#gem4").val(gemNum);
            console.log("gem4 value is " + gemNum);
            break;
        }
    }

}

// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// GAME MECHANICS
// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// DONT FORGET DOCUMENT.READY


pickettRansom();

$("#ransom-number").text(ransomNum);

gemValue();



