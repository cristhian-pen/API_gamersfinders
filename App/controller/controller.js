const usuario = require('../model/model');

const users = async function buscaUsuario(req, res) {
    const user =  await usuario.findAll();
    res.json(user);
} //controller tras todas as informações da tabela

async function findUser( req, res) {
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
            id:req.params.id,
        }
    });
    usuario.findAll().then((result) => res.json(result));   
}//DELETE


module.exports = { users, findUser, updateUser, deleteUser };