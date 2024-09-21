function calculateAverage(...numbers) {
  if (numbers.length === 0 || numbers.some(isNaN)) {
    return "Please provide a valid list of numbers.";
  } else {
    const sum = numbers.reduce((x, y) => x + y, 0);
    const average = sum / numbers.length;
    return `The average of ${numbers.join(", ")} is ${average}`;
  }
}

// Example of calling the function with any number of arguments
console.log(calculateAverage(10, 20, 30, 40)); // 4 arguments
console.log(calculateAverage(5, 15, 22)); // 3 arguments
console.log(calculateAverage(7, 10)); // 2 arguments
console.log(calculateAverage(7)); // 1 argument
