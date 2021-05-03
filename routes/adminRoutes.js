
const express = require('express');

const controllerImports = require('../util/controllerImports');

const isAuth = require('../middleware/is-auth');
const isAdmin = require('../middleware/is-admin');

const router = express.Router();

router.post('/add-country', isAuth, isAdmin, controllerImports.countryController.addCountry);
router.post('/add-airplane', isAuth, isAdmin, controllerImports.airplaneController.addAirplane)
router.post('/add-destination', isAuth, isAdmin, controllerImports.destinationController.addDestination)
router.post('/add-flight', isAuth, isAdmin, controllerImports.flightController.addFlight);
router.post('/add-package', isAuth, isAdmin, controllerImports.packageController.addPackage);
router.post('/add-user', controllerImports.userController.addUser);
router.post('/add-ticket', isAuth, isAdmin, controllerImports.ticketController.addTicket);

router.get('/airplanes', isAuth, isAdmin, controllerImports.airplaneController.getAirplanes);
router.get('/destinations', isAuth, controllerImports.destinationController.getDestinations);
router.get('/countries', isAuth, controllerImports.countryController.getCountries);
router.get('/flights', controllerImports.flightController.getFlights);
router.get('/packages', isAuth, controllerImports.packageController.getPackages);
router.get('/seats', isAuth, isAdmin, controllerImports.seatController.getPackages);
router.get('/tickets', isAuth, isAdmin, controllerImports.ticketController.getTickets);
router.get('/users', isAuth, isAdmin, controllerImports.userController.getUsers);

router.put('/airplanes/:airplaneId', isAuth, isAdmin, controllerImports.airplaneController.updateAirplane);
router.put('/countries/:code', isAuth, isAdmin, controllerImports.countryController.updateCountry);
router.put('/destinations/:destinationId', isAuth, isAdmin, controllerImports.destinationController.updateDestination);
router.put('/flights/:flightId', isAuth, isAdmin, controllerImports.flightController.updateFlight);
router.put('/packages/:packageId', isAuth, isAdmin, controllerImports.packageController.updatePackage);
router.put('/seats/:seatId', isAuth, isAdmin, controllerImports.seatController.updateSeat);
router.put('/tickets/:ticketId', isAuth, isAdmin, controllerImports.ticketController.updateTicket);
router.put('/users/:userId', isAuth, isAdmin, controllerImports.userController.updateUser);

router.delete('/airplanes/:airplaneId', isAuth, isAdmin, controllerImports.airplaneController.deleteAirplane);
router.delete('/countries/:code', isAuth, isAdmin, controllerImports.countryController.deleteCountry);
router.delete('/destinations/:destinationId', isAuth, isAdmin, controllerImports.destinationController.deleteDestination);
router.delete('/flights/:flightId', isAuth, isAdmin, controllerImports.flightController.deleteFlight);
router.delete('/packages/:packageId', isAuth, isAdmin, controllerImports.packageController.deletePackage);
router.delete('/seats/:seatId', isAuth, isAdmin, controllerImports.seatController.deleteSeat);
router.delete('/tickets/:ticketId', isAuth, isAdmin, controllerImports.ticketController.deleteTicket);
router.delete('/users/:userId', isAuth, isAdmin, controllerImports.userController.deleteUser);

module.exports = router;
