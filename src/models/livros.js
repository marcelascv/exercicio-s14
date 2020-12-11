const mongoose = require("mongoose");

const livrosSchema = new mongoose.Schema({
    id: {type: Number},
    nome:{type: String},
    dataPublicacao: {type: String},
    pessoaAutora: {type: String}, 
    assunto: {type: String},
},{
    versionKey: false
});

const livros = mongoose.model("livros", livrosSchema);

module.exports = livros;