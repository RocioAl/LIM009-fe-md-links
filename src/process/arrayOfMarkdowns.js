const fs = require("fs");
const chalk = require('chalk'); 
const path = require('path');
const ac=require('../process/convertToAbsolute');
const de=require('../process/extractLinksOfMarkdowns');
// let ruta= 'C:\\Users\\Rocio Soledad\\Desktop\\LIM009-fe-md-links\\LIM009-fe-md-links';
// let ruta='https://github.com/markedjs/marked/issues/1279';
// let ruta= 'C:\\Users\\Rocio Soledad\\Desktop\\LIM009-fe-md-links\\LIM009-fe-md-links\\Readme.md';
module.exports.arrayMarckdowns= (file) =>{
let isAbsolute =ac.processConvertToAbsolute(file);
    let extension = path.extname(isAbsolute);
        if (extension === ".md"){
         const markdownRead = fs.readFileSync(isAbsolute).toString().split('\n');
          const links = markdownRead.reduce((init, element, index) => init.concat(de.linksmd(element, index + 1)),[]); 
          return links; 
        }else {
          const arr = [];
          console.log(chalk.magenta('Ups encontramos un error \n - El archivo ingresado no es de extención .md, favor ingresar otro archivo \n - El directorio que ingresaste no contiene archivos con extensión .md \n - Saludos!!! :)'));
         return arr;
        }
      }
// console.log(arrayMarckdowns(ruta));



