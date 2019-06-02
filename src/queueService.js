const math = require("mathjs");

const generateQueue = () => {
  const randomInteger = math.randomInt(1, 10); // return random number between 1 to 10
  const output = Array(randomInteger) // return array with random number of slots
    .fill() // fill array with undefined values (temporary placeholder)
    .map(number => math.randomInt(-20, 50)); // fill with number between -20 to 50 randomly
  return output; // return queue, in array data structure, with random numbers
};

// const generateQueue = () => {
//   return [1, 2, 3, 4, 5];
// };

module.exports = { generateQueue };

// call jest.mock() on module, fix all items to be either positive or negative?
