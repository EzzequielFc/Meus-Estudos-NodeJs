const fs = require('fs').promises

module.exports = (caminho, dados) => {
    // escrevendo no arquivo
    fs.writeFile(caminho,dados, {flag: 'w'})
}


