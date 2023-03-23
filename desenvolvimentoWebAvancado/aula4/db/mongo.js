const mongoose = require('mongoose');

const url = 'mongodb://127.0.0.1:27017/123';
const db = mongoose.connect(url);

mongoose.connection.on('connected', () => console.log("Conectado ao mongoDB"));
mongoose.connection.on('error', (err) => console.log(`Erro:\n${err}`));

module.exports = db;


