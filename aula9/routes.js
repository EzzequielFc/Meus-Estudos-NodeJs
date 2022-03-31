const express = require('express')
const rout = express.Router() // Responsavel por tratar a rotas
const homeController = require('./controllers/homeController')
const contatoController = require('./controllers/contatoController')

// Rotas da home 
rout.get('/', homeController.paginaInicial)
rout.post('/',homeController.trataPost)

// Rotas de contato
rout.get('/contato', contatoController.paginaInicial)


module.exports = rout
