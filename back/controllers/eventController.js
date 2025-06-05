const Filme = require('../models/FilmeModel');
const Show = require('../models/ShowModel');
const Teatro = require('../models/TeatroModel');

exports.searchFilme = async (req, res) => {
    try {
        const filme = new Filme(req.body);
        const retorno = await filme.buscarFilme(req.params.id);
        res.json(retorno);
    }
    catch(e) {
        console.log('Erro: ', e.message);
    }
}

exports.searchShow = async (req, res) => {
    try {
        const show = new Show(req.body);
        const retorno = await show.buscarShow(req.params.id);
        res.json(retorno);
    }
    catch(e) {
        console.log('Erro: ', e.message);
    }
}

exports.searchTheater = async (req, res) => {
    try {
        const teatro = new Teatro(req.body);
        const retorno = await teatro.buscarTeatro(req.params.id);
        res.json(retorno);
    }
    catch(e) {
        console.log('Erro: ', e.message);
    }
}