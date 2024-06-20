//Array item removal program:

const names = [
  "Peter",
  "Ahmad",
  "Yana",
  "kristina",
  "Rasmus",
  "Samuel",
  "katrine",
  "Tala",
];
const nameToRemove = "Ahmad";
const index = names.indexOf(nameToRemove);
if (index > -1) {
  // only splice array when the item is found
  names.splice(index, 1); // 2nd parameter means remove one item only i.e. "Ahmad"
} else {
  console.log("Name is not available in the array.");
}
console.log(names); // ['Peter', 'Yana', 'kristina', 'Rasmus', 'Samuel', 'katrine', 'Tala']
