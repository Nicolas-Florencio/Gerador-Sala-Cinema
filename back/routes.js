const express = require('express');
const route = express.Router();

const homeController = require('./controllers/homeController');
const eventController = require('./controllers/eventController');


//rotas da home
route.get('/api/filmes', homeController.searchFilms);
route.get('/api/shows', homeController.searchShows);
route.get('/api/teatros', homeController.searchTheaters);

//rotas de detalhes do evento
route.get('/api/filmes/detalhes/:id', eventController.searchFilme);
route.get('/api/shows/detalhes/:id', eventController.searchShow);
route.get('/api/teatros/detalhes/:id', eventController.searchTheater);


module.exports = route;