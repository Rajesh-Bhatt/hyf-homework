function calculateAverageFromArgs() {
  const args = process.argv.slice(2);
  const numbers = args.map(Number);

  if (numbers.length === 0 || numbers.some(isNaN)) {
    console.log("Please provide a list of numbers separated by spaces.");
  } else {
    const sum = numbers.reduce((x, y) => x + y, 0);
    const average = sum / numbers.length;
    console.log(`The average of ${numbers.join(", ")} is ${average}`);
  }
}

// Call the function to execute the code
calculateAverageFromArgs();
