"use strict";

// import { resolve } from "dns";
// Paso 1
// import fetch from 'node-fetch';
// paso1
// const fetch= require('node-fetch');
// fetch('https://github.com/').then((res)=>{
//   console.log(res);
// });
// paso2
// const fetch= require('node-fetch');
// fetch('https://github.com/RocioAl/LIM009-Social-Network').then((res)=>{
//   console.log(res);
// });
// paso 3
// let promesa=new Promise((resolve,reject)=>{
//   // resolve('hola');
//   resolve('https://github.com/RocioAl/LIM009-Social-Network');
// });
// promesa.then(resulatdo=>{
//   console.log(resulatdo);
// })
// paso4
var urlExists = require('./url-exists');

urlExists('https://www.google.com').then(function () {
  console.log('Google exists!');
})["catch"](function () {
  console.error('Invalid url :(');
}); // promesas
// https://medium.com/@jmz12/callbacks-promesas-y-async-await-que-alguien-me-explique-514137cb57e2
// https://www.youtube.com/watch?v=NWiSL8duVCY
// https://www.youtube.com/watch?v=5wqit9-S0D4
// https://www.youtube.com/watch?v=EatuQDKsWpY
// https://www.youtube.com/watch?v=EatuQDKsWpY
// export const validateLinks = (arrObjec) => {
//   const resulArray = arrObjec.map(links => 
//     new Promise((resolve, reject) => {
//       fetch(links.href)
//         .then(stat => {
//           if (stat.status >= 200 && stat.status < 400) {
//             links.status = stat.status; 
//             links.value = 'OK';
//             resolve(links);
//           } else {
//             links.status = stat.status; 
//             links.value = 'Fail';
//             resolve(links);
//           }
//         }).catch(error => {
//           links.status = '';
//           links.value = 'No Found';
//           resolve(links);
//         });
//     }));
//   return Promise.all(resulArray);
// };
// // * Ingresa: Array de objetos con href de cada link(array)
// // * Proceso: Utilizar método fetch para verificar si href es valido o no, guardar cada ok o fail dentro de un array.
// // * Salida: Array de objetos con status ok o fail de cada links (array)
// https://stackoverflow.com/questions/52146053/javascript-node-fetch-synchronous-fetch