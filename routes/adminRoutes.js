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
module.exports = router;
