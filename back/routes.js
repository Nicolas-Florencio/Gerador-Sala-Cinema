const express = require('express');
const route = express.Router();

const homeController = require('./controllers/homeController');
const eventController = require('./controllers/eventController');


//rotas da home
route.get('/api/filmes', homeController.searchFilms);
route.get('/api/shows', homeController.searchShows);
route.get('/api/teatros', homeController.searchTheaters);

//rotas de detalhes do evento
route.get('/api/events/:id', eventController.search);


module.exports = route;