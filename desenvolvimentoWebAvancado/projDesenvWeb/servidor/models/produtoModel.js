const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const ProdutoSchema = new Schema({
    codigo: Number,
    nome: String, 
    desc: String,
    preco: Number,
    peso: Number,
    foto: String,
});

module.exports = mongoose.model('produto', ProdutoSchema);