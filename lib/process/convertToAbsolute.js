"use strict";

var path = require('path');

module.exports.processConvertToAbsolute = function (ruta) {
  return path.resolve(ruta);
};