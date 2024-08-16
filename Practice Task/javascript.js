[
  "make dinner",
  "wash clothes",
  "watch youtube",
  "play cricket",
  "sing songs",
].forEach(function (value, index) {
  if (value === "wash clothes") {
    return;
  }
  console.log(index);
  console.log(value);
});

const regularFunction = function (param, param2) {
  console.log("Regular Hello");
  return 5;
};
regularFunction();

const arrowFunction = (param, param2) => {
  console.log("Arrow Hello");
  return 5;
};
arrowFunction();

const oneParam = (param) => {
  console.log(param + 1);
};
oneParam(6);

const oneLine = () => {
  return 3 + 6;
};
console.log(oneLine());
