//Event Application Function
function getEventWeekday(daysFromToday) {
  const dateToday = new Date(); //to get the exact date and time
  const dayNumber = dateToday.getDay(); //returns a number of days from 0-6 (starts from sunday)

  const nameOfDays = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  const indexes = daysFromToday + dayNumber;
  return nameOfDays[indexes % 7];
}

//Uses Examples:
console.log(getEventWeekday(4));
console.log(getEventWeekday(8));
