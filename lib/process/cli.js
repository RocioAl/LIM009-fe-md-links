#!/usr/bin/env node
// import mdlinks  from './mdlinks'
// validate = !!args.validate
// stats = !! args.stats
// path = args.path
// const data = mdlinks(path, { validate: params.validate, stats: params.stats}).then((data)=> data.forEach(console.log(data.link + data.file)))
// paso1
// const [,,...args] = process.argv;
// console.log(args) //[]
// paso2
// const [,,...args] = process.argv;
// console.log(`hola ${args}`) //hola
// paso 3
// process.argv es un arreglo que contiene los argumentos de linea de comando.
// El primer elemento (process.argv[0]) contiene la ruta al ejecutable de node, el segundo elemento contiene el nombre del archivo javascript en ejecución, en este caso pepe.js. Los siguientes argumentos tienen los valores pasados por linea de comandos. En este caso process.argv[2] === "hola".
"use strict";

process.argv.forEach(function (val, index) {
  console.log("".concat(index, ": ").concat(val));
}); // cmd: node cli.js uno dos=tres cuatro
// paso 4
// npm run build
// node ./lib/process/cli.js
// node ./lib/process/cli.js dhsjdh sdjjsdh jdksf
// https://gist.github.com/up1/76c462894bb9583ce82e8ee52a1a6764
// https://stackoverflow.com/questions/52146053/javascript-node-fetch-synchronous-fetch
// https://es.stackoverflow.com/questions/39398/c%C3%B3mo-obtener-los-argumentos-de-linea-de-comandos-en-node-js