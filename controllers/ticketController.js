const Ticket = require("../models/ticket");
const ticketService = require("../services/ticketService");
const { validationResult } = require("express-validator");
const stripe = require('stripe')('sk_test_51Jc94jKV4HDtsqkA7XHzu9TjHdew7haphQsrNokqvTLaP1fEsK9hX63XtU8STF8ZJJ6h5OJiE44049yBZ0D4NBoS00hEOWGEwz');

exports.addTicket = (req, res, next) => {
  const validationErrors = validationResult(req);
  if (!validationErrors.isEmpty()) {
    return res.status(422).send("Validation failed!");
  }

  ticketService
    .addTicket(req.body)
    .then((result) => {
      if (
        result == "Error: No package found!" ||
        result == "Error: No user found!" ||
        result == "Error: No seat found!"
      )
        res.status(404).send(result.toString());
      res.status(201).json(result);
    })
    .catch((err) => {
      res.status(500).send("Internal server error: " + err.toString());
    });
};

exports.stripeHandler = async (req, res, next) => {
  console.log(req.body);
  const session = await stripe.checkout.sessions.create({
    line_items: [
      {
        price: 'price_1JcTfGKV4HDtsqkA4ywk7QPj',
        quantity: 1,
      },
    ],
    payment_method_types: [
      'card',
    ],
    mode: 'payment',
    success_url: 'http://localhost:3000/success?success=true&packageId=' + req.body.packageId + '&userId=' + req.body.userId + '&flightId=' + req.body.flightId + '&seatId=' + req.body.seatId,
    cancel_url: `http://localhost:3000/failed?canceled=true`,
  });
  res.json({url: session.url});
}


exports.getTickets = (req, res, next) => {
  Ticket.findAll()
    .then((ticket) => {
      res.json(ticket);
    })
    .catch((err) => {
      console.log(err);
    });
};

exports.updateTicket = (req, res, next) => {
  Ticket.findByPk(req.body.id)
    .then((ticket) => {
      (ticket.price = req.body.price),
        (ticket.packageId = req.body.packageId),
        (ticket.userId = req.body.userId),
        (ticket.seatId = req.body.seatId);
      return ticket.save();
    })
    .then((result) => {
      console.log(result);
      res.sendStatus(200);
    })
    .catch((err) => {
      console.log(err);
    });
};

exports.deleteTicket = (req, res, next) => {
  Ticket.findByPk(req.body.id)
    .then((ticket) => {
      ticket.destroy();
    })
    .catch((err) => {
      console.log(err);
    });
};
