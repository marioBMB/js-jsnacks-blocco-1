 /* 
    Crea un array vuoto e chiedi all’utente un numero da inserire nell’array. 
    Continua a chiedere i numeri all’utente e a inserirli nell’array fino a quando
    la somma degli elementi è minore di 50.
*/

const numeri = [];
let somma;

numeri[0] = parseInt(prompt("Inserire numero:"));

while (numeri[0] == NaN){
    numeri[0] = parseInt(prompt("Riprova. Ricorda di inserire solo numeri e non caratteri testuali!"));
}
somma = numeri[0];

let i = 1;
let done = false;


while (!done){

    numeri[i] = parseInt(prompt("Tot. = " + somma +"\nInserire un altro numero:"));
    while (numeri[i] == NaN){
        numeri[i] = parseInt(prompt("Riprova. Ricorda di inserire solo numeri e non caratteri testuali!"));
    }
    if (somma + numeri[i] < 50){
        somma += numeri[i];
        i++;
    }
    else {
        done = true;
    }
}

alert("La somma degli elementi inseriti è: " + somma);

