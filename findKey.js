// This function compares 2 things to see if they match perfectly.
const assertEqual = function(actual, expected) {
  actual === expected ?
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`) :
    console.log(`❌❌❌ Assertion Failed: ${actual} !== ${expected}`);
};



// Create the function findKey which takes an object and a callback function.
// Scan the object and return the first key for which the callback returns a truthy value.
// If no key is found, it should return undefined.


// Loop through the object.         **Important! => Use a for in loop to iterate over objects, not a for of loop!**
// Check each key for a match with the callback value truthy.       Use an if statement with the callback.
// Return the first matching key.       Return the key to end the function.  No need to push to a variable.



const findKey = function(object, callback) {

  for (let key in object) {
    //console.log(object[key]);

    if (callback(object[key])) {
      return key;
    }
  }
};


const attractions1 = findKey({
  "Blue Hill": { stars: 1 },
  "Akaleri":   { stars: 3 },
  "noma":      { stars: 2 },
  "elBulli":   { stars: 3 },
  "Ora":       { stars: 2 },
  "Akelarre":  { stars: 3 }
}, x => x.stars === 2); // => "noma"


const attractions2 = findKey({
  "Blue Hill": { stars: 1 },
  "Akaleri":   { stars: 3 },
  "noma":      { stars: 2 },
  "elBulli":   { stars: 3 },
  "Ora":       { stars: 2 },
  "Akelarre":  { stars: 3 }
}, x => x.stars === 3); // =>


const attractions3 = findKey({
  "Blue Hill": { stars: 1 },
  "Akaleri":   { stars: 3 },
  "noma":      { stars: 2 },
  "elBulli":   { stars: 3 },
  "Ora":       { stars: 2 },
  "Akelarre":  { stars: 3 }
}, x => x.stars === 1); // =>


const attractions4 = findKey({
  "Blue Hill": { stars: 1 },
  "Akaleri":   { stars: 3 },
  "noma":      { stars: 2 },
  "elBulli":   { stars: 3 },
  "Ora":       { stars: 2 },
  "Akelarre":  { stars: 3 }
}, x => x.stars === 4); // =>


// Test assertions
assertEqual(attractions1, 'noma');
assertEqual(attractions2, 'Akaleri');
assertEqual(attractions3, 'Akaleri');
assertEqual(attractions4, undefined);

