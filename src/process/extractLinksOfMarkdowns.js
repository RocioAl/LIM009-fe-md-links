
// paso 1
const fs = require("fs");
const myMarked = require('marked');
// const myMarked = require('marked'); // ruta absoluta
// const path = require('path');

// console.log(path.resolve('C:\\Users\\Rocio Soledad\\Desktop\\LIM009-fe-md-links\\LIM009-fe-md-links\\Readme.md'))  

// comprobar si es absoluta

// const path = require('path');
// let link= 'C:\\Users\\Rocio Soledad\\Desktop\\LIM009-fe-md-links\\LIM009-fe-md-links\\Readme.md';

// console.log(path.resolve(link)+ "si es absoluta") ;

    



// let link= 'C:\Users\Rocio Soledad\Desktop\LIM009-fe-md-links\LIM009-fe-md-links\Readme.md';
module.exports.linksmd=( file) => {

  let links = [];
  const markdown = fs.readFileSync(file,'utf8');

  let renderer = new myMarked.Renderer();
 
  renderer.link = (href, title, text) => {
      links.push({ href:href, text:text,  file:file})
  };
  myMarked(markdown, { renderer: renderer })

  return links;
//    console.log(links) ;
}
// console.log(linksmd(link));




