// Series that I watched and the duration:
const seriesDurations = [
  {
    title: "Criminal Minds",
    days: 3,
    hours: 1,
    minutes: 0,
  },
  {
    title: "Sweet Tooth",
    days: 2,
    hours: 10,
    minutes: 35,
  },
  {
    title: "Vikings",
    days: 5,
    hours: 6,
    minutes: 20,
  },
  {
    title: "House of the Dragon",
    days: 1,
    hours: 10,
    minutes: 47,
  },
];

function logOutSeriesText() {
  let totalPercentage = 0; // general percent of life

  for (let series of seriesDurations) {
    // general time of watching every movie in minutes
    const totalMinutes =
      series.days * 24 * 60 + series.hours * 60 + series.minutes; // this converts days to minutes. * by 24 converts days to hours, * by 60 converts hours to minutes thats giving the total number of minutes per day
    const lifespanMinutes = 80 * 365 * 24 * 60; // total  minutes in 80 years

    // calculating % of time that spended for watching move of life time
    const percentage = (totalMinutes / lifespanMinutes) * 100;
    // add the percentage of this series to the total percentage
    totalPercentage += percentage;
    // log the information about time spent watching this series
    console.log(`${series.title} took ${percentage.toFixed(3)}% of my life`);
  }
  // log the total percentage of time spent watching all series
  console.log(`In total that is ${totalPercentage.toFixed(3)}% of my life`);
}
logOutSeriesText();
