function calculateAverage(numbers) {
  if (numbers.length === 0 || numbers.some(isNaN)) {
    return "Please provide a valid list of numbers.";
  } else {
    const sum = numbers.reduce((x, y) => x + y, 0);
    const average = sum / numbers.length;
    return `The average of ${numbers.join(", ")} is ${average}`;
  }
}

// Example of calling the function with input parameters
const inputNumbers = [10, 20, 30];
console.log(calculateAverage(inputNumbers));
