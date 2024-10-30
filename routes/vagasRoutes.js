const express = require('express');
const router = express.Router();
const vagaController = require('../controllers/vagasControllers.js');

router.post('/vagas', vagaController.criarVaga);
router.get('/vagas', vagaController.listarVaga);
router.get('/vagas/:id', vagaController.mostrarVaga);
router.put('/vagas/:id', vagaController.atualizarVaga);
router.delete('/vagas/:id', vagaController.removerVaga);
router.get('/cargo/:cargo', vagaController.listarPorCargo);
router.get('/localizacao/:cidade', vagaController.listarPorCidade);

module.exports = router;
