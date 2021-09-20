const assertEqual = require('../assertEqual');
const tail = require('../tail');


// TEST CODE
const results = tail(['Hello', 'Lighthouse', 'Labs']);
assertEqual(results.length, 2);
assertEqual(results[0], 'Lighthouse');
assertEqual(results[1], 'Labs');
