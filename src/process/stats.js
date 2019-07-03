// let ruta= 'C:\\Users\\Rocio Soledad\\Desktop\\LIM009-fe-md-links\\LIM009-fe-md-links';
// let ruta= 'C:\\Users\\Rocio Soledad\\Desktop\\LIM0-09-fe-md-links\\LIM009-fe-md-links\\Readme.md';

const chalk = require('chalk'); 
const fetch = require('node-fetch');
const jk=require('../process/arrayOfMarkdowns');
import "@babel/polyfill";

   module.exports.statsLinks = async (file) =>{
      let statsArrayMarckdowns = jk.arrayMarckdowns(file);
      let arrayStats = [];
      let unique = 0;
      let broken = 0;
      await Promise.all(statsArrayMarckdowns.map(async(element )=> {
        await fetch(element.href).then(res=>{
          arrayStats.push(element);
          if(res.ok === true){
            unique++;
          }else if(res.code === 'ENOTFOUND'){
            broken++
          } else{
            broken++; } 
        }).catch(err =>{
          broken++;
        });
      }));
      console.log(`- Unique : ${chalk.green(unique)}`);
      console.log(`- Broken: ${chalk.red(broken)}`);
      console.log(`- Total : ${chalk.yellow(unique + broken)}`);
    }

    // console.log(statsLinks());

























// https://www.youtube.com/watch?v=Vpb4v4G4N-c&list=PLL1UEcDHVPjkGjqM4mvAb2z9meV7jWmbd&index=9