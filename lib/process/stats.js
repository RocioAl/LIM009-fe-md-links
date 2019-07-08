"use strict";

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

var ew = require('../process/validate');

var chalk = require('chalk');

var pathAbsMD = [{
  href: 'https://medium.com/netscape/a-guide-to-create-a-nodejs-command-line-package-c2166ad0452e',
  text: 'Linea de comando CLI',
  file: "".concat(process.cwd(), "C:\\Users\\Rocio Soledad\\Desktop\\LIM009-fe-md-links\\LIM009-fe-md-links\\Readme.md")
}, {
  href: 'https://nodejs.org/api/fs.html#fs_fs_readfile_path_options_callback',
  text: 'Leer un archivo',
  file: "".concat(process.cwd(), "C:\\Users\\Rocio Soledad\\Desktop\\LIM009-fe-md-links\\LIM009-fe-md-links\\Readme.md")
}, {
  href: 'https://javascript.info/promise-basics',
  text: 'Promise ',
  file: "".concat(process.cwd(), "C:\\Users\\Rocio Soledad\\Desktop\\LIM009-fe-md-links\\LIM009-fe-md-links\\Readme.md")
}];

module.exports.StastLink = function (arrLinks) {
  var validate = ew.validateLink(arrLinks);
  return new Promise(function (res) {
    validate.then(function (links) {
      var total = links.length;

      var uniqueLinks = _toConsumableArray(new Set(links.map(function (links) {
        return links.href;
      }))).length;

      res("- Total  : ".concat(chalk.yellow(total), " - Unique : ").concat(chalk.green(uniqueLinks)));
    });
  });
};

module.exports.BrokenLinks = function (arrLinks) {
  var validate = ew.validateLink(arrLinks);
  return new Promise(function (res) {
    validate.then(function (link) {
      var filterBroken = link.filter(function (links) {
        return links.value === 'CERTIFICADO EXPIRADO';
      }); // res(`Broken: ${filterBroken.length}`)

      res("- Broken: ".concat(chalk.red.bold("".concat(filterBroken.length))));
    });
  });
}; // StastLink(pathAbsMD).then((result) => console.log(result));
// BrokenLinks(pathAbsMD).then((result) => console.log(result));