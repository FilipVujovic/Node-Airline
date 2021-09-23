const Sequelize = require('sequelize');
const Airplane = require('./airplane');
const Destination = require('./destination');
const sequelize = require('../util/database');
 
const Flight = sequelize.define('flight', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true,
    },
    departureDate: {
        type: Sequelize.DATEONLY,
        allowNull: false
    },
    departureTime: {
        type: Sequelize.TIME,
        allowNull: false
    },
    arrivalDate: {
        type: Sequelize.DATEONLY,
        allowNull: false
    },
    arrivalTime: {
        type: Sequelize.TIME,
        allowNull: false
    },
    departureAirport: {
        type: Sequelize.STRING,
        allowNull: false
    },
    departureCity: {
        type: Sequelize.STRING,
        allowNull: false
    }
});
module.exports = Flight;