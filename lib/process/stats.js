"use strict";

require("@babel/polyfill");

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

// let ruta= 'C:\\Users\\Rocio Soledad\\Desktop\\LIM009-fe-md-links\\LIM009-fe-md-links';
// let ruta= 'C:\\Users\\Rocio Soledad\\Desktop\\LIM0-09-fe-md-links\\LIM009-fe-md-links\\Readme.md';
var chalk = require('chalk');

var fetch = require('node-fetch');

var jk = require('../process/arrayOfMarkdowns');

module.exports.statsLinks =
/*#__PURE__*/
function () {
  var _ref = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee2(file) {
    var statsArrayMarckdowns, arrayStats, unique, broken;
    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            statsArrayMarckdowns = jk.arrayMarckdowns(file);
            arrayStats = [];
            unique = 0;
            broken = 0;
            _context2.next = 6;
            return Promise.all(statsArrayMarckdowns.map(
            /*#__PURE__*/
            function () {
              var _ref2 = _asyncToGenerator(
              /*#__PURE__*/
              regeneratorRuntime.mark(function _callee(element) {
                return regeneratorRuntime.wrap(function _callee$(_context) {
                  while (1) {
                    switch (_context.prev = _context.next) {
                      case 0:
                        _context.next = 2;
                        return fetch(element.href).then(function (res) {
                          arrayStats.push(element);

                          if (res.ok === true) {
                            unique++;
                          } else if (res.code === 'ENOTFOUND') {
                            broken++;
                          } else {
                            broken++;
                          }
                        })["catch"](function (err) {
                          broken++;
                        });

                      case 2:
                      case "end":
                        return _context.stop();
                    }
                  }
                }, _callee);
              }));

              return function (_x2) {
                return _ref2.apply(this, arguments);
              };
            }()));

          case 6:
            console.log("- Unique : ".concat(chalk.green(unique)));
            console.log("- Broken: ".concat(chalk.red(broken)));
            console.log("- Total : ".concat(chalk.yellow(unique + broken)));

          case 9:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  }));

  return function (_x) {
    return _ref.apply(this, arguments);
  };
}(); // console.log(statsLinks());
// https://www.youtube.com/watch?v=Vpb4v4G4N-c&list=PLL1UEcDHVPjkGjqM4mvAb2z9meV7jWmbd&index=9