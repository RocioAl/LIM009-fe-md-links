"use strict";

var fetch = require('node-fetch');

module.exports.validateLink = function (arrObjec) {
  var resulArray = arrObjec.map(function (links) {
    return new Promise(function (resolve, reject) {
      return fetch(links.href).then(function (stat) {
        if (stat.status >= 200 && stat.status < 400) {
          links.status = stat.status;
          links.value = '// ✓';
          resolve(links);
        } else {
          links.status = stat.status;
          links.value = '// X ';
          resolve(links);
        }
      })["catch"](function (error) {
        links.status = '';
        links.value = 'CERTIFICADO EXPIRADO';
        resolve(links);
      });
    });
  });
  return Promise.all(resulArray);
}; // validateLink([
//   { href: 'https://medium.com/netscape/a-guide-to-create-a-nodejs-command-line-package-c2166ad0452e',
//   text: 'Linea de comando CLI',
//   file: `${process.cwd()}C:\\Users\\Rocio Soledad\\Desktop\\LIM009-fe-md-links\\LIM009-fe-md-links\\Readme.md`},
// { href: 'https://nodejs.org/api/fs.html#fs_fs_readfile_path_options_callback',
//   text: 'Leer un archivo',
//   file: `${process.cwd()}C:\\Users\\Rocio Soledad\\Desktop\\LIM009-fe-md-links\\LIM009-fe-md-links\\Readme.md`},
// { href: 'https://javascript.info/promise-basics',
//   text: 'Promise ',
//   file: `${process.cwd()}C:\\Users\\Rocio Soledad\\Desktop\\LIM009-fe-md-links\\LIM009-fe-md-links\\Readme.md`}
// ]).then((result) => console.log(result));