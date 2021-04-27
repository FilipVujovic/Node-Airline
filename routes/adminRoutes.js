const path = require('path');

const express = require('express');

const countryController = require('../controllers/countryController');
const airplaneController = require('../controllers/airplaneController');
const destinationController = require('../controllers/destinationController');
const flightController = require('../controllers/flightController');
const packageController = require('../controllers/packageController');
const userController = require('../controllers/userController');
const ticketController = require('../controllers/ticketController');
const seatController = require('../controllers/seatController');
const router = express.Router();

router.post('/add-country', countryController.addCountry);
router.post('/add-airplane', airplaneController.addAirplane)
router.post('/add-destination', destinationController.addDestination)
router.post('/add-flight', flightController.addFlight);
router.post('/add-package', packageController.addPackage);
router.post('/add-user', userController.addUser);
router.post('/add-ticket', ticketController.addTicket);

router.get('/airplanes', airplaneController.getAirplanes);
router.get('/destinations', destinationController.getDestinations);
router.get('/countries', countryController.getCountries);
router.get('/flights', flightController.getFlights);
router.get('/packages', packageController.getPackages);
router.get('/seats', seatController.getPackages);
router.get('/tickets', ticketController.getTickets);
router.get('/users', userController.getUsers);

router.put('/airplanes/:airplaneId', airplaneController.updateAirplane);
router.put('/countries/:code', countryController.updateCountry);
router.put('/destinations/:destinationId', destinationController.updateDestination);
router.put('/flights/:flightId', flightController.updateFlight);
router.put('/packages/:packageId', packageController.updatePackage);
router.put('/seats/:seatId', seatController.updateSeat);
router.put('/tickets/:ticketId', ticketController.updateTicket);
router.put('/users/:userId', userController.updateUser);

router.delete('/airplanes/:airplaneId', airplaneController.deleteAirplane);
router.delete('/countries/:code', countryController.deleteCountry);
router.delete('/destinations/:destinationId', destinationController.deleteDestination);
router.delete('/flights/:flightId', flightController.deleteFlight);
router.delete('/packages/:packageId', packageController.deletePackage);
router.delete('/seats/:seatId', seatController.deleteSeat);
router.delete('/tickets/:ticketId', ticketController.deleteTicket);
router.delete('/users/:userId', userController.deleteUser);
module.exports = router;
