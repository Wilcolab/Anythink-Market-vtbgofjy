// Chain-of-thought Copilot prompt example
// Step 1: Check if inputs are numbers
// Step 2: Add the numbers
// Step 3: Return the result
function add(a, b) {
  if (typeof a !== 'number' || typeof b !== 'number') {
    throw new Error('Inputs must be numbers');
  }
  const result = a + b;
  return result;
}
