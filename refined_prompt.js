// Refined Copilot prompt example
// Write a function that takes two numbers and returns their sum. Ensure the inputs are numbers.
function add(a, b) {
  if (typeof a !== 'number' || typeof b !== 'number') {
    throw new Error('Inputs must be numbers');
  }
  return a + b;
}
