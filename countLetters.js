// This function compares 2 things to see if they match perfectly.
const assertEqual = function(actual, expected) {
  actual === expected ?
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`) :
    console.log(`❌❌❌ Assertion Failed: ${actual} !== ${expected}`);
};

/*
Create a function that takes a sentence (string) as an input.
Return a count of the letters in that sentence.

Use a for loop to go through the given sentence, letter by letter.
The count of each letter can be stored in an object assigned to a variable.
Use a conditional to skip over the spaces in the sentence.

*/


const countLetters = function(sentence) {
  let letterTally = {};

  for (let i = 0; i < sentence.length; i++) {
    if (sentence[i] !== ' ') {

      if (letterTally[sentence[i]]) {
        letterTally[sentence[i]] += 1;
      } else {
        letterTally[sentence[i]] = 1;
      }
    }
  }
  console.log(letterTally);
  return letterTally;
};


const results = countLetters('lighthouse in the house');

assertEqual(results['h'], 4);
assertEqual(results['e'], 3);
assertEqual(results['n'], 1);
assertEqual(results['w'], undefined);

