//4. Ez Namey (Startup name generator) Optional


//First array Names:
let firstWords = [
    "Gorgeous",
    "Creative",
    "Extraordinary",
    "Cool",
    "Smart",
    "Hero",
    "Ultimate",
    "NextGen",
    "Super",
    "Wisdom",
  ];
  
  //Second array Names:
  let secondWords = [
    "Vision",
    "Thought",
    "Concepts",
    "Technologies",
    "Systems",
    "Preparation",
    "Inventions",
    "Process",
    "Tools",
    "Product",
  ];
  const randomNumber = Math.floor(Math.random() * 10);
  let startupName = firstWords[randomNumber] + " " + secondWords[randomNumber];
  let nameLength = startupName.length;
  console.log(`The startup: "${startupName}" contains ${nameLength} characters.`);
  
  