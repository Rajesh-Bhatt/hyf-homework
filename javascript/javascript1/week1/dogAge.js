//2. Goodboy-Oldboy (A dog age calculator)

const dogYearOfBirth = 2016;
const dogYearFuture = 2027;
const shouldShowResultInDogYears = true;

const dogYear;
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
