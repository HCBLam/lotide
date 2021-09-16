// This testing function compares 2 arrays to see if they are perfect matches, element for element.
const eqArrays = function(array1, array2) {
  if (array1.length !== array2.length) return false;

  for (let i = 0; i < array1.length; i++) {
    if (array1[i] !== array2[i]) {
      return false;
    }
  }
  return true;
};

// This testing function compares 2 objects to see if they perfectly match.
const eqObjects = function(object1, object2) {

  if (Object.keys(object1).length !== Object.keys(object2).length) return false;

  for (let key in object1) {

    if (Array.isArray(object1[key]) && Array.isArray(object2[key])) {
      eqArrays(object1[key], object2[key]);
    }

    if (object1[key] !== object2[key]) {
      return false;
    }
    return true;
  }
};

/*
This assert function will use the eqObjects tester to console.log whether 2 objects perfect match.
It's identical in structure to the assertArraysEqual function.
But we have to add 1 extra line to make the console.log actually list the object key:values.
Have to add inspect variable set to require('util').inspect.
Then pass that into the console.log.
*/

// This assert function will use the eqObjects tester to console.log whether 2 objects perfect match.
const assertObjectsEqual = function(object1, object2) {
  const inspect = require('util').inspect;
  eqObjects(object1, object2) === true ?
    console.log(`✅✅✅  Assertion Passed: ${inspect(object1)} === ${inspect(object2)}`) :
    console.log(`❌❌❌ Assertion Failed: ${inspect(object1)} !== ${inspect(object2)}`);
};

const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
assertObjectsEqual(cd, dc);




