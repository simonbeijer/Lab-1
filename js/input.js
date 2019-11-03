// Alternativ code structure

// function a() {
//     uppgiften.innerText = "Välkommen till fortet " + playerName + "!" + " Vågar du gå vidare?/Gunde";
//     valen.innerText = "För att gå vidare skriv: vidare";
//     document.querySelector("#getInput").value = "";
//     submitButton.onclick = b
// }

// function b() {
//     input.value
//     if () {
//     }
//     uppgiften.innerText = "Du har kommit till ditt första rum " + playerName + " /Gunde";
//     valen.innerText = "För att gå in i första rummet skriv: rum 1";
//     document.querySelector("#getInput").value = "";
//     submitButton.onclick = c
// }

/**
 * 
 *
 * 
 */
let getInput = function() {
    input = document.querySelector("#getInput").value;
    console.log(input);

    switch (input) {
        case "öppna":
            uppgiften.innerText = "Välkommen till fortet " + playerName + "!" + " Vågar du gå vidare?/Gunde";
            valen.innerText = "För att gå vidare skriv: rum";
            inputId.value = "";
            break;
        case "rum":
            uppgiften.innerText = "Du kan välja " + activRoom1 + " " + activRoom2 + " " + activRoom3 + "/Gunde";
            valen.innerText = "För att gå in välj ett rum: " + activRoom1 + " " + activRoom2 + " " + activRoom3;
            inputId.value = "";
            break;
        case "rum 1":  
            if(activRoom1 != "") {
                uppgiften.innerText = "Här ska du gissa på ett nummer mellan 1 och 100 " +
                "Du får veta om det är för högt eller för lågt. Du har sex chanser. Lycka till/Gunde";
                valen.innerText = "Välj ett numer mellan : 1-100";
                submitButton.onclick = getInputGame;
                inputId.value = "";
                inputId.value = "";
            } else {
                uppgiften.innerText = "Du har redan förbrukat ditt försök/Gunde";
                valen.innerText = "För att gå vidare till nästa rum skriv: rum";
        }
            break;
        case "rum 2":
                if(activRoom2 != "") {
                    uppgiften.innerText = "Du ska leta efter en nyckel i lådorna! " +
                    "Du ska välja ett nummer som kan blir 36 om du tar detta numret gånger sig själv du har tre försök";
                    valen.innerText = "Välj att svara något nummer mellan : 1-6";
                    submitButton.onclick = getInputGame;
                    inputId.value = "";
                } else {
                    uppgiften.innerText = "Du har redan förbrukat ditt försök/Gunde";
                    valen.innerText = "För att gå vidare till nästa rum skriv: rum";
                }
            break;
        case "rum 3":
                if(activRoom3 != "") {
                    uppgiften.innerText = "Vilken dryck är den starkaste som finns?";
                    valen.innerText = "Skriv in ditt svara: ";
                    submitButton.onclick = getInputGame;
                    inputId.value = "";
                } else {
                    uppgiften.innerText = "Du har redan förbrukat ditt försök/Gunde";
                    valen.innerText = "För att gå vidare till nästa rum skriv: rum";
                }
            break;
        case "hej":
            uppgiften.innerText = "Hej " + playerName;
            break;
        case "?":
            uppgiften.innerText = "Är du förvirrad " + playerName;
            break;
        case "A1K3S3U7F":
            points = 99;
            activRoom1 = "";
            activRoom2 = "";
            activRoom3 = "";
            gameOver();
            break;
        default:
            uppgiften.innerText = "Jag förstår inte vad du menar...testa igen";
    }
}