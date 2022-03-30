const path = require('path')
const caminhoArquivo = path.resolve(__dirname, 'teste.json')

const escreve = require('./modules/escrever')
const ler = require('./modules/ler')

const pessoas = [
    {nome: 'Joao'},
    {nome: 'Clara'},
    {nome: 'Maria'},
    {nome: 'Pedro'},
]

// Convertendo nosso objeto pessoas para json string
const json = JSON.stringify(pessoas,'',2)

escreve(caminhoArquivo, json)
ler(caminhoArquivo)
// Função async para esperar fazer tudo para concluir
async function lerArquivo(caminho) {
    const dados = await ler(caminho)
    renderizaDados(dados)
}
// volta para HTML/ JS
function renderizaDados(dados) {
    dados = JSON.parse(dados)
    console.log(dados)
}
lerArquivo(caminhoArquivo)
