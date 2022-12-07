/* const qualcosa = []

console.log(typeof qualcosa) // --> "object"

if (typeof qualcosa === "number") {
  console.log("La var contiene un numero")
} else {
  console.log("La var non contiene un numero")
} */

// ********************************************* OGGETTI ***********************************

/* const oggettoVuoto = {}

const utente = {
  username: "john1234",
  nome: "John",
  cognome: "1234",
  età: 20,
  haLaPatente: false,
  indirizzo: {
    via: "Corso Italia",
    civico: 3,
    cap: 34070,
    nazione: "Italia",
  },
  numeriDiTelefono: ["+39 3495456446", "+39 456456456"],
}

const utente2 = {
  username: "rambo1234",
  nome: "John",
  cognome: "Rambo",
  età: 200,
  haLaPatente: false,
  indirizzo: {
    via: "Corso Italia",
    civico: 3,
    cap: 34070,
    nazione: "Italia",
  },
  numeriDiTelefono: ["+39 3495456446"],
} */

/* utente.username = null */
/* utente.indirizzo.regione = "Veneto"

utente.numeriDiTelefono.push("+39 546654654")

console.log(utente.numeriDiTelefono)
 */
// *************************************************** ARRAY ***************************************

// meglio evitare array con tipi di dato differenti --> const myArray = [true, 123, "oasjoidjds", undefined, null, {}, []]

/* const myArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

const indice = 9

myArray[indice] = 100
 */
// *************************************************** ARRAY DI OGGETTI *********************************

/* const arrayDiOggetti = [{}, {}, {}]

const arrayDiUtenti = []

arrayDiUtenti.push(utente)
arrayDiUtenti.push(utente2)

console.log("Primo utente: ", arrayDiUtenti[0])
console.log("Secondo utente: ", arrayDiUtenti[1])

console.log("Username del primo utente: ", arrayDiUtenti[0].username)

console.log("Indirizzo del secondo utente: ", arrayDiUtenti[1].indirizzo)
console.log("Secondo numero di telefono del primo utente: ", arrayDiUtenti[0].numeriDiTelefono[1]) */

// ************************************************ SWITCH CASE **********************************************
/* 
const numero = 1 */

/* if (numero === 0 && oggi === "Mercoledi" && utente.eta ===) {
  console.log("Il numero è uguale a 0")
} else if (numero === 1) {
  console.log("Il numero è uguale a 1")
} else if (numero === 2) {
  console.log("Il numero è uguale a 2")
} else {
  console.log("Il numero è più grande di 2")
} */

/* const testo = "Ciao"

switch (numero) {
  case 0:
    console.log("Il numero è uguale a 0")
    break
  case 1:
    console.log("Il numero è uguale a 1")
    break
  case 2:
    console.log("Il numero è uguale a 2")
    break
  case 3:
    console.log("Il numero è uguale a 3")
    break
  case 4:
    console.log("Il numero è uguale a 4")
    break
  case 5:
    console.log("Il numero è uguale a 5")
    break
  default:
    console.log("Il numero è maggiore di 5")
    break
}

switch (numero) {
  case numero > 0:
    console.log("Il numero è maggiore di 0")

    break
  case numero < 0:
    console.log("Il numero è minore di 0")

    break
  default:
    console.log("Il numero è uguale a 0")
    break
} */

// ************************************************** WHILE LOOP **********************************************

/* console.log(0)
console.log(1)
console.log(2) 
......
*/

let numero = 0

while (numero < 11000) {
  // Fino a che la condizione risulta vera il loop eseguirà le istruzioni racchiuse tra graffe
  console.log(numero)
  numero = numero + 1000
  if (numero === 10) break // break esce forzatamente dal loop (se voglio che avvenga al verificarsi di una condizione uso if)
}

do {
  console.log("Sono nel loop")
} while (false)
