const Filme = require('../models/FilmeModel');
const Show = require('../models/ShowModel');
const Teatro = require('../models/TeatroModel');

exports.searchFilms = async (req, res) => {
    try {
        const filme = new Filme(req.body);
        const retorno = await filme.buscar();
        res.json(retorno);
    }
    catch(e) {
        console.log('Erro: ', e.message);
    }
}

exports.searchShows = async (req, res) => {
    try {
        const show = new Show(req.body);
        const retorno = await show.buscar();
        res.json(retorno);
    }
    catch(e) {
        console.log('Erro: ', e.message);
    }
}

exports.searchTheaters = async (req, res) => {
    try {
        const teatro = new Teatro(req.body);
        const retorno = await teatro.buscar();
        res.json(retorno);
    }
    catch(e) {
        console.log('Erro: ', e.message);
    }
}