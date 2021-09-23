const Sequelize = require('sequelize');

const sequelize = require('../util/database');

const Airplane = sequelize.define('airplane', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    make: {
        type: Sequelize.STRING,
        allowNull: false
    },
    model: {
        type: Sequelize.STRING,
        allowNull: false
    },
    capacity: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    firstClassCap : {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    buisnessClassCap : {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    economyClassCap : {
        type: Sequelize.INTEGER,
        allowNull: false
    }
});
module.exports = Airplane;