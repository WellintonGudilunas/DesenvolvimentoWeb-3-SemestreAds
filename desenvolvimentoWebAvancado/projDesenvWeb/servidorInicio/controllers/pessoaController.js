const pessoasDB = require('../db/banco'); //tranformando a variavel pessoa no array do db

//req = requirir... é uma variavel que vai ativar a função
//res = responder... é uma variavel que vai enviar a resposta da função

class PessoaControler{

    listar(req, res){
        res.json(pessoasDB); //Vai mandar a lista de pessoas pra requisição
    }

    buscarPorId(req,res){
        const id = req.params.id;
        const pessoa = pessoasDB.find(p => p.id == id);
        res.json(pessoa);
    }

    salvar(req,res){
        const pessoa = req.body;
        if(pessoasDB.find(p => p.id == pessoa.id) == undefined){
            pessoasDB.push(pessoa);
        }
        res.json(pessoasDB);
    }

    atualizar(req,res){
        const pessoas = req.body;
        let lenPessoas = pessoas.length;
        let pessoa;
        let indice;
        for(let i=0;i<lenPessoas;i++){
            pessoa = pessoas[i];
            indice = pessoasDB.findIndex(p=>p.id == pessoa.id);
            if(!(indice < 0) && ((indice >= 0))){
                pessoasDB[indice].id = pessoa.id;
                pessoasDB[indice].nome = pessoa.nome;
                pessoasDB[indice].idade = pessoa.idade;
            }
        }
        res.json(pessoasDB);
    }

    excluir(req,res){
        const id = req.params.id;
        let idx = pessoasDB.find(p => p.id == id);
        if(idx != undefined){
            pessoasDB.splice(idx, 1);
        }
        res.json(pessoasDB);
    }

}

module.exports = new PessoaControler();