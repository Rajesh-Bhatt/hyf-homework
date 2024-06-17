//Weather to wear clothes function
function useTypeOfClothes(temperature) {
  if (temperature <= 0) {
    return "Thick winter clothes to wear";
  } else if (temperature > 0 && temperature <= 10) {
    return "Sweater and long pants to wear";
  } else if (temperature > 10 && temperature <= 20) {
    return "Light or cotton clothes to wear";
  } else {
    return "shorts and a t-shirt to wear";
  }
}

const clothesToWear = useTypeOfClothes(27);
console.log(clothesToWear); // Logs out: "shorts and a t-shirt to wear"
