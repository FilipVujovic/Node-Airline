const Sequelize = require('sequelize');
const sequelize = require('../util/database');
const country = require('./country');

const Destination = sequelize.define('destination', {
    id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
    },
    airportCode: {
        type: Sequelize.STRING,
        allowNull: false
    },
    airportFullName: {
        type: Sequelize.STRING,
        allowNull: false
    }, 
    city: {
        type: Sequelize.STRING,
        allowNull: false
    }
});


module.exports = Destination;