#!/usr/bin/env node
"use strict";

var ty = require('../search-files/main');

var bg = require('../process/stats');

var chalk = require('chalk');

var path = process.argv[2];
var options = process.argv[3];
var status = process.argv[4];

if (options === '--validate' && status === '--stats' || status === '--stats' && options === '--validate' || options === '--s' && status === '--v' || options === '--v' && status === '--s') {
  ty.mdLinks(path, {
    validate: true
  }).then(function (res) {
    bg.StastLink(res).then(function (res) {
      return console.log(res);
    });
    bg.BrokenLinks(res).then(function (res) {
      return console.log(res);
    });
  });
} else if (options === '--validate' || options === '--v') {
  ty.mdLinks(path, {
    validate: true
  }).then(function (res) {
    return res.forEach(function (objLinks) {
      if (objLinks.status === 200) {
        console.log(" \nhref : ".concat(chalk.green.bold("".concat(objLinks.href)), ", \nvalue :  ").concat(chalk.yellow.bold("".concat(objLinks.value)), ", \nstatus:").concat(chalk.yellow.bold("".concat(objLinks.status)), ", \ntext: ").concat(chalk.green.bold("".concat(objLinks.text))));
      } else if (objLinks.status === 404) {
        console.log(" \nhref : ".concat(chalk.green.bold("".concat(objLinks.href)), ", \nvalue :  ").concat(chalk.red.bold("".concat(objLinks.value)), ", \nstatus:").concat(chalk.red.bold("".concat(objLinks.status)), ", \ntext: ").concat(chalk.green.bold("".concat(objLinks.text))));
      } else {
        console.log(" \nhref : ".concat(chalk.green.bold("".concat(objLinks.href)), ", \nvalue :  ").concat(chalk.magenta.bold("".concat(objLinks.value)), ", \nstatus:").concat(chalk.magenta.bold("".concat(objLinks.status)), ", \ntext: ").concat(chalk.green.bold("".concat(objLinks.text))));
      }
    });
  });
} else if (options === '--stats' || options === '--s') {
  ty.mdLinks(path, {
    validate: false
  }).then(function (res) {
    bg.StastLink(res).then(function (response) {
      return console.log(response);
    });
    bg.BrokenLinks(res).then(function (res) {
      return console.log(res);
    });
  });
} else {
  ty.mdLinks(path, {
    validate: false
  }).then(function (res) {
    return res.forEach(function (objLinks) {
      return console.log("- ".concat(chalk.bold(objLinks.text), " : ").concat(chalk.green(objLinks.href)));
    });
  });
}