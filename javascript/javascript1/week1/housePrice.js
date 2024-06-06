//3. Housey pricey (A house price estimator)

// Peter's house parameters
const peterHouseWidth = 8;
const peterHouseHeight = 10;
const peterHouseDepth = 10;
const peterHouseGardenSize = 100;
const peterHouseRealPrice = 2500000;

// Julia's house parameters
const juliaHouseWidth = 5;
const juliaHouseHeigth = 8;
const juliaHouseDepth = 11;
const juliaHouseGardenSize = 70;
const juliaHouseRealPrice = 1000000;

const peterVolume = peterHouseWidth * peterHouseHeight * peterHouseDepth
const juliaVolume = juliaHouseWidth * juliaHouseHeigth * juliaHouseDepth

const peterHousePrice = peterVolume * 2.5 * 1000 + peterHouseGardenSize * 300;
const juliaHousePrice = juliaVolume * 2.5 * 1000 + juliaHouseGardenSize * 300;

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
