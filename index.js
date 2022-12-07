/* const qualcosa = []

console.log(typeof qualcosa) // --> "object"

if (typeof qualcosa === "number") {
  console.log("La var contiene un numero")
} else {
  console.log("La var non contiene un numero")
} */

// ********************************************* OGGETTI ***********************************

const oggettoVuoto = {}

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
}

/* utente.username = null */
utente.indirizzo.regione = "Veneto"

utente.numeriDiTelefono.push("+39 546654654")

console.log(utente.numeriDiTelefono)

// *************************************************** ARRAY ***************************************

// meglio evitare array con tipi di dato differenti --> const myArray = [true, 123, "oasjoidjds", undefined, null, {}, []]

const myArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

const indice = 9

myArray[indice] = 100

// *************************************************** ARRAY DI OGGETTI *********************************

const arrayDiOggetti = [{}, {}, {}]

const arrayDiUtenti = []

arrayDiUtenti.push(utente)
arrayDiUtenti.push(utente2)

console.log("Primo utente: ", arrayDiUtenti[0])
console.log("Secondo utente: ", arrayDiUtenti[1])

console.log("Username del primo utente: ", arrayDiUtenti[0].username)

console.log("Indirizzo del secondo utente: ", arrayDiUtenti[1].indirizzo)
console.log("Secondo numero di telefono del primo utente: ", arrayDiUtenti[0].numeriDiTelefono[1])
