const conteudoController = require('../controllers/conteudoController');
const express = require("express"); //importando o express

const router = express.Router();
router.get("/", conteudoController.listar);
router.post('/', conteudoController.salvar);

module.exports = router;