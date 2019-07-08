#!/usr/bin/env node

const ty = require('../search-files/main');
const bg = require('../process/stats');
const chalk = require('chalk'); 
const path = process.argv[2];
const options = process.argv[3];
const status = process.argv[4];

if (options === '--validate' && status === '--stats' || status === '--stats' && options === '--validate' || options === '--s' && status === '--v' || options === '--v' && status === '--s') {
    ty.mdLinks(path, {validate: true}) 
    .then(res => {
     bg.StastLink(res).then(res => console.log(res)) ;
     bg.BrokenLinks(res).then(res => console.log(res));
    });
} else if (options === '--validate' || options === '--v') {
     ty.mdLinks(path, {validate: true})
     .then(res => res.forEach(objLinks => {
    if (objLinks.status===200) {
       console.log(` \nhref : ${chalk.green.bold( `${objLinks.href}`)}, \nvalue :  ${chalk.yellow.bold( `${objLinks.value}`)}, \nstatus:${chalk.yellow.bold( `${objLinks.status}`)}, \ntext: ${chalk.green.bold( `${objLinks.text}`)}`)
    }else if(objLinks.status===404) {
      console.log(` \nhref : ${chalk.green.bold( `${objLinks.href}`)}, \nvalue :  ${chalk.red.bold( `${objLinks.value}`)}, \nstatus:${chalk.red.bold( `${objLinks.status}`)}, \ntext: ${chalk.green.bold( `${objLinks.text}`)}`)
    }else{
      console.log(` \nhref : ${chalk.green.bold( `${objLinks.href}`)}, \nvalue :  ${chalk.magenta.bold( `${objLinks.value}`)}, \nstatus:${chalk.magenta.bold( `${objLinks.status}`)}, \ntext: ${chalk.green.bold( `${objLinks.text}`)}`)
    }
}))
} else if (options === '--stats' || options === '--s') {
    ty.mdLinks(path, {validate: false})
    .then(res => { 
     bg.StastLink(res).then(response => console.log(response));
     bg.BrokenLinks(res).then(res => console.log(res));
})
} else{
    ty.mdLinks(path, {validate: false})
    .then(res => res.forEach((objLinks) => 
     console.log(`- ${chalk.bold(objLinks.text)} : ${chalk.green(objLinks.href)}`)));
}

