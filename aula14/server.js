require('dotenv').config()

const express = require('express')
const app = express()

// Fazendo a conexão  
const mongoose = require('mongoose')
const connectionString = 'mongodb+srv://zack:<minhaSenha>@cluster0.awk2a.mongodb.net/BASEDEDADOS?retryWrites=true&w=majority'

mongoose.connect(connectionString)
    .then(() => {
        // Assim que conectar
        console.log('Conectei a base de dados')
        app.emit('pronto')
    })
    .catch(e => console.log(e))

// Só irá executar, quando for conectado a base de dados
app.on('pronto', () => {
    app.listen(3000, () => {
        console.log('Acessar http://localhost:3000')
        console.log('Servidor executando na porta 3000')
    })
})

const routes = require('./routes')
const path = require('path') // Para pegar o caminho

app.use(express.urlencoded({ extended: true }))

// Conteudo Estático
app.use(express.static(path.resolve(__dirname, 'public')))

// HTML
app.set('views', path.resolve(__dirname, 'src', 'views')) // Caminho absoluto
app.set('view engine', 'ejs')

app.use(routes)





