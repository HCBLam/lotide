
const eqArrays = function(array1, array2) {
  // console.log('Array1: ' + array1);
  // console.log('Array2: ' + array2);

  if (array1.length !== array2.length) return false;

  for (let i = 0; i < array1.length; i++) {
    if (array1[i] !== array2[i]) {
      return false;
    }
  }
  return true;
};

const assertArraysEqual = function(array1, array2) {
  eqArrays(array1, array2) === true ?
    console.log(`✅✅✅ Assertion Passed: ${array1} === ${array2}`) :
    console.log(`❌❌❌ Assertion Failed: ${array1} !== ${array2}`);
};


const flatten = function(arr) {
  let flattenedArray = [];

  for (const e of arr) {
    if (Array.isArray(e)) {
      for (let x of e) {
        flattenedArray.push(x);
      }
    } else {
      flattenedArray.push(e);
    }
  }

  return flattenedArray;
};

flatten([1, 2, [3, 4], 5, [6]]);
flatten(['a', ['b', 'c', 'd'], 'e', ['f', 'g'], 'h', ['i']]);

assertArraysEqual(flatten([1, 2, [3, 4], 5, [6]]), [1, 2, 3, 4, 5, 6]);
assertArraysEqual(flatten(['a', ['b', 'c', 'd'], 'e', ['f', 'g'], 'h', ['i']]), ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i']);
