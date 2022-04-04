require('dotenv').config()

const express = require('express')
const app = express()

// Fazendo a conexão  
const mongoose = require('mongoose')
const connectionString = 

mongoose.connect(connectionString)
    .then(() => {
        // Assim que conectar
        console.log('Conectei a base de dados')
        app.emit('pronto')
    })
    .catch(e => console.log(e))

// Chamar a Session
const session = require('express-session') // Salva a seção na memoria
const MongoStore = require('connect-mongo')(session)
const flash = require('connect-flash')



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


// Configurar a Session
const sessionOptions = session({
    secret: 'olaissoesecreto',
    store: new MongoStore({ mongooseConnection: mongoose.connection }),
    resave: false,
    saveUninitialized: false,
    cookie: {
        maxAge: 1000 * 60 * 60 * 24 * 7,
        httpOnly: true
    }
})

app.use(sessionOptions)
app.use(flash())

// HTML
app.set('views', path.resolve(__dirname, 'src', 'views')) // Caminho absoluto
app.set('view engine', 'ejs')

app.use(routes)





