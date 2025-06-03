const Filme = require('../models/FilmeModel');

exports.search = async (req, res) => {
    try {
        const filme = new Filme(req.body);
        const retorno = await filme.buscarFilmes();
        res.json(retorno);
    }
    catch(e) {
        console.log('Erro: ', e.message);
    }
}