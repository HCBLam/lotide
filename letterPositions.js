// This function compares 2 arrays to see if they are perfect matches, element for element.
const eqArrays = function(array1, array2) {
  if (array1.length !== array2.length) return false;

  for (let i = 0; i < array1.length; i++) {
    if (array1[i] !== array2[i]) {
      return false;
    }
  }
  return true;
};

// This function asserts (i.e., console.logs) if 2 arrays are equal in value and type.
const assertArraysEqual = function(array1, array2) {
  eqArrays(array1, array2) === true ?
    console.log(`✅✅✅ Assertion Passed: ${array1} === ${array2}`) :
    console.log(`❌❌❌ Assertion Failed: ${array1} !== ${array2}`);
};


/*
Create a function that will take a sentence string.
For each letter in the sentence, return all the indices of that letter's occurrences in the sentence.
The final result will be an object; the indices will be an array for the corresponding letter key.
Don't count spaces.

*/

const letterPositions = function(sentence) {
  const results = [];

  for (let i = 0; i < sentence.length; i++) {
    if (sentence[i] !== ' ') {

      if (!results[sentence[i]]) {
        results[sentence[i]] = [i];
      } else {
        results[sentence[i]].push(i);
      }
    }
  }
  console.log(results);
  return results;
};


const assertTest1 = letterPositions('hello');


assertArraysEqual(assertTest1['h'], [0]); // => true
assertArraysEqual(assertTest1['e'], [1]); // => true
assertArraysEqual(assertTest1['l'], [2, 3]); // => true
assertArraysEqual(assertTest1['o'], [4]); // => false









