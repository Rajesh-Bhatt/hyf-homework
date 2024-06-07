//2. Goodboy-Oldboy (A dog age calculator)

const dogYearOfBirth = 2016;
const dogYearFuture = 2027;
const shouldShowResultInDogYears = true;

let dogYear = dogYearFuture - dogYearOfBirth; 
dogYear *=7;

if (shouldShowResultInDogYears) {
  console.log(`Your dog will be ${dogYear} dog years old in ${dogYearFuture}`);
} else {
  console.log(`Your dog will be ${dogYear} human years old in ${dogYearFuture}`);
}
