const conteudoController = require('../controllers/conteudoController');
const express = require('express');

const router = express.Router();

//conteudos
router.get('/', conteudoController.listar);
router.get('/:codigo', conteudoController.buscarPorCodigo);
router.post('/', conteudoController.salvar);
router.put('/:codigo', conteudoController.atualizar);
router.delete('/:codigo', conteudoController.excluir);

module.exports = router;