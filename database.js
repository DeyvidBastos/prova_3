const { Sequelize } = require('sequelize');
const conexao = new Sequelize('postgresql://deyvid:gO-RmfCFaIa9CF9TCA2YDg@prova3ruan-3895.j77.aws-eu-central-1.cockroachlabs.cloud:26257/defaultdb?sslmode=verify-full')

async function connectToDatabase() {
    try {
        await conexao.authenticate();
        console.log('Conectado com sucesso');
    } catch (error) {
        console.error('Erro ao conectar', error);
    }
}

connectToDatabase();

module.exports = conexao;
