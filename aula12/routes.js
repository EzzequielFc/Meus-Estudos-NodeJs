const express = require('express')
const rout = express.Router() // Responsavel por tratar a rotas
const homeController = require('./src/controllers/homeController')
const contatoController = require('./src/controllers/contatoController')

// Rotas da home 
rout.get('/', homeController.paginaInicial)
rout.post('/',homeController.trataPost)

// Rotas de contato
rout.get('/contato', contatoController.paginaInicial)


module.exports = rout
