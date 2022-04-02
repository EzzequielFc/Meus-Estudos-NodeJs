const HomeModel = require('../models/HomeModel')

HomeModel.create({
    titulo: 'Titulo 1',
    descricao: 'Descricao 1'
})
    .then(dados => console.log(dados))
    .catch(e => console.log(e))
   
    
// Funções da pagina -> Organização
exports.paginaInicial = (req,res, next) => {
    res.render('index')
    next()
}

exports.trataPost = (req,res) => {
    res.send('Ei, sou sua nova rota de post')
}