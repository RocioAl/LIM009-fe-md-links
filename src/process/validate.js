// let ruta= 'C:\\Users\\Rocio Soledad\\Desktop\\LIM009-fe-md-links\\LIM009-fe-md-links';
//  let ruta= 'C:\\Users\\Rocio Soledad\\Desktop\\LIM009-fe-md-links\\LIM009-fe-md-links\\Readme.md';
const chalk = require('chalk'); 
const fetch = require('node-fetch');
const ef=require('../process/arrayOfMarkdowns');
    
module.exports.validateLinks = (file) =>{ 
    let validate = ef.arrayMarckdowns(file);
    validate.forEach(element => {
      fetch(element.href).then(response =>{
        if(response.ok === true){      
          console.log((` - ${element.href} `), chalk.green.bold(`// ✓ ${response.status} ${response.statusText}`));
        }else if(response.ok === false){
          console.log((`- ${element.href} `), chalk.red.bold(`// X ${response.status} ${response.statusText}`));
        } else{
          
        }
      }).catch(err =>{
        console.log((` - ${element.href} `), chalk.magenta.bold(`// CERTIFICADO EXPIRADO`));
      });
    });
   
    }
// responde-ok returns true if the response returned successfully
// console.log(validateLinks(ruta));