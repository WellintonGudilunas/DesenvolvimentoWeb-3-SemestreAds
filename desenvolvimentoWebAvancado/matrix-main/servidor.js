require("./db/mongo");
const express = require("express");
const srv = express();
srv.use(express.json());

//Roteamento das rotas de conteúdo
const conteudoRouter = require('./routes/conteudoRouter');
srv.use('/conteudos', conteudoRouter);

srv.listen(3000, function(){
    console.log('Servidor rodando em http://localhost:3000');
});