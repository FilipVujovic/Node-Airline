const Sequelize = require('sequelize');

const sequelize = require('../util/database');

const Ticket = sequelize.define('ticket', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    price: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    packageId: {
        type: Sequelize.INTEGER,
        allowNull: false
    }
});
module.exports = Ticket;