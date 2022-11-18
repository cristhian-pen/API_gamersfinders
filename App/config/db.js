const { Sequelize } = require('sequelize');

const sequelize = new Sequelize( 'DBAGF', 'dbagf', 'ironmharkv10', {
    host:'localhost',
    dialect:'mysql'
});

module.exports = sequelize;
