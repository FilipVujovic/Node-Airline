const Destination = require("../models/destination");
const Country = require("../models/country");

function addDestination(airplaneInputData) {
  return new Promise((resolve, reject) => {
    Country.findByPk(airplaneInputData.code).then((countryRes) => {
      if (!countryRes) reject(new Error("Unknown country code!"));
      const result = Destination.create({
        airportCode: airplaneInputData.airportCode,
        airportFullName: airplaneInputData.airportFullName,
        countryCode: airplaneInputData.code,
        city: airplaneInputData.city
      });
      if (result) {
        resolve(result);
      }
      reject(new Error("Error"));
    });
  });
}

function getDestinations() {
  return new Promise((resolve, reject) => {
    const queryResult = Destination.findAll();
    if (queryResult) {
      resolve(queryResult);
    } else {
      reject(new Error("Error"));
    }
  });
}

function deleteDestination(destinationId) {
  return new Promise((resolve, reject) => {
    const queryResult = Destination.findByPk(destinationId).then(
      (destination) => {
        if (!destination) {
          reject(new Error("No destination found!"));
        } else {
          destination.destroy();
          resolve(queryResult);
        }
        reject(new Error("Error"));
      }
    );
  });
}

module.exports.addDestination = addDestination;
module.exports.getDestinations = getDestinations;
module.exports.deleteDestination = deleteDestination;
