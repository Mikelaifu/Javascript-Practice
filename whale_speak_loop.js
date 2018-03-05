/* Whale Talk
Take a sentence like, 'Turpentine and turtles,' and translate it into its "whale talk" equivalent: 'UUEEIEE A UUEE'.

There are a few simple rules for translating text to whale speak:

There are no consonants. Only vowels.
The us and es are extra long, so we must double them in our program.
Once we have converted text to the whale speak, the result is sung slowly, as is a custom in the ocean.

To accomplish this translation, we can use our knowledge of loops. Let's get started! */



let input  = 'i love you';

const vowels = ['a', 'e', 'i', 'o', 'u'];

let resultArray = [];

for (let inputIndex = 0;inputIndex < input.length;inputIndex++)
  {
    for (let vowelsIndex = 0; vowelsIndex <       vowels.length; vowelsIndex ++)
    { if (input[inputIndex] ===           vowels[vowelsIndex]) {
      resultArray.push(input[inputIndex]);
       } 
     
    }
  // inside of first loop becasue we wanna double it once  
    if (input[inputIndex] === 'e') {
         resultArray.push(input[inputIndex]);
       } else if (input[inputIndex] === 'u') {
         resultArray.push(input[inputIndex]);
       
       }

 }
// to print it out and with them putting togather
console.log(resultArray.join('').toUpperCase());