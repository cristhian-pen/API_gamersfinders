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
        type: DataTypes.STRING,
        allowNull:false
    },
    classe: {
        type: DataTypes.STRING,
        allowNull: true
    },
    jogos: {
        type: DataTypes.BLOB,
        allowNull: true
    },
    personagem: {
        type: DataTypes.BLOB,
        allowNull:true
    }
});

usuario.sync();

module.exports = usuario;




