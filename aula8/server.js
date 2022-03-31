const express = require('express')
const app = express()



        //Parametros // querystring
// profiles/12345?campanha=googleads&nome_campanha=seila

app.get('/', (req, res) => {
    res.send(`
    <form action="/" method = "POST">
    Nome do cliente: <input type="text" name="nome">
    <button>Olá mundo </button>
    </form>
    `)
})
// http://localhost:3000/testes/?nome=Zaack
app.get('/testes/:idUsuario?', (req, res) => {
    console.log(req.query)
    res.send(req.query.nome)
})

app.use(
    express.urlencoded(
        {
            extended:true
        }
    )
)

app.post('/', (req,res)=> {
    console.log(req.body)                   //Esse nome é do name do forms
    res.send(`o que você me enviou:${req.body.nome}`)
})
app.listen(3000, () => {
    console.log('Acessar http://localhost:3000')
    console.log('Servidor executando na porta 3000')
})