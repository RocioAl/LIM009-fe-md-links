
const mdlinks = require('../search-files/main');
const file = process.argv[2];
const option = process.argv[3];

if(require.main === module){//se pasa todos los módulos anteriores al módulo actual
  mdlinks.mdlinks(file, option).then((re) => {
    console.log(re); 
  }, (error) =>{
     console.log(error);
  });
}
module.exports.mdlinks = mdlinks; 

// console.log(process.argv);