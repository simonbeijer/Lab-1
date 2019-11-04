// My global vaiables
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

// Creating random number for 
randomNumber = Math.floor(Math.random() * 100) + 1;



// My print const shortcuts
const uppgiften = document.querySelector(".uppgift");
const valen = document.querySelector(".val");
const printInput = document.querySelector(".getInput");
const inputId =  document.querySelector("#getInput");
const submitButton = document.querySelector(".getInput button");
const printInputGame = document.querySelector(".getInputGame");
const subminInputButtonGame = document.querySelector(".getInputGame button");





let enterInput = document.querySelector(".getInput");

enterInput.addEventListener("keyup", function(event) {
    
    if (event.keyCode === 13) {
        event.preventDefault();
        getInput();
    }
});




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


/**
 * A function the checks if 
 */
function gameOver() {
    if(activRoom1 === "" && activRoom2 === "" && activRoom3 === "") {
        console.log("slut");
        setInterval(gameOverText, 5000);
    }
}
/**
 * 
 */
function gameOverText() {
    document.querySelector(".gameOver").style.display = "flex";
    document.querySelector(".gameOver h4").innerText = "Bra jobbat " + playerName + "! " + "Du fick " + points + "nycklar";

}