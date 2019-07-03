"use strict";

// let ruta= 'C:\\Users\\Rocio Soledad\\Desktop\\LIM009-fe-md-links\\LIM009-fe-md-links';
//  let ruta= 'C:\\Users\\Rocio Soledad\\Desktop\\LIM009-fe-md-links\\LIM009-fe-md-links\\Readme.md';
var chalk = require('chalk');

var fetch = require('node-fetch');

var ef = require('../process/arrayOfMarkdowns');

module.exports.validateLinks = function (file) {
  var validate = ef.arrayMarckdowns(file);
  validate.forEach(function (element) {
    fetch(element.href).then(function (response) {
      if (response.ok === true) {
        console.log(" - ".concat(element.href, " "), chalk.green.bold("// \u2713 ".concat(response.status, " ").concat(response.statusText)));
      } else if (response.ok === false) {
        console.log("- ".concat(element.href, " "), chalk.red.bold("// X ".concat(response.status, " ").concat(response.statusText)));
      } else {}
    })["catch"](function (err) {
      console.log(" - ".concat(element.href, " "), chalk.magenta.bold("// CERTIFICADO EXPIRADO"));
    });
  });
}; // responde-ok returns true if the response returned successfully
// console.log(validateLinks(ruta));