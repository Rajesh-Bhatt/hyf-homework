//Flight booking getFullname function with use of formals:
function getFullName(firstName, surName, useFormalName, isMadam) {
  const fullName = firstName + " " + surName;
  if (!firstName && !surName) {
    return "Please enter your Firstname and Surname";
  } else if (useFormalName) {
    if (isMadam) {
      return "Madam " + fullName;
    } else {
      return "Lord " + fullName;
    }
  } else {
    return fullName;
  }
}

const fullName1 = getFullName("Rajesh", "Bhatt", false); //Case for without Formal Name
const fullName2 = getFullName("Benjamin", "Hughes", true, false); //Case for lord (male) user
const fullName3 = getFullName("Joan", "Nielsen", undefined); //Case for undefined useFormalName user(will return fullname only)
const fullName4 = getFullName("", "", true, true); //Case for empty string firstName and SurName

console.log(fullName1); //Printing values in console
console.log(fullName2); //Printing values in console
console.log(fullName3); //Printing values in console
console.log(fullName4); //Printing values in console
