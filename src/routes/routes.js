const express = require('express');
const router = express.Router();

const usuario = require('../../App/model/model');

router.get('/', (req, res) => {
    res.send('Its Works!');
});

router.post('/reg' , (req, res) => {
    const { nickname, password } = req.body;

    console.log(nickname);
    console.log(password);

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