const { DataTypes } = require('sequelize');
const sequelize = require('../utils/connection');

const City = sequelize.define('city', {
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    area: {
        type: DataTypes.DECIMAL,
        allowNull: false
    },
    isCapital: {
        type: DataTypes.BOOLEAN,
        allowNull: false
    },
    // countryId
});

module.exports = City;
