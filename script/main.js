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

var userNumbers = parseInt(prompt('Inserisci un numero da 1 a 100'));

var userNumbersCont = [];

var result = true;

for (i = 1; i <= 16; i++) {
  computerNum = Math.floor( Math.random() * 100) + 1;

  if (!computerNumbers.includes(computerNum)) {
    computerNumbers.push(computerNum);
  }
  else {
    i = i - 1;
  }
};

for (i = 1; i <= 84 && result == true; i++) {


  if ( computerNumbers.includes(userNumbers) || userNumbers <= 0 || userNumbers > 100 || isNaN(userNumbers) || userNumbersCont.includes(userNumbers) ) {
    result = false;
    alert('La mina è esplosa! Hai perso!');
    alert('Hai inserito ' + userNumbersCont.length + ' numeri');
  }
  else if ( !computerNumbers.includes(userNumbers) ) {
    result = true
    userNumbersCont.push(userNumbers);
    userNumbers = parseInt(prompt('Inserisci un numero da 1 a 100'));
  }
  else if (userNumberCont.length = 84) {
    result = true
    alert('Hai inserito ' + userNumbersCont.length + ' numeri, il numero massimo di tentativi. Hai vinto!');
  }
};

console.log(computerNumbers);
console.log(userNumbers);
console.log(userNumbersCont);
console.log(result);
