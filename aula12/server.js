
const express = require('express')
const app = express()
const routes = require('./routes')
const path = require('path') // Para pegar o caminho

app.use(express.urlencoded({ extended: true }))

// Conteudo Estático
app.use(express.static(path.resolve(__dirname, 'public')))

// HTML
app.set('views', path.resolve(__dirname, 'src', 'views')) // Caminho absoluto
app.set('view engine', 'ejs')

app.use(routes)

app.listen(3000, () => {
    console.log('Acessar http://localhost:3000')
    console.log('Servidor executando na porta 3000')
})





