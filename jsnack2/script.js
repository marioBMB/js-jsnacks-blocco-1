/*
    Fai inserire un numero, che chiameremo N, all’utente.
    Genera N serie, ognuno formato da 10 numeri casuali tra 1 e 100.
    Ogni volta che ne crei uno, stampalo a schermo.
*/


const N = prompt("Quante serie da 10 numeri vuoi visualizzare?");

for (let i = 0; i < N; i++){

    let serie = [];

    for (let j = 0; j < 10; j++){

     serie[j] = Math.floor(Math.random() * 100) + 1;
        console.log((j+1) + "° elemento: "+ serie[j] );
    }

    let serieStr = document.createElement("text");
    serieStr.innerHTML = (i+1) + "° serie: {"+ [...serie] + "} <br>";

    document.body.append(serieStr);

}

