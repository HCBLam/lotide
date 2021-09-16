// This function compares 2 things to see if they match perfectly.
const assertEqual = function(actual, expected) {
  actual === expected ?
    console.log(`✅ Assertion Passed: ${actual} === ${expected}`) :
    console.log(`❌ Assertion Failed: ${actual} !== ${expected}`);
};

/*
Create a function that will search for a key on an object where its value matches a given value.

Function takes an object and a value.
Scan the object and return first key that contains the given value.
If no key with given value is found, return undefined.

Scan the object:  use a for...in loop to iterate through the keys of the object.
Search for matching values:  use a conditional that compares the key value with the given value.
Access the key value using bracket notation:  object[key] will access the corresponding value.
Return the key itself if there is a match.
*/

const findKeyByValue = function(object, value) {

  for (let key in object) {
    // console.log(object[key]);

    if (object[key] === value) {
      return key;
    }
  }
};


const bestTVShowsByGenre = {
  sci_fi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama:  "The Wire"
};

// findKeyByValue(bestTVShowsByGenre);

assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
assertEqual(findKeyByValue(bestTVShowsByGenre, "The Expanse"), "sci_fi");
assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);

