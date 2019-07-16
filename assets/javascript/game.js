// The random number shown at the start of the game should be between 19 - 120.
// Each crystal should have a random hidden value between 1 - 12.


var randNumber = Math.round(Math.random() * (120 - 19)) + 19;    
var wins = 0;
var losses = 0;
var current = 0;

$("#win_tag").text("Wins: " + wins);
$("#lose_tag").text("Losses: " + losses);

function initializeCrystalGame() {
    randNumber = Math.round(Math.random() * (120 - 19)) + 19;    
    
    
    current = 0;
    assigningCrystalValues();
    $("#random_tag").text("Random number: " + randNumber);
    $("#current_tag").text("Current Number: " + 0);
}

// Assigning Each Crystal a number between 1- 12
function assigningCrystalValues() {
    for(var i = 1 ; i < 5; i ++) {
        var tempStr = "#crystal_";
        tempStr += i;
        var crystalRandom = Math.round(Math.random() * (12 - 1)) + 1;    
        $(tempStr).attr("value", crystalRandom);
        console.log(tempStr + ": " + $(tempStr).val());
    }
}

function gameChecker() {
    // if game is done
    if(current > randNumber) {
        alert("game end! Restart the game.");
        initializeCrystalGame();
        losses++;
        console.log("Losses: " + losses);
        $("#lose_tag").text("Losses: " + losses);

    } else if(current === randNumber) {
        alert("Win!!")
        initializeCrystalGame();
        wins++;
        console.log("Wins: " + wins);
        $("#win_tag").text("Wins: " + wins);

    }
}

initializeCrystalGame();

$(document).ready(function () {
    
    $("#crystal_1").click(function() {
        current += parseInt($("#crystal_1").val());
        console.log(current);
        $("#current_tag").text("Current Number: " + current);
        gameChecker();
    })
    $("#crystal_2").click(function() {
        current += parseInt($("#crystal_2").val());
        console.log(current);
        $("#current_tag").text("Current Number: " + current);
        gameChecker();
    })
    $("#crystal_3").click(function() {
        current += parseInt($("#crystal_3").val());
        console.log(current);
        $("#current_tag").text("Current Number: " + current);
        gameChecker();
    })
    $("#crystal_4").click(function() {
        current += parseInt($("#crystal_4").val());
        console.log(current);
        $("#current_tag").text("Current Number: " + current);
        gameChecker();
    })
});