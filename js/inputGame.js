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
            document.querySelector("#getInputGame").value = "";
            break;
        case "rum 2":
            rum2();
            break;
        case "rum 3":
            rum3();
            document.querySelector("#getInputGame").value = "";
            break;
    }
}

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
        } else if (inputGame < numberString) {
            counter6--;
            uppgiften.innerText = "Fel! för LÅGT du har " + counter6 + " gisningar kvar." ;
            valen.innerText = "Välj ett numer mellan : 1-100";
        } else if (inputGame > numberString) {
            counter6--;
            uppgiften.innerText = "Fel! för HÖGT du har " + counter6 + " gisningar kvar." ;
            valen.innerText = "Välj ett numer mellan : 1-100";
            document.querySelector("#getInputGame").value = "";
        }
    }  else {
            uppgiften.innerText = "Du har förbrukat dina försök. Du fick ingen nyckel.";
            valen.innerText = "För att gå vidare till nästa rum skriv: vidare igen";
            counter6 = "0";
            submitButton.onclick = getInput;
        }
}




function rum2() {
    console.log(inputGame);
    console.log(counter2);

    if (counter2 > -1) {
        
        if(inputGame == 6) {
            uppgiften.innerText = "Rätt " + playerName + "!";
            valen.innerText = "För att gå vidare till nästa rum skriv: vidare återigen";
            points++;
            // printInput.style.display = "flex";
            // printInputGame.style.display = "none";
            document.querySelector(".playerPoints").innerText = points;
            submitButton.onclick = getInput;
        } else if (counter2 == 0) {
            uppgiften.innerText = "Du har förbrukat dina försök. Du fick ingen nyckel.";
            valen.innerText = "För att gå vidare till nästa rum skriv: vidare återigen";
            // printInput.style.display = "flex";
            // printInputGame.style.display = "none";
            submitButton.onclick = getInput;
        } 
        else {
            uppgiften.innerText = "Fel! du har " + counter2 + " kvar." ;
            document.querySelector("#getInputGame").value = "";
            counter2--;
        }
    }
}

function rum3() {
    console.log("input", input);
    console.log("rum3 function");
    console.log(inputGame);
    if(inputGame === "båt") {
        points++;
        document.querySelector(".playerPoints").innerText = points;
        uppgiften.innerText = "Rätt " + playerName + "!" + "Du fick " + points + " bra jobbat!" ;
        valen.innerText = "Du har ny klarat ut spelet för att köra igen uppdatera sidan.";
    } else {
        uppgiften.innerText = "Fel! Du fick " + points + " Nycklar" + " bra jobbat!" ;
        valen.innerText = "Du har ny klarat ut spelet för att köra igen uppdatera sidan.";
    }
}