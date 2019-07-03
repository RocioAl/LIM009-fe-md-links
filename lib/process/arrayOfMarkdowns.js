"use strict";

var fs = require("fs");

var chalk = require('chalk');

var path = require('path'); // let ruta= 'C:\\Users\\Rocio Soledad\\Desktop\\LIM009-fe-md-links\\LIM009-fe-md-links';
// let ruta='https://github.com/markedjs/marked/issues/1279';
// let ruta= 'C:\\Users\\Rocio Soledad\\Desktop\\LIM009-fe-md-links\\LIM009-fe-md-links\\Readme.md';


var ac = require('../process/convertToAbsolute');

var de = require('../process/extractLinksOfMarkdowns');

module.exports.arrayMarckdowns = function (file) {
  var isAbsolute = ac.processConvertToAbsolute(file);
  var extension = path.extname(isAbsolute);

  if (extension === ".md") {
    var markdownRead = fs.readFileSync(isAbsolute).toString().split('\n');
    var links = markdownRead.reduce(function (init, element, index) {
      return init.concat(de.linksmd(element, index + 1));
    }, []);
    return links;
  } else {
    var arr = [];
    console.log(chalk.magenta('Ups encontramos un error \n - El archivo ingresado no es de extención .md, favor ingresar otro archivo \n - El directorio que ingresaste no contiene archivos con extensión .md \n - Saludos!!! :)'));
    return arr;
  }
}; // console.log(arrayMarckdowns(ruta));
// https://www.npmjs.com/package/chalk