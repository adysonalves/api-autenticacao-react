const {Sequelize, sequelize} = require('../src/conexao');

const User = sequelize.define('usuarios', {
    id:{
        type: Sequelize.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
    },
    email:{
        type: Sequelize.STRING,
        allowNull: false,
        unique: true
    },
    senha:{
        type: Sequelize.STRING,
        allowNull: false
    }
},
{
    timestamps: false
}
);

sequelize.sync()

module.exports = User;