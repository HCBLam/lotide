// This testing function compares 2 things to see if they match perfectly.
const assertEqual = function(actual, expected) {
  actual === expected ?
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`) :
    console.log(`❌❌❌ Assertion Failed: ${actual} !== ${expected}`);
};

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

/*
Create a function that will take in 2 objects and return true or false, based on a perfect match.

First compare to see if both objects have same number of keys; if not, return false and end there.

Then loop through the keys of one object; use same key name to find matching key in other object.
Use a conditional to compare if their values are strictly equal.

Also use a conditional to check whether any key value is an array.  Use Array.isAssert(yourObjKey).
If the values are arrays, compare them using the previous eqArrays() function.

The order of the keys inside the object does not seem to matter.

*/


const eqObjects = function(object1, object2) {
  //console.log('object1 key length:', Object.keys(object1).length);
  //console.log('object2 key length:', Object.keys(object2).length);

  if (Object.keys(object1).length !== Object.keys(object2).length) return false;

  for (let key in object1) {
    //console.log('object1:', key, object1[key]);
    //console.log('object2:', key, object2[key]);

    if (Array.isArray(object1[key]) && Array.isArray(object2[key])) {
      eqArrays(object1[key], object2[key]);
    }

    if (object1[key] !== object2[key]) {
      //console.log(false);
      return false;
    }
    //console.log(true);
    return true;
  }
};




const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
//eqObjects(cd, dc); // => true
assertEqual(eqObjects(cd, dc), true);


const cd2 = { c: "1", d: ["2", 3, 4] };
//eqObjects(cd, cd2); // => false
assertEqual(eqObjects(cd, cd2), false);


/*
const ab = { a: '1', b: '2' };
const ba = { b: '2', b: '1' };
const abc = { a: '1', b: '2', c: '3' };
eqObjects(ab, ab);
eqObjects(ab, abc);
*/



