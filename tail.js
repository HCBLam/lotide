const assertEqual = function(actual, expected) {
  actual === expected ?
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`) :
    console.log(`❌❌❌ Assertion Failed: ${actual} !== ${expected}`);
};


const tail = function(array) {
  let tailArray = [];
  for (let i = 1; i < array.length; i++) {
    tailArray.push(array[i]);
  }
  return tailArray;
};


const results = tail(['Hello', 'Lighthouse', 'Labs']);
assertEqual(results.length, 2);
assertEqual(results[0], 'Lighthouse');
assertEqual(results[1], 'Labs');

