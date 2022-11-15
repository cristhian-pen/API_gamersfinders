const { DataTypes, Model } = require('sequelize');
const sequelize = require('../config/db');

const usuario = sequelize.define('usuarios', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    nickname: {
        type: DataTypes.STRING,
        allowNull: false
    },
    password: {
        type: DataTypes.STRING
    },
    classe: {
        type: DataTypes.STRING,
        allowNull: true,
        autoIncrement: false
    }
});

usuario.sync();

module.exports = usuario;




