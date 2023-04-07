const conteudoModel = require('../models/conteudoModel');

class ConteudoController{

    async listar(req, res){  
        //select * from conteudo;  
        const resultado = await conteudoModel.find({});
        res.json(resultado);    
    }

    async buscarPorCodigo(req, res){
        const codigo  = req.params.codigo;
        //select * from conteudo where codigo = 2;
        const resultado = await conteudoModel.findOne({'codigo': codigo});
        res.json(resultado);
    }

    async salvar(req, res){
        const conteudo = req.body;

        //Gerador de novo código
        //select * from conteudo order by codigo desc;
        const objeto = await conteudoModel.findOne({}).sort({'codigo': -1});
        conteudo.codigo = objeto == null ? 1 : objeto.codigo + 1;

        //insert into conteudo (xxx) values (xxxx);
        const resultado = await conteudoModel.create(conteudo);
        res.json(resultado);        
    }

    async atualizar(req, res){
        const codigo = req.params.codigo;
        const conteudo = req.body;
        //update conteudo set xxxx values xxxx
        await conteudoModel.findOneAndUpdate({'codigo': codigo}, conteudo);
        res.send("Conteúdo atualizado!");
    }

    async excluir(req, res){
        const codigo = req.params.codigo;
        await conteudoModel.findOneAndDelete({'codigo': codigo});
        res.send("Conteúdo excluído!");
    }
}

module.exports = new ConteudoController();