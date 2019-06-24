"use strict";

//1
//2 const path=require('path');
// module.exports.processAbsolute=()=>{
//     console.log(path.isAbsolute('/test/demo_path.js'));
// }
//true
// 3
// const path=require('path');
// module.exports.processAbsolute=(router)=>{
//         console.log(path.isAbsolute(router)) ;
// 4    }
var path = require('path'); // const ruta='/test/demo_path.js';


module.exports.pathAbsolute = function (ruta) {
  return path.isAbsolute(ruta);
};