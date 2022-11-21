require('dotenv').config();
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');

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
    //validação da senha
    const valida = (hpass, userpass) => {
       return new Promise(resolve => {
        bcrypt.compare(userpass, hpass, (err, res) => {
            resolve(res);
        });
       });
    }

    //catch das informações do frontend
    const { nickname, password } = req.body;
    
        //OBTENÇÃO DOS DADOS DO USUARIO
        const user = await usuario.findOne({
            attributes: ['id', 'nickname', 'password'],
            where: {
                nickname: nickname,
                password: password
            }
        });
        
        //validação do hash de senhas
        const isValid = await valida(req.body.password, user.password);

        //JWT
        if (user === null) {
            res.status(404).send('User not found')
        } else if(!isValid){
            const id = user.id;
            const token = jwt.sign({ id }, process.env.JWT_KEY, {
                expiresIn: 300 // expira em 5min
            });
            return res.json({ auth: true, token: token });
        } else {
            res.status(500).send('no anywere here');
        }
}


async function createUser(req, res) {
    const { nickname, password,
        classe, jogos,
        personagem } = req.body;

    console.log(nickname);
    console.log(password);

    const password_hash = await bcrypt.hash(password, 12);

    usuario.create({
        nickname: nickname,
        password: password_hash,
        classe: classe,
        jogos: jogos,
        personagem: personagem
    });
    try {
        res.status(200).send('User created');
    } catch (error) {
        res.sendStatus(500);
    }
}//create user


module.exports = {
    users,
    findUser,
    updateUser,
    deleteUser,
    loginUser,
    createUser
};