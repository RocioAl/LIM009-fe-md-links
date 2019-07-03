"use strict";

var mdlinks = require('../search-files/main');

var file = process.argv[2];
var option = process.argv[3];

if (require.main === module) {
  //se pasa todos los módulos anteriores al módulo actual
  mdlinks.mdlinks(file, option).then(function (re) {
    console.log(re);
  }, function (error) {
    console.log(error);
  });
}

module.exports.mdlinks = mdlinks; // console.log(process.argv);