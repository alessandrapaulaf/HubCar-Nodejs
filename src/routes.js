const express = require('express'); //importando a dependencia do express
const routes = express.Router(); //separando o routes do express
const AluguelController = require('../src/Controllers/AluguelController');
const UsuarioController = require('../src/Controllers/UsuarioController');

routes.post('/aluguel', AluguelController.handleNovoAluguel);

routes.post('/cadastro', UsuarioController.login.CadastrarUsuario);

module.exports = routes;