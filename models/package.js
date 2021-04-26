const Sequelize = require('sequelize');
const sequelize = require('../util/database');

const Package = sequelize.define('package', {
    id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
    },
    class: {
        type: Sequelize.STRING,
        allowNull: false
    },
    classPackage:{
        type: Sequelize.STRING,
        allowNull: false
    }
});
module.exports = Package;