/*

*Il programma dovrà chiedere all'utente il numero di chilometri che vuole percorrere e l'età del passeggero.
*Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:
*il prezzo del biglietto è definito in base ai km (0.21 € al km)
*va applicato uno sconto del 20% per i minorenni
*va applicato uno sconto del 40% per gli over 65.
*L'output del prezzo finale va stampato in forma umana (con massimo due decimali, per indicare centesimi sul prezzo). Questo richiederà un minimo di ricerca.

*/

// ! Chiediamo il numero di chilometri che l'utente ha intenzione di percorrere

var x = prompt("Quanti chilometri vuoi fare?");
var userKm = parseFloat(x);
console.log(userKm);


// ! Chiediamo l'età del passeggero
var y = prompt("Quanti hanni hai?");
var userAge = parseFloat(y);
console.log(userAge)

// ! Calcoliamo il prezzo del biglietto (0.21€ al km)
var initialPrice = (0.21 * userKm);
console.log(initialPrice);

// ! Controlliamo l'età dell'utente
var discountedPrice;
var finalPrice;
// Se Minorenne
if (userAge < 18) {
    discountedPrice = initialPrice - (initialPrice * 0.2);
    // Se over 65
} else if (userAge >= 65) {
    discountedPrice = initialPrice - (initialPrice * 0.4);
}

finalPrice = document.getElementById("price");
finalPrice.innerText = discountedPrice;
console.log(discountedPrice);