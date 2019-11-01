/**
 * 
 *
 * 
 */
let getInputGame = function() {
    console.log(input);
    inputGame = document.querySelector("#getInput").value;
    switch(input) {
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
 * 
 * 
 */
function rum1() {
    console.log("input", input);
    console.log("inputGame", inputGame);
    console.log(randomNumber);
    numberString = '' + randomNumber;
    console.log(numberString);

    if (counter6 > 1) {
        
        if (inputGame == numberString) {
            uppgiften.innerText = "Rätt " + playerName + "!";
            valen.innerText = "För att gå vidare till nästa rum skriv: vidare igen";
            counter6 = "0";
            points++;
            document.querySelector(".playerPoints").innerText = points;
            submitButton.onclick = getInput;
            inputId.value = "";
        } else if (inputGame < numberString) {
            counter6--;
            uppgiften.innerText = "Fel! för LÅGT du har " + counter6 + " gisningar kvar." ;
            valen.innerText = "Välj ett numer mellan : 1-100";
            inputId.value = "";
        } else if (inputGame > numberString) {
            counter6--;
            uppgiften.innerText = "Fel! för HÖGT du har " + counter6 + " gisningar kvar." ;
            valen.innerText = "Välj ett numer mellan : 1-100";
            inputId.value = "";
        }
    }  else {
            uppgiften.innerText = "Du har förbrukat dina försök. Du fick ingen nyckel.";
            valen.innerText = "För att gå vidare till nästa rum skriv: vidare igen";
            counter6 = "0";
            submitButton.onclick = getInput;
            inputId.value = "";
        }
}



/**
 * 
 * 
 */
function rum2() {
    console.log(inputGame);
    console.log(counter2);

    if (counter2 > -1) {
        
        if(inputGame == 6) {
            uppgiften.innerText = "Rätt " + playerName + "!";
            valen.innerText = "För att gå vidare till nästa rum skriv: vidare återigen";
            points++;
            document.querySelector(".playerPoints").innerText = points;
            submitButton.onclick = getInput;
            inputId.value = "";
        } else if (counter2 == 0) {
            uppgiften.innerText = "Du har förbrukat dina försök. Du fick ingen nyckel.";
            valen.innerText = "För att gå vidare till nästa rum skriv: vidare återigen";
            inputId.value = "";
            submitButton.onclick = getInput;
        } 
        else {
            uppgiften.innerText = "Fel! du har " + counter2 + " kvar." ;
            inputId.value = "";
            counter2--;
        }
    }
}


/**
 * 
 * 
 */
function rum3() {
    console.log("input", input);
    console.log("rum3 function");
    console.log(inputGame);
    if(inputGame === "vatten") {
        points++;
        document.querySelector(".playerPoints").innerText = points;
        uppgiften.innerText = "Rätt " + playerName + "!" + " Du fick " + points + " bra jobbat! vatten är rätt för det kan bära stora fartyg." ;
        valen.innerText = "Du har ny klarat ut spelet för att köra igen uppdatera sidan.";
        inputId.value = "";
    } else {
        uppgiften.innerText = "Fel! Du fick " + points + " Nycklar" + " bra jobbat! "
        "Rätt svar var vatten (för det kan bära stora fartyg)." ;
        valen.innerText = "Du har nu klarat ut spelet för att köra igen uppdatera sidan.";
        inputId.value = "";
    }
}