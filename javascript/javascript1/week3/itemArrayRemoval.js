//Array item removal program:

const names = [
  "peter",
  "ahmad",
  "yana",
  "kristina",
  "rasmus",
  "samuel",
  "katrine",
  "tala",
];
const nameToRemove = "ahmad";
const index = names.indexOf(nameToRemove);
if (index > -1) {
  // only splice array when the item is found
  names.splice(index, 1); // 2nd parameter means remove one item only i.e. "Ahmad"
} else {
  console.log("Name is not available in the array.");
}
console.log(names); // ['peter', 'yana', 'kristina', 'rasmus', 'samuel', 'katrine', 'tala']
