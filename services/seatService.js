const Seat = require("../models/seat");

function getSeats() {
  return new Promise((resolve, reject) => {
    const queryResult = Seat.findAll();
    if (queryResult) {
      resolve(queryResult);
    } else {
      reject(new Error("Error"));
    }
  });
}

function getAvailableSeatForPackage(seatInfo) {
  return new Promise((resolve, reject) => {
    const queryResult = Seat.findOne({
      where : {
        class : seatInfo.class,
        reserved : 0,
        flightId : seatInfo.flightId
      }
    });
    if(queryResult) {
      resolve(queryResult);
    } else {
      reject(new Error("Available Seat Method Error"));
    }
  }) 
}

function getSeatsForFlight(flightId) {
  return new Promise((resolve, reject) => {
    const queryResult = Seat.findAll({
      where: {
        flightId: flightId,
        reserved: 0
      }
    });
    if (queryResult) {
      resolve(queryResult);
    } else {
      reject(new Error("Error"));
    }
  });
}

function updateSeat(seatUpdateData) {
  return new Promise((resolve, reject) => {
    const seat = Seat.findByPk(seatUpdateData.id).then((seat) => {
      if (!seat) {
        reject(new Error("No seat found!"));
      } else {
        seat.seatNumber = seatUpdateData.seatNumber;
        seat.rowNumber = seatUpdateData.rowNumber;
        seat.flightId = seatUpdateData.flightId;
        seat.save();
      }
    });
    if (seat) {
      resolve(seat);
    } else {
      reject(new Error("Error"));
    }
  });
}

module.exports.getSeats = getSeats;
module.exports.getSeatsForFlight = getSeatsForFlight;
module.exports.updateSeat = updateSeat;
module.exports.getAvailableSeatForPackage = getAvailableSeatForPackage;