const express = require('express');
const {findUser, users} = require('../../App/controller/controller');

const routeri = express.Router();

routeri.get('/info/:id', findUser);
routeri.get('/info', users);

module.exports = routeri;