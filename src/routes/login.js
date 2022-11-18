const express = require('express');
const routerlog = express.Router();

const { loginUser } = require('../../App/controller/controller');

routerlog.get('/login', loginUser);

module.exports = routerlog;