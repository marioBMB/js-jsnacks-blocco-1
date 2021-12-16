/* 
    Crea due tag div con due id diversi:
    un div avrà il testo colorato di rosso mentre l’altro di verde.
    Partendo da un array di numeri, stampiamo nell’id rosso i numeri dispari e in verde i numeri pari.
*/

let div1 = document.createElement("div"); 
div1.className = "box";

let div2 = document.createElement("div"); 
div2.className = "box";

div1.id = 'red';
div2.id = 'green';

let numeri = [];

for (let i = 0; i < 10; i++){

    numeri[i] = Math.floor(Math.random() * 10) + 1;
}

let numeriStr = document.createElement("text");
numeriStr.textContent = "Elenco iniziale: "+ [...numeri]; /* N.B. con textContent il tag <br> viene stampato senza sortire alcun effetto di formattazione... */

document.body.append(numeriStr);
document.body.append(div1);
document.body.append(div2);


for (let i = 0; i < numeri.length; i++){

    if (numeri[i] % 2){ // dispari = resto 1
        div1.append(numeri[i] + " ");
    }
    else { //pari
        div2.append(numeri[i] + " ");
    }
}


