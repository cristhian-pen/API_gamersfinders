const express = require('express');
const routeri = express.Router();

const usuario = require('../../App/model/model');

routeri.post('/info', (req, res) => {
    const { nickname } = req.body;

     const user = usuario.findByPk({
        where: {
            id: nickname
        }
     });
    try {
        res.status(200).json(user)
    } catch (error) {
        res.status(400).send('Not Found!');
    }
})

module.exports = routeri;