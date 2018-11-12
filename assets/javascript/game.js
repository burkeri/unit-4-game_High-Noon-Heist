// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// VARIABLES
// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// global variables
let ransomNum = Math.floor(Math.random() * 120);
let gemNum1 = Math.floor(Math.random() * 12);
let gemNum2 = Math.floor(Math.random() * 12);
let gemNum3 = Math.floor(Math.random() * 12);
let gemNum4 = Math.floor(Math.random() * 12);


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
            console.log("gem1 value is " + gemNum1);
            break;
        }
    }

    while (gemNum2 === 0) {
        gemNum2 = Math.floor(Math.random() * 12);
        if (gemNum2 !== 0) {
            $("gem2").val(gemNum2);
            console.log("gem2 value is " + gemNum2);
            break;
        }
    }

    while (gemNum3 === 0) {
        gemNum3 = Math.floor(Math.random() * 12);
        if (gemNum3 !== 0) {
            $("gem3").val(gemNum3);
            console.log("gem3 value is " + gemNum3);
            break;
        }
    }

    while (gemNum4 === 0) {
        gemNum4 = Math.floor(Math.random() * 12);
        if (gemNum4 !== 0) {
            $("gem4").val(gemNum3);
            console.log("gem4 value is " + gemNum4);
            break;
        }
    }

}

// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// GAME MECHANICS
// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// DONT FORGET DOCUMENT.READY

// sets random number for ransom
pickettRansom();
$("#ransom-number").text(ransomNum);

console.log("gem1 og value: " + gemNum1);
console.log("gem2 og value: " + gemNum2);
console.log("gem3 og value: " + gemNum3);
console.log("gem4 og value: " + gemNum4);

// sets random number for gem value
gemValue();

