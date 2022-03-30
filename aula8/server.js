const express = require('express')
const app = express()

app.get('/', (req, res) => {
    res.send(`
    <button>Olá Mundo</button>
    `)
})
// Enviando parametros
app.get('/testes/:idUsuarios?', (req,res) => {
    res.send(req.params.idUsuarios)
})

app.post('/', (req,res)=> {
    console.log(req.body)
    res.send('Recebi o formulario')
})
app.listen(3000, () => {
    console.log('Acessar http://localhost:3000')
    console.log('Servidor executando na porta 3000')
})


