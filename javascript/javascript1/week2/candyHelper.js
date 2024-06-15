//Candy Helper
const boughtCandyPrices = [];
const candyPrices = {
  sweet: 0.5,
  chocolate: 0.7,
  toffee: 1.1,
  "chewing-gum": 0.03,
};
function addCandy(candyType, weight) {
  const pricePerGram = candyPrices[candyType];
  if (pricePerGram) {
    const totalPrice = pricePerGram * weight;
    boughtCandyPrices.push(totalPrice);
  } else {
    console.log("Invalid candy type");
  }
}
const amountToSpend = Math.random() * 100;
function canBuyMoreCandy() {
  let totalSpent = 0; // total amount spent on buying candies
  for (let i = 0; i < boughtCandyPrices.length; i++) {
    totalSpent += boughtCandyPrices[i];
  }
  return totalSpent < amountToSpend;
}
if (canBuyMoreCandy()) {
  console.log("You can buy more, so please do!!!");
} else {
  console.log("Enough candy for you!!!");
}

addCandy("sweet", 20); //Case for valid type of candy
addCandy("chocolate", 30); //Case for valid type of candy
addCandy("toffee", 40); //Case for valid type of candy
addCandy("chewing-gum", 25); //Case for valid type of candy
addCandy("", 15); //Case for invalid type of candy
