
const express = require('express');

const controllerImports = require('../util/controllerImports');

const isAuth = require('../middleware/is-auth');
const isAdmin = require('../middleware/is-admin');

const router = express.Router();

router.post('/add-country', isAuth, isAdmin, controllerImports.countryController.addCountry);
router.post('/add-airplane', isAuth, isAdmin, controllerImports.airplaneController.addAirplane)
router.post('/add-destination', controllerImports.destinationController.addDestination)
router.post('/add-flight',  controllerImports.flightController.addFlight);
router.post('/add-package', isAuth, isAdmin, controllerImports.packageController.addPackage);
router.post('/add-user', controllerImports.userController.addUser);
router.post('/add-ticket', controllerImports.ticketController.addTicket);

router.get('/airplanes', isAuth, isAdmin, controllerImports.airplaneController.getAirplanes);
router.get('/destinations/:destinationId', controllerImports.destinationController.getDestinationsById);
router.get('/destinations', controllerImports.destinationController.getDestinations);
router.get('/countries', isAuth, controllerImports.countryController.getCountries);
router.get('/flights', controllerImports.flightController.getFlights);
router.get('/flightsByDestination/', controllerImports.flightController.getFlightsByDestination);
router.get('/allFlights', controllerImports.flightController.getAllFlights)
router.get('/packages', controllerImports.packageController.getPackages);
router.get('/seats', isAuth, isAdmin, controllerImports.seatController.getSeats);
router.get('/tickets', controllerImports.ticketController.getTickets);
router.get('/users', isAuth, isAdmin, controllerImports.userController.getUsers);
router.get('/seatsbyflight/:flightId', controllerImports.seatController.getSeatsForFlight);
router.get('/flightById/:flightId', controllerImports.flightController.getFlightsById);

router.put('/airplanes/:airplaneId', isAuth, isAdmin, controllerImports.airplaneController.updateAirplane);
router.put('/countries/:code', isAuth, isAdmin, controllerImports.countryController.updateCountry);
router.put('/destinations/:destinationId', isAuth, isAdmin, controllerImports.destinationController.updateDestination);
router.put('/updateFlight/',  controllerImports.flightController.updateFlight);
router.put('/packages/:packageId', isAuth, isAdmin, controllerImports.packageController.updatePackage);
router.put('/seats/:seatId', isAuth, isAdmin, controllerImports.seatController.updateSeat);
router.put('/tickets/:ticketId', isAuth, isAdmin, controllerImports.ticketController.updateTicket);
router.put('/users/:userId', isAuth, isAdmin, controllerImports.userController.updateUser);

router.delete('/airplanes/:airplaneId', isAuth, isAdmin, controllerImports.airplaneController.deleteAirplane);
router.delete('/countries/:code', isAuth, isAdmin, controllerImports.countryController.deleteCountry);
router.delete('/destinations/:destinationId', isAuth, isAdmin, controllerImports.destinationController.deleteDestination);
router.delete('/deleteFlight/',  controllerImports.flightController.deleteFlight);
router.delete('/packages/:packageId', isAuth, isAdmin, controllerImports.packageController.deletePackage);
router.delete('/seats/:seatId', isAuth, isAdmin, controllerImports.seatController.deleteSeat);
router.delete('/tickets/:ticketId', isAuth, isAdmin, controllerImports.ticketController.deleteTicket);
router.delete('/users/:userId', isAuth, isAdmin, controllerImports.userController.deleteUser);

module.exports = router;
