const Flight = require("../models/flight");
const Destination = require("../models/destination");
const Airplane = require("../models/airplane");

function addFlight(flightInputInfo) {
  return new Promise((resolve, reject) => {
    Destination.findByPk(flightInputInfo.destinationId).then(
      (destinationResult) => {
        if (!destinationResult) reject(new Error("Unknown destination!"));
      }
    );
    Airplane.findByPk(flightInputInfo.airplaneId).then((airplaneResult) => {
      if (!airplaneResult) reject(new Error("Unknown airplane!"));
      const result = Flight.create({
        departureDate: flightInputInfo.departureDate,
        departureTime: flightInputInfo.departureTime,
        arrivalDate: flightInputInfo.arrivalDate,
        arrivalTime: flightInputInfo.arrivalTime,
        departureAirport: flightInputInfo.departureAirport,
        airplaneId: flightInputInfo.airplaneId,
        destinationId: flightInputInfo.destinationId,
        departureCity: flightInputInfo.departureCity
      });
      if (result) {
        resolve(result);
      } else {
        eject(new Error("Error"));
      }
    });
  });
}

async function getFlightsByDateandDest(payload) {
  if(!payload.city) {
    const flights = await Flight.findAll({
      where: {
        departureDate : payload.date.split(' ')[0],
      }
    });
    return new Promise((resolve, reject) => {
      if (flights) {
        resolve(flights);
      } else {
        reject(new Error("No flights found!"));
      }
    });
  } else {
    const destination = await Destination.findOne({
      where: {
        city: payload.city
      }
    });
    const flights = await Flight.findAll({
      where: {
        departureDate : payload.date.split(' ')[0],
        destinationId : destination.id
      }
    });
    return new Promise((resolve, reject) => {
      if (flights) {
        resolve(flights);
      } else {
        reject(new Error("No flights found!"));
      }
    });
  }
 
 
}

async function getFlightsByDestination(destination) {
  const flights = await Flight.findAll({
    where: {
      destinationId: destination.id
    }
  });
  return new Promise((resolve, reject) => {
    if (flights) {
      resolve(flights);
    } else {
      reject(new Error("No flights found!"));
    }
  });
}

function getFlights() {
  return new Promise((resolve, reject) => {
    const queryResult =  Flight.findAll();
    if(queryResult) {
      resolve(queryResult);
    } else {
      reject(queryResult);
    }
  })
};

function getFlightsByPage(page) {
return new Promise((resolve, reject) => {
  const queryResult = Flight.findAndCountAll({
    offset: (page - 1) * 6,
    limit: 6
  });
  if(queryResult) {
    resolve(queryResult);
  } else {
    reject(queryResult);
  }
})
};

function getFlightsById(flightId) {
  return new Promise((resolve, reject) => {
    const queryResult = Flight.findByPk(flightId);
    if(queryResult) {
      resolve(queryResult);
    } else {
      reject(queryResult);
    }
  })
}

function deleteFlight(flightId) {
  return new Promise((resolve, reject) => {
    const queryResult = Flight.findByPk(flightId).then((flight) => {
      if(!flight) {
        reject(new Error("No flight found!"));
      } else {
        flight.destroy();
        resolve(queryResult);
      }
      reject(new Error("Error"));
    })
  })
}
module.exports.addFlight = addFlight;
module.exports.getFlightsByDestination = getFlightsByDestination;
module.exports.getFlights = getFlights;
module.exports.getFlightsByPage = getFlightsByPage;
module.exports.getFlightsById = getFlightsById;
module.exports.deleteFlight = deleteFlight;
module.exports.getFlightsByDateandDest = getFlightsByDateandDest;