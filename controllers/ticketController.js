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

exports.updateTicket = (req, res, next) => {
    Ticket.findByPk(req.body.id)
    .then(ticket => {
        ticket.price = req.body.price,
        ticket.packageId = req.body.packageId,
        ticket.userId = req.body.userId,
        ticket.seatId = req.body.seatId
        return ticket.save();
    }).then(result => {
        console.log(result);
        res.sendStatus(200);
    }).catch(err => {
        console.log(err);
    }) 
};


exports.deleteTicket = (req, res, next) => {
    Ticket.findByPk(req.body.id).then(ticket => {
        ticket.destroy();
    })
    .catch(err => {
        console.log(err);
    })
};