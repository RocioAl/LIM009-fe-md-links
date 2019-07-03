import { pathAbsolute} from '../../src/process/absolute.js';
import path from 'path';
describe('Es una función que permite conocer si la ruta es absoluta o no', () => {
  it('pathAbsolute debería ser una función', () => {
    expect(typeof pathAbsolute).toBe('function');
  });
  it('Es una ruta absoluta', () => {
    expect(pathAbsolute('example/example_relative.js')).toBe(false);        
  });
  it('Es una ruta absoluta', () => {
    let pathAbsolut = path.join(process.cwd(), '/example', '/example_relative.js');
    expect(pathAbsolute(pathAbsolut)).toBe(true);        
  });
});

