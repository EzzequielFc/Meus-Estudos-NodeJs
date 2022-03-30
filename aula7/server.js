// Importando o express

// Carregamos o express //
const express = require('express')
// Iniciamos ele //
const app = express()

//           Criar   Ler   Atualizar     Apagar
// CRUD ->  CREATE,  READ,   UPDADE,     DELETE
//           POST    GET      PUT        DELETE

// http://meusite.com(/) <- GET -> Entregue a página
// http://meusite.com(/sobre) <- GET -> Entregue a página /sobre
// http://meusite.com(/contato) <- GET -> Entregue a página / contato
 
// Requisicao (req) -> O que o usuario pediu
// Resposta   (res) -> o que vamos enviar para o usuario

//      Rota
app.get('/', (req, res) => {
    res.send('Hello World!!')
})

// Fique escutando alterações nessa porta
app.listen(3000, () => {
    console.log('Acessar http://localhost:3000')
    console.log('Servidor executando na porta 3000')
})


