// My global vaiables
let playerName;
let points = "0";
let input;
let inputGame;
let counter2 = 2;
let randomNumber;
let counter6 = 6;

randomNumber = Math.floor(Math.random() * 100) + 1;



// My print const shortcuts
const uppgiften = document.querySelector(".uppgift");
const valen = document.querySelector(".val");
const printInput = document.querySelector(".getInput");
const inputId =  document.querySelector("#getInput");
const submitButton = document.querySelector(".getInput button");
const printInputGame = document.querySelector(".getInputGame");
const subminInputButtonGame = document.querySelector(".getInputGame button");




/**
 * Removes startdiv on click
 */
function startGame() {
    document.querySelector(".startGame").style.display = "none";
}

/**
* Function that gets namn i variable and removes the getName div then displays the name vaiable it in game.
* Then prints out the first alternativ.
*/
function getName() {
    playerName = document.getElementById("nameInput").value;
    console.log("hello");
    console.log(playerName);
    console.log(points);
    document.querySelector(".enterNameDiv").style.display = "none";
    document.querySelector(".playerName").innerText = playerName;
    document.querySelector(".playerPoints").innerText = points;
    uppgiften.innerText = "Välkommen " + playerName + "! Du står nu framför en stor och tung dörr. Du vet inte vad som vänta bakom dörren.";
    valen.innerText = "För att öppna skriv: öppna";
}