"use strict";


// paso1
// const fs = require("fs");
// let directory="../process/";
// // let dirBuf=Buffer.from(directory);
// let files = fs.readdirSync(directory);
// console.log(files);
// paso2
// let ruta="../process/";
// let rutaArchivo="main.md"
// function array(directory){
//     let arr=[];
//     arr.push(directory);
// console.log(arr);//[main.md]
// }
// // array(ruta);
// array(rutaArchivo);
// paso3
// let ruta="../process/";
// const path = require('path');
// const fs = require("fs");
// function array(directory){
//     // subpaso1
//     let arrFile = fs.readdirSync(directory);
//    console.log(arrFile);
// //    subpaso 2
//  arrFile.forEach(element => {
//      if(path.extname(element) === '.md'){
//         console.log(element);
//      }
//       });
// }
// array(ruta);
// // array(rutaArchivo);
// paso4
// // let ruta="../process/";
// let rutaArchivo="main.md";
// const path = require('path');
// const fs = require("fs");
// function arrayMarckdowns( directory,file){
//     if (path.extname(directory) ==='.md') {
//         let arr=[];
//         arr.push(directory);
//         console.log(arr);//[main.md]
//     }else{
//         let arrFile = fs.readdirSync(directory);
//         console.log(arrFile);
//      //    subpaso 2
//       arrFile.forEach(element => {
//           if(path.extname(element) === '.md'){
//              console.log(element);
//           }
//            });
//     }
// }
// arrayMarckdowns( rutaArchivo)
// // arrayMarckdowns( ruta);
// // // paso 5
// let ruta="../process/";//directory
// // let ruta="main.md";//file
// const path = require('path');
// const fs = require("fs");
// function arrayMarckdowns( file){
//     if (path.extname(file) ==='.md') {
//         let arr=[];
//         arr.push(file);
//         // console.log(arr);//[main.md]
//     }else{
//         let arrFile = fs.readdirSync(file);
//         // console.log(arrFile);
//      //    subpaso 2
//       arrFile.forEach(element => {
//           if(path.extname(element) === '.md'){
//              console.log(element);
//           }
//            });
//     }
// }
// arrayMarckdowns(ruta);
// // paso 6
// // let ruta="../process/";//directory
// let ruta="main.md";//file
// const path = require('path');
// const fs = require("fs");
// function arrayMarckdowns( file){
//     let arr=[];
//     if (file) {
//         arr.push(file);
//         // console.log("archivo"+arr);//[main.md]
//     }else {
//             let arrFile = fs.readdirSync(file);
//             arrFile.forEach(element => {
//              arr = arr.concat(arrayMarckdowns(path.join(file, element)));
//         });
//             }
//             console.log(arr);
//         }
//         arrayMarckdowns(ruta);
// paso 7
// let ruta="../process/";//directory
// let ruta="main.md";//file
// const path = require('path');
// const fs = require("fs");
// function arrayMarckdowns( file){
//     let arr=[];
//     if (path.extname(file) ==='.md') {
//                 arr.push(file);
//                 // console.log(arr);//[main.md]
//             }else{
//                 let arrFile = fs.readdirSync(file);
//                 // console.log(arrFile);
//              //    subpaso 2
//               arrFile.forEach(element => {
//                 if(path.extname(element) === '.md'){
//                 arr = arr.concat(arrayMarckdowns(path.join(file, element)));
//                     //  console.log(element);
//                   }
//                    });
//             }
//             console.log(arr);
//         }
//         arrayMarckdowns(ruta);
//borrar
// const path = require('path');
// const fs = require("fs");
// const transformToAbsPath = pathRelative => {
//   return path.resolve(pathRelative);
// };
// exports.transformToAbsPath = transformToAbsPath;
// 
// paso 8
// let ruta="../process/";//directory
// let ruta="main.md";//file
var path = require('path');

var fs = require("fs");

module.exports.arrayMarckdowns = function (file) {
  var arr = [];

  if (path.extname(file) === '.md') {
    arr.push(file); // console.log(arr);//[main.md]
  } else {
    var arrFile = fs.readdirSync(file); // console.log(arrFile);
    //    subpaso 2

    arrFile.forEach(function (element) {
      if (path.extname(element) === '.md') {
        arr = arr.concat(arrayMarckdowns(path.join(file, element))); //  console.log(element);
      }
    });
  }

  return arr; // console.log(arr);
}; // arrayMarckdowns(ruta);