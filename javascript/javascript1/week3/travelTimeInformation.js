//Travel Time Information Program:

const travelInformation = {
  speed: "50 km/h",
  destinationDistance: "432 km",
};

function calculateTravelTime({ speed, distance }) {
  const newSpeed = parseInt(travelInformation.speed);
  const newDistance = parseInt(travelInformation.destinationDistance);
  const time = newDistance / newSpeed;
  const hours = Math.floor(time);
  const minutes = Math.floor((time - hours) * 60);

  const conditionsCheckArray = [
    !newSpeed == 0,
    newSpeed > 0,
    !newDistance == 0,
    newDistance > 0,
    newSpeed === "" || newSpeed <= 200,
    newDistance === "" || newDistance <= 10000,
    isNaN.newSpeed || isNaN.newDistance,
  ];

  if (!conditionsCheckArray.includes(false)) {
    return `${hours} hours and ${minutes} minutes`;
  } else {
    return "Invalid value. Please provide a correct value within a range (speed: 1 - 200 and distance: 1 -10000.";
  }
}
const travelTime = calculateTravelTime(travelInformation);
console.log(travelTime); // Log out: "8 hours and 38 minutes"
