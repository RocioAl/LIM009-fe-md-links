import {  processConvertToAbsolute} from '../../src/process/convertToAbsolute.js';
import path from 'path';


describe('Es una función que permite convertir una ruta en absoluta', () => {
  it('processConvertToAbsolute debería ser una función', () => {
    expect(typeof processConvertToAbsolute).toBe('function');
  });
  it('Convierte una ruta relativa en ruta absoluta', () => {
    let expected = path.join(process.cwd(), '/example', '/example_relative.js');
    expect(processConvertToAbsolute('example/example_relative.js'))
      .toEqual(expected);  
  });     
});