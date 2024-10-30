const conexao = require('../database.js');
const { DataTypes } = require('sequelize');

const Vaga = conexao.define('Vaga', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    titulo: {
        type: DataTypes.STRING
    },
    descricao: {
        type: DataTypes.STRING
    },
    cargo: {
        type: DataTypes.STRING
    },
    cidade: {
        type: DataTypes.STRING
    },
    salario: {
        type: DataTypes.FLOAT
    }
}, {
    createdAt: false,
    updatedAt: false,
});

module.exports = {Vaga};
