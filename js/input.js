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
            valen.innerText = "För att gå vidare skriv: vidare";
            inputId.value = "";
            break;
        case "vidare":
            uppgiften.innerText = "Du har kommit till ditt första rum " + playerName + " /Gunde";
            valen.innerText = "För att gå in i första rummet skriv: rum 1";
            inputId.value = "";
            break;
        case "rum 1":   
            uppgiften.innerText = "Här ska du gissa på ett nummer mellan 1 och 100 " +
            "Du får veta om det är för högt eller för lågt. Du har sex chanser. Lycka till/Gunde";
            valen.innerText = "Välj ett numer mellan : 1-100";
            submitButton.onclick = getInputGame;
            inputId.value = "";
            break;
        case "vidare igen":
            if(points == "0") {
                uppgiften.innerText = "Det där gick ju inte så bra " +
                "Men det går nog bättre på nästa. Lycka till/Gunde";
            } else {    
                uppgiften.innerText = "Det där gick ju riktigt bra " +
                "Vi får se om du klarar nästa lika bra. Lycka till/Gunde";
            }
            valen.innerText = "För att gå vidare skriv: rum 2";
            inputId.value = "";
            break;
        case "rum 2":
            uppgiften.innerText = "Du ska leta efter en nyckel i lådorna! " +
            "Du ska välja ett nummer som kan blir 36 om du tar detta numret gånger sig själv du har tre försök";
            valen.innerText = "Välj att svara något nummer mellan : 1-6";
            submitButton.onclick = getInputGame;
            inputId.value = "";
            break;
        case "vidare återigen":
            if(points == "0") {
                uppgiften.innerText = "Det där gick ju inte så bra " +
                "Men det går nog bättre på nästa. Lycka till/Gunde";
            } else {    
                uppgiften.innerText = "Det där gick ju riktigt bra " +
                "Vi får se om du klarar nästa lika bra. Lycka till/Gunde";
            }
            valen.innerText = "För att gå vidare skriv: rum 3";
            inputId.value = "";
            break;
        case "rum 3":
            uppgiften.innerText = "Vilken dryck är den starkaste som finns?";
            valen.innerText = "Skriv in ditt svara: ";
            submitButton.onclick = getInputGame;
            inputId.value = "";
            break;
        case "hej":
            uppgiften.innerText = "Hej " + playerName;
            break;
        case "?":
            uppgiften.innerText = "Är du förvirrad " + playerName;
            break;
        default:
            uppgiften.innerText = "Jag förstår inte vad du menar...testa igen";
    }
}