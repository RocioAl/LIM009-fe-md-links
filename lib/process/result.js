"use strict";

// let ruta= 'C:\\Users\\Rocio Soledad\\Desktop\\LIM009-fe-md-links\\LIM009-fe-md-links\\Readme.md';
var chalk = require('chalk');

var so = require('./arrayOfMarkdowns');

var file = process.argv[2];

module.exports.resultWithOption = function () {
  var result = so.arrayMarckdowns(file);
  result.map(function (link) {
    console.log("- ".concat(chalk.bold(link.text), " : ").concat(chalk.green(link.href)));
  });
}; // console.log(resultWithOption());