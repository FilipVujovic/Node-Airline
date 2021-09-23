const express = require("express");
const router = express.Router();
const controllerImports = require("../util/controllerImports");
const {valiadteToken, isAdmin} = require('../controllers/authController');
const { check } = require("express-validator");

router.post('/add-ticket', controllerImports.ticketController.addTicket);


router.get('/tickets', controllerImports.ticketController.getTickets);


router.put('/tickets/:ticketId', controllerImports.ticketController.updateTicket);


router.delete('/tickets/:ticketId', controllerImports.ticketController.deleteTicket);

router.post('/stripe',controllerImports.ticketController.stripeHandler);

module.exports = router;
