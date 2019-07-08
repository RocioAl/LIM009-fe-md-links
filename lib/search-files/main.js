'use strict';

var ew = require('../process/validate');

var xy = require('../process/arrayOfMarkdowns'); // let ruta= 'C:\\Users\\Rocio Soledad\\Desktop\\LIM009-fe-md-links\\LIM009-fe-md-links\\Readme.md';


module.exports.mdLinks = function (path, options) {
  return new Promise(function (res, rej) {
    if (options.validate) {
      res(ew.validateLink(xy.arrayMarckdowns(path)));
    } else {
      res(xy.arrayMarckdowns(path));
    }
  });
}; //  console.log(mdLinks (ruta, false));