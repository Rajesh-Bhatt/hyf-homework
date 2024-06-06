//2. Goodboy-Oldboy (A dog age calculator)

let dogYearOfBirth = 2016;
let dogYearFuture = 2027;
let shouldShowResultInDogYears = true;

let dogYear;
if (shouldShowResultInDogYears) {
  dogYear = dogYearFuture - dogYearOfBirth;
} else {
  dogYear = (dogYearFuture - dogYearOfBirth) * 7;
}

if (shouldShowResultInDogYears) {
  console.log(`Your dog will be ${dogYear} dog years old in ${dogYearFuture}`);
} else {
  console.log(`Your dog will be ${dogYear} human years old in ${dogYearFuture}`);
}
