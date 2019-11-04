// My global variables.
let playerName;
let points = "0";
let input;
let inputGame;
let counter2 = 2;
let randomNumber;
let counter6 = 6;
let activRoom1 = "rum 1";
let activRoom2 = "rum 2";
let activRoom3 = "rum 3";
let enter = 0;

// Creating random number for rum 2.
randomNumber = Math.floor(Math.random() * 100) + 1;



// My print const shortcuts
const uppgiften = document.querySelector(".uppgift");
const valen = document.querySelector(".val");
const printInput = document.querySelector(".getInput");
const inputId = document.querySelector("#getInput");
const submitButton = document.querySelector(".getInput button");
const printInputGame = document.querySelector(".getInputGame");
const subminInputButtonGame = document.querySelector(".getInputGame button");
const nameInput = document.getElementById("nameInput");


/**
 * Function that lets enter button work the same way as a clicked button.
 * For name input.
 * @param {keybordEvent} event Built in javascript event
 */
nameInput.addEventListener("keyup", function (event) {
    if (event.keyCode === 13) {
        event.preventDefault();
        getName();
    }
});


/**
 * Removes start div on click.
 */
function startGame() {
    document.querySelector(".startGame").style.display = "none";
}

/**
* Function that gets namn i variable and removes the getName div.
* Then displays the name vaiable it in game.
* Then prints out the first alternativ.
*/
function getName() {
    playerName = document.getElementById("nameInput").value;
    document.querySelector(".enterNameDiv").style.display = "none";
    document.querySelector(".playerName").innerText = playerName;
    document.querySelector(".playerPoints").innerText = points;
    uppgiften.innerText = "Välkommen " + playerName + "! Du står nu framför en stor och tung dörr. Du vet inte vad som vänta bakom dörren.";
    valen.innerText = "För att öppna skriv: öppna";
}

/**
 * Function that lets enter button work the same way as a clicked button.
 * For game/room input.
 * @param {keybordEvent} event Built in javascript event
 */
printInput.addEventListener("keyup", function (event) {
    if (event.keyCode === 13) {
        if (enter === 1) {
            event.preventDefault();
            getInputGame();
        } else {
            event.preventDefault();
            getInput();
        }
    }
});

/**
 * A function the checks if all rooms are played.
 * If all rooms are played gameOver function runs.
 */
function gameOver() {
    if (activRoom1 === "" && activRoom2 === "" && activRoom3 === "") {
        setInterval(gameOverText, 4000);
    }
}
/**
 * Function that displays gameOver div with refresh button.
 * Then name and points is shown.
 */
function gameOverText() {
    document.querySelector(".gameOver").style.display = "flex";
    document.querySelector(".gameOver h4").innerText = "Bra jobbat " + playerName + "! " + "Du fick " + points + " nycklar";

}