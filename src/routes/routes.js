const { json } = require('body-parser');
const express = require('express');
const router = express.Router();

const usuario = require('../../App/model/model');

router.get('/', (req, res) => {
    res.send('Its Works!');
});

router.post('/register' + json, (req, res) => {
    const { nickname, password } = req.body;

    usuario.create({
        nickname: nickname,
        password: password
    });
    try {
        res.status(200).send('User created');
    } catch (error) {
        res.sendStatus(500);
    }
});

module.exports = router;