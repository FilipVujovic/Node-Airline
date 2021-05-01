
const express = require('express');

const isAuth = require('../middleware/is-auth');
const isAdmin = require('../middleware/is-admin');

const countryController = require('../controllers/countryController');
const airplaneController = require('../controllers/airplaneController');
const destinationController = require('../controllers/destinationController');
const flightController = require('../controllers/flightController');
const packageController = require('../controllers/packageController');
const userController = require('../controllers/userController');
const ticketController = require('../controllers/ticketController');
const seatController = require('../controllers/seatController');

const router = express.Router();

router.post('/add-country', isAuth, isAdmin, countryController.addCountry);
router.post('/add-airplane', isAuth, isAdmin, airplaneController.addAirplane)
router.post('/add-destination', isAuth, isAdmin, destinationController.addDestination)
router.post('/add-flight', isAuth, isAdmin, flightController.addFlight);
router.post('/add-package', isAuth, isAdmin, packageController.addPackage);
router.post('/add-user', userController.addUser);
router.post('/add-ticket', isAuth, isAdmin, ticketController.addTicket);

router.get('/airplanes', isAuth, isAdmin, airplaneController.getAirplanes);
router.get('/destinations', isAuth, destinationController.getDestinations);
router.get('/countries', isAuth, countryController.getCountries);
router.get('/flights', isAuth, flightController.getFlights);
router.get('/packages', isAuth, packageController.getPackages);
router.get('/seats', isAuth, isAdmin, seatController.getPackages);
router.get('/tickets', isAuth, isAdmin, ticketController.getTickets);
router.get('/users', isAuth, isAdmin, userController.getUsers);

router.put('/airplanes/:airplaneId', isAuth, isAdmin, airplaneController.updateAirplane);
router.put('/countries/:code', isAuth, isAdmin, countryController.updateCountry);
router.put('/destinations/:destinationId', isAuth, isAdmin, destinationController.updateDestination);
router.put('/flights/:flightId', isAuth, isAdmin, flightController.updateFlight);
router.put('/packages/:packageId', isAuth, isAdmin, packageController.updatePackage);
router.put('/seats/:seatId', isAuth, isAdmin, seatController.updateSeat);
router.put('/tickets/:ticketId', isAuth, isAdmin, ticketController.updateTicket);
router.put('/users/:userId', isAuth, isAdmin, userController.updateUser);

router.delete('/airplanes/:airplaneId', isAuth, isAdmin, airplaneController.deleteAirplane);
router.delete('/countries/:code', isAuth, isAdmin, countryController.deleteCountry);
router.delete('/destinations/:destinationId', isAuth, isAdmin, destinationController.deleteDestination);
router.delete('/flights/:flightId', isAuth, isAdmin, flightController.deleteFlight);
router.delete('/packages/:packageId', isAuth, isAdmin, packageController.deletePackage);
router.delete('/seats/:seatId', isAuth, isAdmin, seatController.deleteSeat);
router.delete('/tickets/:ticketId', isAuth, isAdmin, ticketController.deleteTicket);
router.delete('/users/:userId', isAuth, isAdmin, userController.deleteUser);

module.exports = router;
