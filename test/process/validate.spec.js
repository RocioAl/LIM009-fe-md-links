 import {validateLink} from '../../src/process/validate.js';

  // import fetchMock from '../../node_modules/fetch-mock';
  const input = [{ href: 'https://medium.com/netscape/a-guide-to-create-a-nodejs-command-line-package-c2166ad0452e',
    text: 'Linea de comando CLI',
    file:`${process.cwd()}C:\\Users\\Rocio Soledad\\Desktop\\LIM009-fe-md-links\\LIM009-fe-md-links\\Readme.md`}];
  
  const ouput = [ { href: 'https://medium.com/netscape/a-guide-to-create-a-nodejs-command-line-package-c2166ad0452e',
    text: 'Linea de comando CLI',
    file:`${process.cwd()}C:\\Users\\Rocio Soledad\\Desktop\\LIM009-fe-md-links\\LIM009-fe-md-links\\Readme.md`,
    status: 200,
    value: '// ✓' } ];
  
  const input1 = [{ href: 'http://algo.com/2/3/',
    text: 'http://algo.com/2/3/',
    file: `${process.cwd()}C:\\Users\\Rocio Soledad\\Desktop\\LIM009-fe-md-links\\LIM009-fe-md-links\\Readme.md` }];
  
  const ouput1 = [ { href: 'http://algo.com/2/3/',
    text: 'http://algo.com/2/3/',
    file: `${process.cwd()}C:\\Users\\Rocio Soledad\\Desktop\\LIM009-fe-md-links\\LIM009-fe-md-links\\Readme.md`,
    status: 404,
    value: ' // X' } ];
  
  describe('validateLink', () => {
    it('debería ser igual a una función', () => {
      expect(typeof validateLink).toBe('function');
    });
  });
  
  test('Debería retornar el objeto ingresado adicionando las propiedades status 200 y value OK', (done) => {
    validateLink(input).then((result) => {
      expect(result).toEqual(ouput);
      done();
    });
  });
  
  test('Debería retornar el objeto ingresado adicionando las propiedades status 400 y value Fail', (done) => {
    validateLink(input1).then((result) => {
      expect(result).toEqual(ouput1);
      done();
    });
  });
  
  
  
  