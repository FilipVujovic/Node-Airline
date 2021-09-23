const Ticket = require("../models/ticket");
const Package = require("../models/package");
const User = require("../models/user");
const seatService = require("../services/seatService");
const stripe = require('stripe')('pk_test_51Jc94jKV4HDtsqkAfUB5wcN9PNvB8mOadO102NFc7sa2huA19IqRDdRNyf4ywsMzSHknC9hL8WTUr1wJrnaGGsqy00f419yOBF');

async function addTicket(ticketInputData) {
  const package = await Package.findByPk(ticketInputData.packageId);
  const user = await User.findByPk(ticketInputData.userId);
  const seatInfo = {
    class: ticketInputData.packageId,
    flightId: ticketInputData.flightId
  };
  const seat = await seatService.getAvailableSeatForPackage(seatInfo);

  if (package != null && user != null && seat != null) {
    return new Promise((resolve, reject) => {
      const result = Ticket.create({
        price: ticketInputData.price,
        packageId: ticketInputData.packageId,
        userId: ticketInputData.userId,
        seatId: seat.id,
        flightId: ticketInputData.flightId
      });
      if (result) {
        resolve(result);
      } else {
        reject(new Error("Error"));
      }
    });
  } else if (!package) {
    return new Promise((reject) => {
      reject(new Error("No package found!"));
    });
  } else if (!seat) {
    return new Promise((reject) => {
      reject(new Error("No seat found!"));
    });
  } else if (!user) {
    return new Promise((reject) => {
      reject(new Error("No user found!"));
    });
  }
}
module.exports.addTicket = addTicket;
