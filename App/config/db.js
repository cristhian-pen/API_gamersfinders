const { Sequelize } = require('sequelize');

const sequelize = new Sequelize( 'root', 'Ironmharkv10#', 'DBAGF', {
    host:'54.94.231.198',
    dialect:'mysql'
});

module.exports = sequelize;
