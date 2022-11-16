const express = require('express');
const routerup = express.Router();

const { updateUser } = require('../../App/controller/controller');

routerup.put('/userupd/:id', updateUser);


module.exports = routerup;