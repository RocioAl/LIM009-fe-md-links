'use strict';
const ew=require('../process/validate');
const ef=require('../process/stats');
const er=require('../process/result');

module.exports. mdlinks = (file, option) => {
  return new Promise((res, rej) =>{
    if(option === undefined){
      res(er.resultWithOption(file));         
    }else if(option === '--validate' || option === '--v'){
      res(ew.validateLinks(file));
    }else if(option === '--stats' || option === '--s'){
      res(ef.statsLinks (file));
    }else{
        rej('\n La opción que ingresaste no es válida. \n - Prueba con --v / --validate \n - Prueba con --s / -- stats \n');
      }
});         
}
