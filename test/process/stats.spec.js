import {StastLink,BrokenLinks, pathAbsMD} from '../../src/process/stats.js';
const pathAbsMD  = [
  { href: 'https://medium.com/netscape/a-guide-to-create-a-nodejs-command-line-package-c2166ad0452e',
    text: 'Linea de comando CLI',
    file: `${process.cwd()}C:\\Users\\Rocio Soledad\\Desktop\\LIM009-fe-md-links\\LIM009-fe-md-links\\Readme.md`},
  { href: 'https://nodejs.org/api/fs.html#fs_fs_readfile_path_options_callback',
    text: 'Leer un archivo',
    file: `${process.cwd()}C:\\Users\\Rocio Soledad\\Desktop\\LIM009-fe-md-links\\LIM009-fe-md-links\\Readme.md`},
  { href: 'https://javascript.info/promise-basics',
    text: 'Promise ',
    file: `${process.cwd()}C:\\Users\\Rocio Soledad\\Desktop\\LIM009-fe-md-links\\LIM009-fe-md-links\\Readme.md`}
];

const ouput = '- Total  : 3 - Unique : 2';

describe('StastLink', () => {
  it('debería ser igual a una función', () => {
    expect(typeof StastLink).toBe('function');
  });
});
  

test('Debería retornar el total de links y cuantos de los links no se repiten', (done) => {
  StastLink(pathAbsMD).then((respuesta) => {
    expect(respuesta).toEqual(ouput);
    done();
  });
});

describe('BrokenLinks', () => {
  it('debería ser igual a una función', () => {
    expect(typeof BrokenLinks).toBe('function');
  });
});
  
test('Debería contar cuantos links son broken', (done) => {
  BrokenLinks(pathAbsMD).then((respuesta) => {
    expect(respuesta).toEqual('Broken: 1');
    done();
  });
});

