const pessoaController = require('./controllers/pessoaController');
const express = require("express"); //importando o express
const srv = express(); //criando um objeto do tipo servidor
srv.use(express.json());

srv.get('/pessoas', pessoaController.listar);
srv.get('/pessoas/:id', pessoaController.buscarPorId);
srv.post("/pessoas", pessoaController.salvar);
srv.put("/pessoas", pessoaController.atualizar);
srv.delete("/pessoas/:id", pessoaController.excluir);

require("./db/mongo");
const mongoose = require('mongoose');

const ModeloExemplo = mongoose.model('Exemplo', {nome: String});
const objetoExemplo = new ModeloExemplo({nome: "TEEEEEEEESTE"});
objetoExemplo.save().then(() => console.log("Salvou"));


//srv.get(rota, função)
srv.get('/', function(req, res){
    console.log('srv.get()');
    res.send('server.get()');
});

srv.post('/', function(req, res){
    console.log('srv.post()');
    res.send('server.post()');
});

srv.put('/', function(req, res){
    console.log('srv.put()');
    res.send('server.put()');
});

srv.delete('/', function(req, res){
    console.log('srv.delete()');
    res.send('server.delete()');
});

srv.listen(3000, function(){
    console.log('Servidor rodando em http://localhost:3000');
});
