


//for 
let myPlaces = ['Cambodia', 'Taiwan', 'Thailand'];

let friendPlaces = ['Taiwan', 'Japan', 'South Korea'];

for (let myPlacesIndex = 0; myPlacesIndex < myPlaces.length; myPlacesIndex++) {
  for (let friendPlacesIndex = 0; friendPlacesIndex < friendPlaces.length; friendPlacesIndex++) {
    if (myPlaces[myPlacesIndex] === friendPlaces[friendPlacesIndex]) {
      console.log(friendPlaces[friendPlacesIndex]);
    }
  }
}


// while
let cards = ['Diamond', 'Spade', 'Heart', 'Club'];

let currentCard = 'Heart'

while(currentCard !== 'Spade') {
  console.log(currentCard)
  currentCard = cards[Math.floor(Math.random()*4)];
}

// This code will generate a random number between 0 and 3, the range of indices of the cards array, and reassign currentCard to a new card from that array. Because the while loop only runs if the card is NOT a Spade, the value of currentCard will only be logged to the console if it is not 'Spade'. //

console.log('found a spade: ')

//Outside the while loop, on the last line of the program, use console.log() to log that the program found a spade. You can use the string "found a spade" inside console.log().

//Change the currentCard that you set to 'Spade' in the first step to 'Heart' so that the program will run.

//Run the code a few times to see the output changing. You can see the while loop guessing a card, then seeing if it is a Spade, over and over, until it finds one.


// infinite loop and break in one condition
let flag = true;
let counter = 0;
while(flag === true){
  console.log(counter);
  counter+=1;
  if (counter === 37){
    break;
  }
}