//Smart Phone Usage/activities Application:

const activities = [];

//Adding activities:
function addActivity(date, activity, duration) {
  activities.push({ date, activity, duration });
}
addActivity("23/7-18", "Youtube", 50);
addActivity("09/3-22", "Facebook", 100);
addActivity("13/11-24", "Instagram", 170);

console.log(activities);

//Show my status
function showStatus(activities) {
  // Set the usage limit (in minutes)
  const usageLimit = 60; // 1 hour
  let totalMinutes = activities.reduce(
    (sum, activity) => sum + activity.duration,
    0
  );
  const currentUsage = totalMinutes;
  if (currentUsage > usageLimit) {
    console.log("You have reached your limit, no more smartphoning for you!");
  } else {
    console.log(
      `You have used ${currentUsage} minutes of your ${usageLimit} minutes.`
    );
  }
  // checking the activity whether that is empty or not:
  if (activities.length === 0) {
    console.log("Add some activities before calling showStatus.");
  } else {
    totalMinutes;
    return `You have added ${activities.length} activities. They amount to ${totalMinutes} min. of usage`;
  }
}
console.log(showStatus(activities)); // will log out this "You have added 3 activities. They amount to 125 min. of usage"

//function for calculating the activity a user has spent the most time on:
function showSpentTheMostTimeOn(activity) {
  let max = 0; // 20

  for (let i = 0; i < activity.length; i++) {
    if (activity[i].duration > max) {
      max = activity[i].duration;
    }
  }

  return `The time you've spent most on: ${max} minutes.`;
}

console.log(showSpentTheMostTimeOn(activities));
