/**
 * Switch case function that looks at the input field that gets input from other function.
 * When something is written the matching room function is run.
 */
let getInputGame = function () {
    console.log(input);
    inputGame = document.querySelector("#getInput").value;
    switch (input) {
        case "rum 1":
            rum1();
            break;
        case "rum 2":
            rum2();
            break;
        case "rum 3":
            rum3();
            break;
    }
}


/**
 * This function is a game that creates a random number and the player has to find it.
 * The input is checked if it is to high or to low, then lowers from the tries.
 * If there are no tries left or the input is right the player gets a points and
 * game is checked with gameOver then sends the player back to first input.
 */
function rum1() {
    console.log("input", input);
    console.log("inputGame", inputGame);
    console.log(randomNumber);
    numberString = '' + randomNumber;
    console.log(numberString);

    if (counter6 > 0) {

        if (inputGame == numberString) {
            activRoom1 = "";
            uppgiften.innerText = "Rätt " + playerName + "!";
            valen.innerText = "För att gå vidare till nästa rum skriv: rum";
            points++;
            document.querySelector(".playerPoints").innerText = points;
            submitButton.onclick = getInput;
            enter = 0;
            inputId.value = "";
            gameOver();
        } else if (inputGame < numberString) {
            counter6--;
            uppgiften.innerText = "Fel! för LÅGT du har " + counter6 + " gisningar kvar.";
            valen.innerText = "Välj ett nummer mellan : 1-100";
            inputId.value = "";
            if (counter6 == 0) {
                uppgiften.innerText = "Du har förbrukat dina försök. Du fick ingen nyckel.";
                valen.innerText = "För att gå vidare till nästa rum skriv: rum";
                submitButton.onclick = getInput;
                enter = 0;
                inputId.value = "";
                activRoom1 = "";
                gameOver();
            }
        } else if (inputGame > numberString) {
            counter6--;
            uppgiften.innerText = "Fel! för HÖGT du har " + counter6 + " gisningar kvar.";
            valen.innerText = "Välj ett nummer mellan : 1-100";
            inputId.value = "";
            if (counter6 == 0) {
                uppgiften.innerText = "Du har förbrukat dina försök. Du fick ingen nyckel.";
                valen.innerText = "För att gå vidare till nästa rum skriv: rum";
                submitButton.onclick = getInput;
                enter = 0;
                inputId.value = "";
                activRoom1 = "";
                gameOver();
            }
        }
    }
}



/**
 * This function checks if the input and displays different innertext from the answer.
 * The input is checked, then lowers from the tries.
 * If there are no tries left or the input is right the player gets a points and
 * game is checked with gameOver then sends the player back to first input.
 */
function rum2() {

    if (counter2 > -1) {

        if (inputGame == 6) {
            activRoom2 = "";
            uppgiften.innerText = "Rätt " + playerName + "!";
            valen.innerText = "För att gå vidare till nästa rum skriv: rum";
            points++;
            document.querySelector(".playerPoints").innerText = points;
            submitButton.onclick = getInput;
            enter = 0;
            inputId.value = "";
            gameOver();
        } else if (counter2 == 0) {
            activRoom2 = "";
            uppgiften.innerText = "Du har förbrukat dina försök. Du fick ingen nyckel.";
            valen.innerText = "För att gå vidare till nästa rum skriv: rum";
            inputId.value = "";
            submitButton.onclick = getInput;
            enter = 0;
            gameOver();
        }
        else {
            uppgiften.innerText = "Fel! du har " + counter2 + " kvar.";
            inputId.value = "";
            counter2--;
        }
    }
}


/**
 * This is a riddle that's only looking for one right answer.
 * If the player gets it right there is a point otherwise no point.
 * When its done you can go back to rum and is checked for gameOver.
 */
function rum3() {
    console.log("input", input);
    console.log("rum3 function");
    console.log(inputGame);
    if (inputGame === "vatten" || "Vatten") {
        activRoom3 = "";
        points++;
        document.querySelector(".playerPoints").innerText = points;
        uppgiften.innerText = "Rätt " + playerName + "!" + " Du fick " + points +
            "nycklar" + " bra jobbat! Vatten är rätt för det kan bära stora fartyg.";
        valen.innerText = "För att gå vidare till nästa rum skriv: rum";
        inputId.value = "";
        submitButton.onclick = getInput;
        enter = 0;
        gameOver();
    } else {
        activRoom3 = "";
        uppgiften.innerText = "Fel! Du fick " + points + " nycklar" + " bra jobbat! " +
            "Rätt svar var vatten (för det kan bära stora fartyg).";
        valen.innerText = "För att gå vidare till nästa rum skriv: rum";
        inputId.value = "";
        submitButton.onclick = getInput;
        enter = 0;
        gameOver();
    }
}