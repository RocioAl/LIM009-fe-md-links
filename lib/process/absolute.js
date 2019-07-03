"use strict";

var path = require('path');

module.exports.pathAbsolute = function (ruta) {
  return path.isAbsolute(ruta);
};