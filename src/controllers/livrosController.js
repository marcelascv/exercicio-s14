const livros = require('../models/livros')

const getAll = (req, res) => {
    livros.find(function (err, livros) {
        if (err) {
            res.status(500).send({ message: err.message })
        } else {
            res.status(200).send(livros)
        }
    })
}

const postLivro = (req, res) => {
    console.log(req.livro);
    livros.countDocuments((err, count) => {
        if (err) {
            res.status(500).send({message: err.message});
        } else {
            const livro = new livros(req.body);
            livro.id = count +1;
            livro.save(function (err) {
                if (err) {
                    res.status(500).send({ message: err.message })
                } else {
                    res.status(200).send({
                        message: 'Livro registrado com sucesso!'                    
                    })
                }
            })
        }
    })
}

const putLivro = (req, res) => {
    const id = req.params.id
    livros.updateMany({ id }, { $set : req.body }, { upsert : true }, function(err){
        if (err) {
            res.status(500).send({ message: err.message })
        } else {
            res.status(200).send({ message : "Livro atualizado com sucesso!"})
        }
    })
}

const deleteLivro = (req, res) => {
    const id = req.params.id;
    livros.find({ id }, function(err, livro){
        if(livro.length > 0){
            livros.deleteMany({ id }, function(err){
                if(err) {
                    res.status(500).send({ message: err.message })
                }
                res.status(200).send({ message: 'Livro removido com sucesso!'})
            })
        } else{
            res.status(200).send({ message: 'Nenhum registro encontrado paraa ser removido!'})
        }
    })
}

module.exports = {
    getAll,
    postLivro,
    putLivro,
    deleteLivro,
}