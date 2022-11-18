require('dotenv').config();
const jwt = require('jsonwebtoken');

const usuario = require('../model/model');

const users = async function buscaUsuario(req, res) {
    const user = await usuario.findAll();
    res.json(user);
} //controller tras todas as informações da tabela

async function findUser(req, res) {
    await usuario.findByPk(req.params.id).then((result) => res.json(result));
}//READ

async function updateUser(req, res) {
    await usuario.update({
        nickname: req.body.nickname,
        password: req.body.password
    },
        {
            where: {
                id: req.params.id,
            }
        }
    );
    usuario.findByPk(req.params.id).then((result) => res.json(result));
}//UPDATE


async function deleteUser(req, res) {
    await usuario.destroy({
        where: {
            id: req.params.id,
        }
    });
    usuario.findAll().then((result) => res.json(result));
}//DELETE

 async function loginUser(req, res) {
    //catch das informações do frontend
    const { nickname, password } = req.query;

    //OBTENÇÃO DOS DADOS DO USUARIO
    const user = await usuario.findOne({
        attributes: ['id', 'nickname', 'password'],
        where: {
            nickname: nickname,
            password: password
        }
    });
    console.log()
    //JWT validação
    if (user === null) {
        res.status(404).send('User not found')
    } else if(user.nickname === nickname && user.password === password){
        const id = user.id;
        const token = jwt.sign({id}, process.env.JWT_KEY, {
            expiresIn: 300 // expira em 5min
        });
        return res.json({ auth: true, token: token});
    } else {
        res.status(500).send('Internal problem');
    }
}


module.exports = {
    users,
    findUser,
    updateUser,
    deleteUser,
    loginUser
};