require('dotenv').config();
const routes = require('./routes');
const cors = require('cors');
const mongoose = require('mongoose');

mongoose.connect(process.env.CONNECTIONSTRING, {})
.then(() => {
  app.emit('pronto');
})
.catch(e => console.log(e));

const express = require('express');

const app = express();

//permite requisicoes
app.use(cors());

//possibilita receber dados via JSON, por POST e GET
app.use(express.json());

//permite o uso de rotas
app.use(routes);




app.on('pronto', () => {
  app.listen(3000, () => {
    console.log('Acessar http://localhost:3000');
    console.log('Servidor executando na porta 3000');
  });
});