const express = require('express');
const routerdel = express.Router();
const { deleteUser } = require('../../App/controller/controller');

routerdel.delete('/userdel/:id', deleteUser);

module.exports = routerdel;