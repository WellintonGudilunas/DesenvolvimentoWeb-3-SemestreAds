const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const ConteudoSchema = new Schema({
    codigo: Number,
    nome: String, 
});

module.exports = mongoose.model('conteudo', ConteudoSchema);