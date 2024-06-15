//Flight booking getFullname function with use of formals:
function getFullname(firstname, surname, useFormalName, isMistress) {
  if (firstname === "" && surname === "") {
    return "Please enter your firstname and surname";
  } else if (useFormalName) {
    if (isMistress) {
      return `Mistress ${firstname} ${surname}`;
    } else {
      return `Lord ${firstname} ${surname}`;
    }
  } else {
    return `${firstname} ${surname}`;
  }
}

const fullName1 = getFullname("Rajesh", "Bhatt", false, false); //Case for without Formal Name
const fullName2 = getFullname("Benjamin", "Hughes", true, false); //Case for lord
const fullName3 = getFullname("Joan", "Nielsen", true, true); //Case for mistress
const fullName4 = getFullname("", "", true, true); //Case for emply string firstname and surname

console.log(fullName1); //Printing values in console
console.log(fullName2); //Printing values in console
console.log(fullName3); //Printing values in console
console.log(fullName4); //Printing values in console
