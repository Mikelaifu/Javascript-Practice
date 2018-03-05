let story = 'Last weekend, I took literally the most beautiful bike ride of my life. The route is called "The 9W to Nyack" and it actually stretches all the way from Riverside Park in Manhattan to South Nyack, New Jersey. It\'s really an adventure from beginning to end! It is a 48 mile loop and it basically took me an entire day. I stopped at Riverbank State Park to take some extremely artsy photos. It was a short stop, though, because I had a really long way left to go. After a quick photo op at the very popular Little Red Lighthouse, I began my trek across the George Washington Bridge into New Jersey.  The GW is actually very long - 4,760 feet! I was already very tired by the time I got to the other side.  An hour later, I reached Greenbrook Nature Sanctuary, an extremely beautiful park along the coast of the Hudson.  Something that was very surprising to me was that near the end of the route you actually cross back into New York! At this point, you are very close to the end.';

let storyWords = story.split(' ');
console.log('toalt work count number :' + storyWords.length)

let unnecessaryWords = ['extremely', 'literally', 'actually' ];

/* There is an array of words that are unnecessary. Iterate over your array to filter out these words. Save the remaining words in an array called betterWords. There are several ways that you could achieve this.*/
let betterWord = storyWords.filter(function(word) {
  if (unnecessaryWords.includes(word)) {
    
  }else {
    return word;
  }
})

//console.log(betterWord)

/* There is an array of words called overusedWords. These are words overused in this story. You want to let the user of your program know how many times they have used these overused words. There are two ways to achieve this. Try it on your own first. If you need help, consult the hint.*/

let overusedWords = ['really', 'very', 'basically'];
let overuse1 = 0
let overuse2 =0
let overuse3 = 0

storyWords.filter(function(word){
  if (word === overusedWords[0]) {
    overuse1 ++;
  }else if (word === overusedWords[1]){
    overuse2 ++;
  } else if (word === overusedWords[2]){
    overuse3 ++; 
  }
}) 
console.log('really is used in ' + overuse1 + ' times; ', 'very is used in ' + overuse2 + ' times; ' + 'bascially is used in ' + overuse3 + ' times; ' ) 

/*let overuse = [0,0,0]
storyWords.filter(function(word){ 
   let for (overusedIndex = 0 ; overusedIndex< overusedWords.length; overusedIndex ++;) {
     if (word === overusedWords[overusedIndex]){
       overuse[overusedIndex] ++ ;
       
     }
   }
})*/

/* 5.
Now, count how many sentences are in the paragraph.

This may seem tricky, but remember that all of the sentences in this paragraph end with a period (.) or an exclamation mark (!). You could iterate over the array and add 1 to a sentence counter variable for each word that has a period or exclamation mark as its final character.*/


sentenceEnd1 = 0


storyWords.forEach(function(words){
  if (words[words.length-1] === '.' | words[words.length -1] === '!'){
    sentenceEnd1 ++
  } 
})

console.log('total sentence number is ' + sentenceEnd1 )


console.log(betterWord )









