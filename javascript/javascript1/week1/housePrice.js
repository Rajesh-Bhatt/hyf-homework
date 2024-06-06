//3. Housey pricey (A house price estimator)

// Peter's house parameters
let peterHouseWidth = 8;
let peterHouseHeight = 10;
let peterHouseDepth = 10;
let peterHouseGardenSize = 100;
let peterHouseRealPrice = 2500000;

// Julia's house parameters
let juliaHouseWidth = 5;
let juliaHouseHeigth = 8;
let juliaHouseDepth = 11;
let juliaHouseGardenSize = 70;
let juliaHouseRealPrice = 1000000;

let peterVolume = peterHouseWidth * peterHouseHeight * peterHouseDepth
let juliaVolume = juliaHouseWidth * juliaHouseHeigth * juliaHouseDepth

let peterHousePrice = peterVolume * 2.5 * 1000 + peterHouseGardenSize * 300;
let juliaHousePrice = juliaVolume * 2.5 * 1000 + juliaHouseGardenSize * 300;

if (peterHousePrice > peterHouseRealPrice) {
  console.log("Peter is paying too much for the house.");
} else {
  console.log("Peter is paying too little for the house");
}

if (juliaHousePrice > juliaHouseRealPrice) {
  console.log("Julia is paying too much for the house.");
} else {
  console.log("Julia is paying too little for the house.");
} 