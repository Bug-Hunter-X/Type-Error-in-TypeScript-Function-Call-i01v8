function add(a: number, b: number): number {
  return a + b;
}

let num1 = 10;
let num2 = 5;
let result = add(num1, num2); // Correct usage
console.log(result); // Output: 15

//Handling potential string input
function addSafe(a: number | string, b: number | string): number {
  const numA = typeof a === 'string' ? parseInt(a) : a;
  const numB = typeof b === 'string' ? parseInt(b) : b;
  return numA + numB; 
}

let result2 = addSafe("10", 5); // Correct usage
console.log(result2); // Output: 15