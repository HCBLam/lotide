// This function compares 2 things to see if they match perfectly.
const assertEqual = function(actual, expected) {
  actual === expected ?
    console.log(`✅ Assertion Passed: ${actual} === ${expected}`) :
    console.log(`❌ Assertion Failed: ${actual} !== ${expected}`);
};


/*
Create a function that will take a collection of items (an object).
Return counts for a subset of those items in an object.  Not count everything.
Will count the subset based on given criteria, ignoring other items.
Items will be limited to strings.
*/

const countOnly = function(allItems, itemsToCount) {
  const results = {};

  for (let item of allItems) {
    if (itemsToCount[item]) {
    results[item] ? results[item] += 1 : results[item] = 1;
    }
  }
  return results;
};

const firstNames = [
  "Karl",
  "Salima",
  "Agouhanna",
  "Fang",
  "Kavith",
  "Jason",
  "Salima",
  "Fang",
  "Joe"
];

const result1 = countOnly(firstNames, { "Jason": true, "Karima": true, "Fang": true, "Agouhanna": false });

assertEqual(result1["Jason"], 1);
assertEqual(result1["Karima"], undefined);
assertEqual(result1["Fang"], 2);
assertEqual(result1["Agouhanna"], undefined);






















