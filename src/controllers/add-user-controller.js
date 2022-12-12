const User = require('../../models/User');
const {Sequelize, sequelize} = require('../conexao');
const bcrypt = require('bcrypt');

async function addUser(req,res) {

    let email = req.body.email;
    let senha = req.body.senha;

    let passwdEncrypt = await bcrypt.hash(senha, 10);

    await User.create({
        email: email,
        senha: passwdEncrypt
    })
    .then(async(success) => {
        return res.json(await User.findOne({where:{email: email}}).then(data => {return data}));
    })
    .catch(error => {
        res.status(500).json({mensagem:"Erro ao criar um novo usuário."});
    });
}

module.exports = addUser;