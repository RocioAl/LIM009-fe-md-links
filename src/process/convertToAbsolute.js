// 1
// const path = require('path');
// let filename=path.resolve('test/demo_path.js');
// console.log(filename);
// ///test/demo_path.js

// 2
// const router='test/demo_path.js';
// const path = require('path');
// let filename=path.resolve(router);
// console.log(filename);
///test/demo_path.js


// 3


//  const path=require('path');
// module.exports.processConvertToAbsolute=(router)=>{
//     let filename=path.resolve(router);
//     console.log(filename);

// }

//paso4
const path = require('path');
// const ruta='/test/demo_path.js';
module.exports.processConvertToAbsolute = (ruta) => {
    return path.resolve(ruta);
    // console.log(path.resolve(ruta));
};
    






