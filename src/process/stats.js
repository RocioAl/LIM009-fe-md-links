
const ew=require('../process/validate');
const chalk = require('chalk'); 
// const pathAbsMD  = [
//   { href: 'https://medium.com/netscape/a-guide-to-create-a-nodejs-command-line-package-c2166ad0452e',
//     text: 'Linea de comando CLI',
//     file: `${process.cwd()}C:\\Users\\Rocio Soledad\\Desktop\\LIM009-fe-md-links\\LIM009-fe-md-links\\Readme.md`},
//   { href: 'https://nodejs.org/api/fs.html#fs_fs_readfile_path_options_callback',
//     text: 'Leer un archivo',
//     file: `${process.cwd()}C:\\Users\\Rocio Soledad\\Desktop\\LIM009-fe-md-links\\LIM009-fe-md-links\\Readme.md`},
//   { href: 'https://javascript.info/promise-basics',
//     text: 'Promise ',
//     file: `${process.cwd()}C:\\Users\\Rocio Soledad\\Desktop\\LIM009-fe-md-links\\LIM009-fe-md-links\\Readme.md`}
// ];

module.exports.StastLink= (arrLinks) => {
  const validate = ew.validateLink(arrLinks);
  return new Promise((res) => {
    validate.then((links) => {
      const total = links.length;
      const uniqueLinks = [...new Set(links.map(links => links.href))].length;
      res(`- Total  : ${chalk.yellow(total)} - Unique : ${chalk.green(uniqueLinks)}`);
   });
 });
};
module.exports.BrokenLinks = (arrLinks) => {
  const validate = ew.validateLink(arrLinks);
  return new Promise((res) => {
    validate.then((link) => {
      const filterBroken = link.filter(links => links.value === 'CERTIFICADO EXPIRADO');
      // res(`Broken: ${filterBroken.length}`)
      res(`- Broken: ${chalk.red.bold( `${filterBroken.length}`)}`)
    });
  });
};



// StastLink(pathAbsMD).then((result) => console.log(result));
// BrokenLinks(pathAbsMD).then((result) => console.log(result));




















