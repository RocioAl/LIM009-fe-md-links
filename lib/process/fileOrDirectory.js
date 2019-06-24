"use strict";

//Primera Forma (el directorio no me sale)
// const fs = require('fs');
// module.exports.isFileOrDirectory = (ruta) => {
//   try {
//     return stats = fs.lstatSync(ruta);
//       if (stats.isDirectory()) {
//         console.log("si es directorio")
//       } } catch (e) { 
//   console .log("es archivo")
//       }
// };
//Segunda forma (archivo y directorio funcionan al 100%)
var path = require('path');

module.exports.isFileOrDirectory = function (ruta) {
  var ext = path.extname(ruta);

  if (path.extname(ruta)) {
    console.log('es archivo');
  } else {
    console.log("es directorio");
  }
};