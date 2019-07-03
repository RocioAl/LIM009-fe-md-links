// let ruta= 'C:\\Users\\Rocio Soledad\\Desktop\\LIM009-fe-md-links\\LIM009-fe-md-links\\Readme.md';
const chalk = require('chalk'); 
const so=require('./arrayOfMarkdowns')
const file = process.argv[2];
module.exports.resultWithOption = () =>{
  let result = so.arrayMarckdowns(file);
  result.map(function (link) {
           console.log(`- ${chalk.bold(link.text)} : ${chalk.green(link.href)}`);
      });  
    }    
  // console.log(resultWithOption());