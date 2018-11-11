// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// VARIABLES
// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// global variables
let ransomNum = Math.floor(Math.random() * 120);


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

// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// GAME MECHANICS
// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

pickettRansom();
$("#ransom-number").text(ransomNum);

