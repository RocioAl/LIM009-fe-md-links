// paso 1
// const path = require('path');

// let ext = path.extname('/Users/Refsnes/demo_path.md');
// console.log(ext);

// paso2
// verficia si un archivo o directorio existe
// const path = require('path');
// let ext = path.extname('/Users/Refsnes/demo_path.md');
//     if(path.extname('/Users/Refsnes/demo_path.md')){
//         console.log('yes');
//     }else{
//         console.log("no");
//     }

    //yes

// paso3

const path = require('path');
module.exports.isMarkdownOrNot = (ruta) => {
    let ext = path.extname(ruta);
    if(ext==='.md'){
        console.log('Si es archivo Markdown');
    }else{
        console.log('No es archivo Markdown');
    }
};