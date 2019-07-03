"use strict";

var fs = require("fs");

var chalk = require('chalk');

var path = require('path'); // let ruta= 'C:\\Users\\Rocio Soledad\\Desktop\\LIM009-fe-md-links\\LIM009-fe-md-links';
// let ruta='https://github.com/markedjs/marked/issues/1279';


var ruta = "C:\\Users\\Rocio Soledad\\Desktop\\LIM009-fe-md-links\\LIM009-fe-md-links\\Readme.md";

var ac = require('../process/convertToAbsolute');

var de = require('../process/extractLinksOfMarkdowns');

var arrayMarckdowns = function arrayMarckdowns(file) {
  var files = fs.readFileSync(file).toString().split();
  files.reduce(function (init, element, index) {
    return init.concat(de.linksmd(element, index + 1));
  }, []);
  console.log(files);
};

console.log(arrayMarckdowns(ruta));