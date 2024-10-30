const {Vaga} = require('../model/Vagas.js');

module.exports = {
    async criarVaga(req, res) {
        const { titulo, descricao, cargo, cidade } = req.body;
        try {
            const vaga = await Vaga.create({ titulo, descricao, cargo, cidade });
            res.status(201).send(vaga);
        } catch (error) {
            console.log(error)
            res.status(400).send({ error: 'Erro ao criar vaga.' });
        }
    },

    async listarVaga(req, res) {
        try {
            const data = await Vaga.findAll();
            res.json(data);
        } catch (error) {
            res.status(400).json({ error: 'Erro ao buscar Vaga.' });
        }
    },

    async mostrarVaga(req, res) {
        const { id } = req.params;
        try {
            const vaga = await Vaga.findByPk(id);
            if (vaga) {
                res.json(vaga);
            } else {
                res.status(404).json({ error: 'Vaga não encontrada.' });
            }
        } catch (error) {
            res.status(400).json({ error: 'Erro ao buscar vaga.' });
        }
    },

    async atualizarVaga(req, res) {
        const { id } = req.params;
        const { titulo, descricao, cargo, cidade } = req.body;
        try {
            const vaga = await Vaga.findByPk(id);
            if (vaga) {
                await vaga.update({ titulo, descricao, cargo, cidade });
                res.json(vaga);
            } else {
                res.status(404).json({ error: 'Vaga não encontrada.' });
            }
        } catch (error) {
            res.status(400).json({ error: 'Erro ao atualizar vaga.' });
        }
    },

    async removerVaga(req, res) {
        const { id } = req.params;
        try {
            const vaga = await Vaga.findByPk(id);
            if (vaga) {
                await vaga.destroy();
                res.json({ message: 'Vaga removida com sucesso.' });
            } else {
                res.status(404).json({ error: 'Vaga não encontrada.' });
            }
        } catch (error) {
            res.status(400).json({ error: 'Erro ao remover vaga.' });
        }
    },

    async listarPorCargo(req, res) {
        const { cargo } = req.params;
        try {
            const data = await Vaga.findOne({ where: { cargo: cargo } });
            res.status(200).send(data);
        } catch (error) {
            res.status(400).json({ error: 'Erro ao buscar Vaga.' });
        }
    },

    async listarPorCidade(req, res) {
        const { cidade } = req.params;
        try {
            const data = await Vaga.findOne({ where: { cidade: cidade } });
            res.json(data);
        } catch (error) {
            res.status(400).json({ error: 'Erro ao buscar Vaga.' });
        }
    },
};
