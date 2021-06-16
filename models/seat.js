const Sequelize = require('sequelize');
const Flight = require('./flight');
const sequelize = require('../util/database');

const Seat = sequelize.define('seat', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    seatNumber: {
        type: Sequelize.STRING,
        allowNull: false
    },
    rowNumber:{
        type: Sequelize.STRING,
        allowNull: false
    },
    reserved: {
        type: Sequelize.BOOLEAN,
        allowNull: false
    }
});
module.exports = Seat;