const Ticket = require('../models/ticket');

exports.addTicket = (req, res, next) => {
    Ticket.create({
        price: req.body.price,
        packageId:req.body.packageId,
        userId:req.body.userId,
        seatId: req.body.seatId
    }).then(result => {
        console.log(result);
        res.sendStatus(200);
    }).catch(err => {
        console.log(err);
        res.sendStatus(300);
    })
};


exports.getTickets = (req, res, next) => {
    Ticket.findAll().then((ticket) => {
        res.json(ticket);
    }).catch((err) => {
    console.log(err);
});
};

