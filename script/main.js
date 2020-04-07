console.log('JS ok');
/*
* CAMPO MINATO
- Il computer deve generare 16 numeri casuali tra 1 e 100 (numeri vietati).
- In seguito deve chiedere all’utente di inserire un numero alla volta, sempre compreso tra 1 e 100. L’utente non può inserire più volte lo stesso numero.
- Se il numero è presente nella lista dei numeri generati (numeri vietati), la partita termina, altrimenti si continua chiedendo all’utente un altro numero.
- La partita termina quando il giocatore inserisce un numero “vietato” o raggiunge il numero massimo possibile di numeri consentiti.
- Al termine della partita il software deve comunicare il punteggio, cioè il numero di volte che l’utente ha inserito un numero consentito.
BONUS:
All’inizio il software richiede anche una difficoltà all’utente che cambia il range di numeri casuali:
con difficoltà 0 => tra 1 e 100
con difficoltà 1 =>  tra 1 e 80
con difficoltà 2=> tra 1 e 50
*/
var computerNumbers = [];
var userNumbersCont = [];
var result = true;
var maxNumbers = 100;
var numbersToWin = 84;
var scelta = parseInt( prompt('Scegli difficoltà tra 0, 1 o 2.') );

switch(scelta) {
  case 0:
    maxNumbers = 100;
    numbersToWin = 84;
    break;
  case 1:
    maxNumbers = 80;
    numbersToWin = 64;
    break;
  case 2:
    maxNumbers = 50;
    numbersToWin = 34;
    break;
  default:
    maxNumbers = 100;
    numbersToWin = 84;
};

var userNumbers = askRange(maxNumbers);

for (i = 1; i <= 16; i++) {
  computerNum = Math.floor( Math.random() * maxNumbers) + 1;

  if (!computerNumbers.includes(computerNum)) {
    computerNumbers.push(computerNum);
  }
  else {
    i = i - 1;
  }
};

for (i = 1; i <= numbersToWin && result == true; i++) {
  if ( computerNumbers.includes(userNumbers) ) {
    result = false;
    alert('La mina è esplosa! Hai perso!');
    alert('Hai affettuato ' + userNumbersCont.length + ' tentativi.');
    console.log('La mina è esplosa! Hai perso! Hai affettuato ' + userNumbersCont.length + ' tentativi.');
  }
  else if ( userNumbers <= 0 || userNumbers > maxNumbers || isNaN(userNumbers) ) {
    userNumbers = parseInt(prompt('Il dato inserito deve essere un numero compreso tra 0 e ' + maxNumbers));
  }
  else if (userNumbersCont.includes(userNumbers)) {
  userNumbers = parseInt(prompt('Hai già inserito questo numero, inseriscine uno nuovo.'));
  }
  else if ( !computerNumbers.includes(userNumbers) ) {
    result = true
    userNumbersCont.push(userNumbers);
    userNumbers = askRange(maxNumbers);
  }
  else if (userNumberCont.length == numbersToWin) {
    result = true
    alert('Hai inserito ' + userNumbersCont.length + ' numeri, il numero massimo di tentativi. Hai vinto!');
    console.log('Hai inserito ' + userNumbersCont.length + ' numeri, il numero massimo di tentativi. Hai vinto!');
  }
};

console.log('Numeri bomba:', computerNumbers);
console.log('Numero bomba inserito:', userNumbers);
console.log('I tuoi numeri:', userNumbersCont);
console.log(result);

function askRange(max) {
  return parseInt( prompt('Inserisci un numero da 1 a ' + max) );
};
