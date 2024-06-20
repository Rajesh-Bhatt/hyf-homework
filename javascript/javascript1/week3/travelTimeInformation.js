//Travel Time Information Program:

const travelInformation = {
  speed: "50 km/h",
  destinationDistance: "432 km",
};

function calculateTravelTime({ speed, destinationDistance }) {
  const newSpeed = parseInt(travelInformation.speed);
  const newDestinationDistance = parseInt(
    travelInformation.destinationDistance
  );
  const time = newDestinationDistance / newSpeed;
  const hours = Math.floor(time);
  const minutes = Math.floor((time - hours) * 60);
  return `${hours} hours and ${minutes} minutes`;
}

const travelTime = calculateTravelTime(travelInformation);
console.log(travelTime); // Log out: "8 hours and 38 minutes"
