const Sequelize = require('sequelize');

const sequelize = require('../util/database');

const Country = sequelize.define('country', {
    code: {
        type: Sequelize.STRING,
        allowNull: false,
        primaryKey: true
    },
    fullName: {
        type: Sequelize.STRING,
        allowNull: false
    }
});

module.exports = Country;