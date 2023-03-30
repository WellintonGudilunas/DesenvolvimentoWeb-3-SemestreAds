const conteudoModel = require("../models/conteudoModel.js");

class ConteudoController{
    async listar(req, res){
        const resultado = await conteudoModel.find({});
        res.json(resultado);
    }
    async buscarPorCodigo(req, res){
        
    }
    async salvar(req, res){
        const conteudo = req.body;
        const resultado = await conteudoModel.create(conteudo);
        res.json(resultado);
    }
    async atualizar(req, res){
        
    }
    async excluir(req, res){
        
    }
}
module.exports = new ConteudoController();
