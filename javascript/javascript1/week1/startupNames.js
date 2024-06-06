//4. Ez Namey (Startup name generator) Optional


//First array Names:
const firstWords = [
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
  const secondWords = [
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
  const startupName = firstWords[randomNumber] + " " + secondWords[randomNumber];
  const nameLength = startupName.length;
  console.log(`The startup: "${startupName}" contains ${nameLength} characters.`);
  
  
