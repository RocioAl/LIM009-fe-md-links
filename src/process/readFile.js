// paso1
// const path = require('path');

// let ext = path.extname('/Users/Refsnes/demo_path.md');
// console.log(ext);
// leer archivos markdown-node js

//md.

// paso2
const path = require('path');
module.exports.readMarkdowns = (ruta) => {
    let ext = path.extname(ruta);
    if(ext==='.md'){
        console.log(ext );
    }

};