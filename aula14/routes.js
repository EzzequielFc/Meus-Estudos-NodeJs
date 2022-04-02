const express = require('express')
const rout = express.Router() // Responsavel por tratar a rotas
const homeController = require('./src/controllers/homeController')
const contatoController = require('./src/controllers/contatoController')

// Função adicional
function meuMiddleware(req, res, next) {
    
    console.log()
    console.log('Passei no seu middleware')
    console.log()
    next()
}

// Rotas da home 
rout.get('/', meuMiddleware, homeController.paginaInicial, function(req,res,next){
    console.log()
    console.log('ainda estou aqui')
})
rout.post('/', homeController.trataPost)

// Rotas de contato
rout.get('/contato', contatoController.paginaInicial)


module.exports = rout
