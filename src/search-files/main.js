// paso1
// const mdLinks=require('../process/absolute');
// mdLinks.processAbsolute();
//true
// paso 1.1
// const router='test/demo_path.js'; //ruta relativa=false
// const mdLinks=require('../process/convertToAbsolute');
// mdLinks.processConvertToAbsolute(router);
///'test/demo_path.js'


// paso2
// const router='/test/demo_path.js';
// const mdLinks=require('../process/absolute');
// mdLinks.processAbsolute(router);




// paso3
// const router='/test/demo_path.js'; //ruta absoluta=true
// // const router='test/demo_path.js'; //ruta relativa=false

// const mdLinks=(path, options)=>{
//     const ab=require('../process/absolute');
//     ab.processAbsolute(path);
  
// }
// mdLinks(router,false)


// paso4
let ruta= 'C:\\Users\\Rocio Soledad\\Desktop\\LIM009-fe-md-links\\LIM009-fe-md-links\\Readme.md';
// // const ruta='/test/demo_path.js'; //ruta absoluta=true
// // const ruta='test/demo_path.js'; //ruta relativa=false
// // const ruta='/test/demo_path';//ruta directorio
// // const ruta='test/demo_path.md'; //ruta archivo markdown

// const ab=require('../process/absolute');
// const ac=require('../process/convertToAbsolute');
// const de=require('../process/fileOrDirectory');
// const ef=require('../process/isMarkdown');
// const gh=require('../process/readFile');




   

// const mdLinks=(path, options)=>{
    
//     console.log(ab.pathAbsolute(path));
//     const convertir=ab.pathAbsolute(path);
//     if (convertir===false) {
//         console.log(ac.processConvertToAbsolute(path)) ; 
//         console.log("se convirtió en absoluta");
//     }if(convertir===false||convertir===true){
//         de.isFileOrDirectory(path);//es archivo o directorio
//     }if(convertir===false||convertir===true){
//         ef.isMarkdownOrNot (path);//Si es Markdown o No es Markdown
//     }if(convertir===false||convertir===true){
//         gh.readMarkdowns(path);
//     }
//     }
//  mdLinks(ruta,false);
  



// paso5

// const ruta='/markdowns/ruta1.md';
// const ruta='/markdowns/ruta2.md';
// const ruta='/markdowns/ruta3.md';
// const path = require('path');
// const ab=require('../markdowns/ruta');
//    console.log(ab.processAbsolute(path));
    

const ab=require('../process/absolute');
const ac=require('../process/convertToAbsolute');
const de=require('../process/fileOrDirectory');
const ef=require('../process/isMarkdown');
const gh=require('../process/readFile');
const ij=require('../process/arrayOfMarkdowns');
const kl=require('../process/extractLinksOfMarkdowns');




   const mdLinks=(path, options)=>{
  
    console.log(ab.pathAbsolute(path) + " es absoluta ");
    const convertir=ab.pathAbsolute(path);
    if (convertir===false) {
       console.log(ac.processConvertToAbsolute(path) + "se convirtió en absoluta")  
        // console.log("se convirtió en absoluta");
     }else if(convertir===true){
       de.isFileOrDirectory(path);//es archivo o directorio
       console.log(ij.arrayMarckdowns(path)) ;
        ef.isMarkdownOrNot (path);//Si es Markdown o No es Markdown
        gh.readMarkdowns(path);//.md
        kl.linksmd(path);
         
    }
    }
 mdLinks(ruta,false);



























